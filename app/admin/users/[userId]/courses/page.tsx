import { redirect } from "next/navigation";
import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { UserCourseManagement } from "@/components/admin/user-course-management";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function UserCoursesPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const currentUser = await getCurrentUser();

  if (!currentUser || !isAdmin(currentUser)) {
    redirect("/dashboard");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  if (!user) {
    redirect("/admin/users");
  }

  // Get all courses
  const courses = await prisma.course.findMany({
    orderBy: {
      name: "asc",
    },
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  // Get user's enrolled courses
  const userCourses = await prisma.userCourseAccess.findMany({
    where: {
      userId: user.id,
    },
    select: {
      courseId: true,
    },
  });

  const enrolledCourseIds = userCourses.map((uc) => uc.courseId);

  return (
    <div className="container mx-auto py-10">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/admin/users/${user.id}`}>
              {user.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Courses</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DashboardHeader
        heading={`Manage Courses for ${user.name}`}
        text={`Email: ${user.email} | Role: ${user.role}`}
      />

      <div className="mt-8">
        <UserCourseManagement
          userId={user.id}
          courses={courses}
          enrolledCourseIds={enrolledCourseIds}
        />
      </div>
    </div>
  );
}
