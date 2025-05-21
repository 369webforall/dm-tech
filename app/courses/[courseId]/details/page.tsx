import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getCurrentUser } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EnrollButton } from "@/components/courses/enroll-button";
import { Skeleton } from "@/components/ui/skeleton";
import { unstable_cache } from "next/cache";
import Link from "next/link";

// Cache course details
const getCourseWithPreviewLessons = unstable_cache(
  async (courseId: string) => {
    return prisma.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        courseSections: {
          where: {
            status: "public",
          },
          orderBy: {
            order: "asc",
          },
          include: {
            lessons: {
              where: {
                status: "preview",
              },
              orderBy: {
                order: "asc",
              },
            },
          },
        },
      },
    });
  },
  ["course-with-preview-lessons"],
  { revalidate: 3600 } // Cache for 1 hour
);

// Course content component with Suspense
async function CourseContent({ courseId }: { courseId: string }) {
  const course = await getCourseWithPreviewLessons(courseId);

  if (!course) {
    redirect("/courses");
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Course Content</h2>
        <div className="space-y-4">
          {course.courseSections.map((section) => (
            <div key={section.id} className="border rounded-md p-4">
              <h3 className="font-medium">{section.name}</h3>
              {section.lessons.length > 0 && (
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Preview lessons:
                  </p>
                  <ul className="list-disc pl-5 text-sm">
                    {section.lessons.map((lesson) => (
                      <li key={lesson.id}>{lesson.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Enrollment section component with Suspense
async function EnrollmentSection({
  courseId,
  userId,
}: {
  courseId: string;
  userId?: string;
}) {
  // Check if user is already enrolled
  let isEnrolled = false;
  let canAccess = false;

  if (userId) {
    const userCourseAccess = await prisma.userCourseAccess.findUnique({
      where: {
        userId_courseId: {
          userId: userId,
          courseId: courseId,
        },
      },
    });

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    isEnrolled = !!userCourseAccess;
    canAccess = user?.role === "student" && isEnrolled;
  }

  // If user is enrolled and has student role, redirect to course page
  if (canAccess) {
    redirect(`/courses/${courseId}`);
  }

  return (
    <div className="border-t pt-6">
      <h2 className="text-xl font-semibold mb-4">Enrollment</h2>
      {isEnrolled ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <p className="text-yellow-800">
            You are enrolled in this course, but you need a student account to
            access it. Please contact an administrator to upgrade your account.
          </p>
        </div>
      ) : (
        <EnrollButton courseId={courseId} />
      )}
    </div>
  );
}

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{
    courseId: string;
  }>;
}) {
  const user = await getCurrentUser();
  const { courseId } = await params;
  // Get course details
  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  if (!course) {
    redirect("/courses");
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" className="mb-6" asChild>
          <Link href="/courses">← Back to Courses</Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{course.name}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Suspense
                fallback={
                  <div className="space-y-4">
                    <Skeleton className="h-8 w-40" />
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-24 w-full" />
                    ))}
                  </div>
                }
              >
                <CourseContent courseId={courseId} />
              </Suspense>

              <Suspense
                fallback={
                  <div className="border-t pt-6 space-y-4">
                    <Skeleton className="h-8 w-40" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                }
              >
                <EnrollmentSection courseId={courseId} userId={user?.id} />
              </Suspense>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
