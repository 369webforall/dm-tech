import { redirect } from "next/navigation";
import { getCurrentUser, isAdmin } from "@/lib/auths";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { CourseForm } from "@/components/admin/courses/course-form";

export default async function NewCoursePage() {
  const user = await getCurrentUser();

  if (!user || !isAdmin(user)) {
    redirect("/dashboard");
  }

  return (
    <div className="container mx-auto py-10">
      <DashboardHeader
        heading="Create Course"
        text="Add a new course to your platform."
      />

      <div className="mt-8">
        <CourseForm />
      </div>
    </div>
  );
}
