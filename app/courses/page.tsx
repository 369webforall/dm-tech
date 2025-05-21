import { getCurrentUser, isStudent } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { CourseCard } from "@/components/dashboard/course-card";
import { EmptyState } from "@/components/dashboard/empty-state";

export default async function CoursesPage() {
  const user = await getCurrentUser();

  // Get all public courses
  const courses = await prisma.course.findMany({
    where: {
      courseSections: {
        some: {
          status: "public",
        },
      },
    },
    include: {
      courseSections: {
        where: {
          status: "public",
        },
        select: {
          id: true,
        },
      },
    },
  });

  // If user is logged in and is a student, get their enrolled courses
  let enrolledCourseIds: string[] = [];
  let isUserStudent = false;

  if (user) {
    isUserStudent = isStudent(user);

    if (isUserStudent) {
      const userCourses = await prisma.userCourseAccess.findMany({
        where: {
          userId: user.id,
        },
        select: {
          courseId: true,
        },
      });

      enrolledCourseIds = userCourses.map((uc) => uc.courseId);
    }
  }

  return (
    <div className="container mx-auto py-10">
      <DashboardHeader
        heading="Available Courses"
        text="Browse our available courses."
      />

      {courses.length === 0 ? (
        <EmptyState
          title="No courses available"
          description="There are no courses available at the moment."
          action={
            user && isUserStudent
              ? {
                  label: "Go to Dashboard",
                  href: "/dashboard",
                }
              : undefined
          }
        />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {courses.map((course) => {
            const isEnrolled = enrolledCourseIds.includes(course.id);

            return (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.name}
                description={course.description}
                isEnrolled={isEnrolled}
                canAccess={isUserStudent && isEnrolled}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
