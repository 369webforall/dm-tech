import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getCurrentUser, isStudent } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { CourseCard } from "@/components/dashboard/course-card";
import { EmptyState } from "@/components/dashboard/empty-state";
import { unstable_cache } from "next/cache";

// Cache user courses with a 5-minute TTL
const getUserCourses = unstable_cache(
  async (userId: string) => {
    return prisma.userCourseAccess.findMany({
      where: {
        userId: userId,
      },
      include: {
        course: {
          include: {
            courseSections: {
              include: {
                lessons: true,
              },
            },
          },
        },
      },
    });
  },
  ["user-courses"],
  { revalidate: 300 } // 5 minutes
);

// Cache completed lessons with a 5-minute TTL
const getCompletedLessons = unstable_cache(
  async (userId: string) => {
    return prisma.completedLesson.findMany({
      where: {
        userId: userId,
      },
      select: {
        lessonId: true,
        lesson: {
          select: {
            section: {
              select: {
                courseId: true,
              },
            },
          },
        },
      },
    });
  },
  ["completed-lessons"],
  { revalidate: 300 } // 5 minutes
);

// Calculate progress for a course
function calculateProgress(
  courseId: string,
  totalLessons: number,
  completedLessons: {
    lessonId: string;
    lesson: { section: { courseId: string } };
  }[]
) {
  if (totalLessons === 0) return 0;

  const completedInCourse = completedLessons.filter(
    (cl) => cl.lesson.section.courseId === courseId
  ).length;

  return Math.round((completedInCourse / totalLessons) * 100);
}

// CourseList component to allow for Suspense
async function CourseList({ userId }: { userId: string }) {
  // Fetch data in parallel
  const [userCourses, completedLessons] = await Promise.all([
    getUserCourses(userId),
    getCompletedLessons(userId),
  ]);

  // Calculate progress for each course
  const coursesWithProgress = userCourses.map((userCourse) => {
    const totalLessons = userCourse.course.courseSections.reduce(
      (acc, section) => acc + section.lessons.length,
      0
    );

    const progress = calculateProgress(
      userCourse.courseId,
      totalLessons,
      completedLessons
    );

    return {
      ...userCourse.course,
      progress,
    };
  });

  if (coursesWithProgress.length === 0) {
    return (
      <EmptyState
        title="No courses yet"
        description="You haven't enrolled in any courses yet."
        action={{
          label: "Browse Courses",
          href: "/courses",
        }}
      />
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      {coursesWithProgress.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.name}
          description={course.description}
          progress={course.progress}
        />
      ))}
    </div>
  );
}

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  // Check if user has student role
  if (!isStudent(user)) {
    return (
      <div className="container mx-auto py-10">
        <DashboardHeader
          heading="Access Denied"
          text="You need a student account to access courses."
        />
        <div className="mt-8">
          <EmptyState
            title="Student Access Required"
            description="Your account doesn't have student privileges. Please contact an administrator."
            action={{
              label: "Go to Home",
              href: "/",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <DashboardHeader
        heading="My Courses"
        text="View and continue your enrolled courses."
      />

      <Suspense
        fallback={
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col h-full rounded-lg border overflow-hidden"
                >
                  <div className="p-6">
                    <div className="h-6 w-3/4 mb-2 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-full mb-1 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-10 bg-gray-200 rounded animate-pulse" />
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="p-6 mt-auto">
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))}
          </div>
        }
      >
        <CourseList userId={user.id} />
      </Suspense>
    </div>
  );
}
