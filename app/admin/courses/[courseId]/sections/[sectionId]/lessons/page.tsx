import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Plus } from "lucide-react";
import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Button } from "@/components/ui/button";
import { LessonsTable } from "@/components/admin/courses/lessons-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function SectionLessonsPage({
  params,
}: {
  params: Promise<{ courseId: string; sectionId: string }>;
}) {
  const { courseId, sectionId } = await params;
  const user = await getCurrentUser();

  if (!user || !isAdmin(user)) {
    redirect("/dashboard");
  }

  const section = await prisma.courseSection.findUnique({
    where: {
      id: sectionId,
      courseId: courseId,
    },
    include: {
      course: {
        select: {
          name: true,
        },
      },
      lessons: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!section) {
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
            <BreadcrumbLink href={`/admin/courses/${courseId}`}>
              {section.course.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/admin/courses/${courseId}/sections`}>
              Sections
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{section.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DashboardHeader
        heading={`Lessons for ${section.name}`}
        text="Manage lessons and their order."
      >
        <Button asChild>
          <Link
            href={`/admin/courses/${courseId}/sections/${sectionId}/lessons/new`}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Lesson
          </Link>
        </Button>
      </DashboardHeader>

      <div className="mt-8">
        <LessonsTable
          courseId={courseId}
          sectionId={sectionId}
          lessons={section.lessons}
        />
      </div>
    </div>
  );
}
