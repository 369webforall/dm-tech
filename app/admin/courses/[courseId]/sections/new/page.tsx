import { notFound, redirect } from "next/navigation";
import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { SectionForm } from "@/components/admin/courses/section-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function NewSectionPage({
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
  });

  if (!course) {
    notFound();
  }

  // Get the highest order value to set the default for the new section
  const highestOrder = await prisma.courseSection.findFirst({
    where: {
      courseId: courseId,
    },
    orderBy: {
      order: "desc",
    },
    select: {
      order: true,
    },
  });

  const nextOrder = highestOrder ? highestOrder.order + 1 : 1;

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
            <BreadcrumbLink href={`/admin/courses/${course.id}/sections`}>
              Sections
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>New Section</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DashboardHeader
        heading={`New Section for ${course.name}`}
        text="Add a new section to your course."
      />

      <div className="mt-8">
        <SectionForm courseId={courseId} defaultOrder={nextOrder} />
      </div>
    </div>
  );
}
