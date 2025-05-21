import { notFound, redirect } from "next/navigation";
import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { CourseForm } from "@/components/admin/courses/course-form";

export default async function EditCoursePage({
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

  return (
    <div className="container mx-auto py-10">
      <DashboardHeader heading="Edit Course" text="Update course details." />

      <div className="mt-8">
        <CourseForm course={{ ...course, notionDoc: course.notionDoc ?? "" }} />
      </div>
    </div>
  );
}
