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

export default async function EditLessonPage({
  params,
}: {
  params: Promise<{ courseId: string; sectionId: string; lessonId: string }>;
}) {
  const { courseId, sectionId, lessonId } = await params;
  const user = await getCurrentUser();

  if (!user || !isAdmin(user)) {
    redirect("/dashboard");
  }

  const lesson = await prisma.lesson.findUnique({
    where: {
      id: lessonId,
      sectionId: sectionId,
    },
    include: {
      section: {
        include: {
          course: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!lesson || lesson.section.courseId !== courseId) {
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
              {lesson.section.course.name}
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
              {lesson.section.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Edit Lesson</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DashboardHeader
        heading={`Edit Lesson for ${lesson.section.name}`}
        text="Update lesson details."
      />

      <div className="mt-8">
        <LessonForm courseId={courseId} sectionId={sectionId} lesson={lesson} />
      </div>
    </div>
  );
}
