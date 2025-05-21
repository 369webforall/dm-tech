import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Plus } from "lucide-react";
import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Button } from "@/components/ui/button";
import { SectionsTable } from "@/components/admin/courses/sections-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function CourseSectionsPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const user = await getCurrentUser();

  if (!user || !isAdmin(user)) {
    redirect("/dashboard");
  }

  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      courseSections: {
        orderBy: {
          order: "asc",
        },
        include: {
          lessons: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  });

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/courses">Courses</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/admin/courses/${course.id}`}>
              {course.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Sections</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DashboardHeader
        heading={`Sections for ${course.name}`}
        text="Manage course sections and their order."
      >
        <Button asChild>
          <Link href={`/admin/courses/${course.id}/sections/new`}>
            <Plus className="mr-2 h-4 w-4" />
            Add Section
          </Link>
        </Button>
      </DashboardHeader>

      <div className="mt-8">
        <SectionsTable courseId={course.id} sections={course.courseSections} />
      </div>
    </div>
  );
}
