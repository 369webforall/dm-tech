import { notFound, redirect } from "next/navigation";
import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { LessonForm } from "@/components/admin/courses/lesson-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function NewLessonPage({
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
    },
  });

  if (!section) {
    notFound();
  }

  // Get the highest order value to set the default for the new lesson
  const highestOrder = await prisma.lesson.findFirst({
    where: {
      sectionId: sectionId,
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
            <BreadcrumbLink
              href={`/admin/courses/${courseId}/sections/${sectionId}/lessons`}
            >
              {section.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>New Lesson</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DashboardHeader
        heading={`New Lesson for ${section.name}`}
        text="Add a new lesson to your section."
      />

      <div className="mt-8">
        <LessonForm
          courseId={courseId}
          sectionId={sectionId}
          defaultOrder={nextOrder}
        />
      </div>
    </div>
  );
}
