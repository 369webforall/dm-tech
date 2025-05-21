import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getCurrentUser, isStudent } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { CourseHeader } from "@/components/courses/course-header";
import { CourseSidebar } from "@/components/courses/course-sidebar";
import { VideoPlayer } from "@/components/courses/video-player";
import { LessonActions } from "@/components/courses/lesson-actions";
import { markLessonComplete } from "@/actions/lesson-actions";
import { unstable_cache } from "next/cache";
import type { Lesson, CourseSidebarProps } from "@/lib/types";
import { findNextLesson } from "@/lib/course-utils";

// Cache course data
const getCourseData = unstable_cache(
  async (courseId: string) => {
    return prisma.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        courseSections: {
          orderBy: {
            order: "asc",
          },
          include: {
            lessons: {
              orderBy: {
                order: "asc",
              },
            },
          },
        },
      },
    });
  },
  ["course-data"],
  { revalidate: 3600 } // Cache for 1 hour
);

// Cache lesson data
const getLessonData = unstable_cache(
  async (lessonId: string) => {
    return prisma.lesson.findUnique({
      where: {
        id: lessonId,
      },
      include: {
        section: true,
      },
    }) as Promise<(Lesson & { section: { courseId: string } }) | null>;
  },
  ["lesson-data"],
  { revalidate: 3600 } // Cache for 1 hour
);

// Cache completed lessons
const getCompletedLessons = unstable_cache(
  async (userId: string, courseId: string) => {
    return prisma.completedLesson.findMany({
      where: {
        userId: userId,
        lesson: {
          section: {
            courseId: courseId,
          },
        },
      },
    });
  },
  ["completed-lessons"],
  { revalidate: 300 } // Cache for 5 minutes
);

// Lesson content component with Suspense
async function LessonContent({
  courseId,
  lessonId,
  userId,
}: {
  courseId: string;
  lessonId: string;
  userId: string;
}) {
  // Fetch data in parallel
  const [lesson, completedLessons, course] = await Promise.all([
    getLessonData(lessonId),
    getCompletedLessons(userId, courseId),
    getCourseData(courseId),
  ]);

  if (!lesson || lesson.section.courseId !== courseId || !course) {
    redirect(`/courses/${courseId}`);
  }

  const completedLessonIds = completedLessons.map((cl) => cl.lessonId);
  const isLessonCompleted = completedLessonIds.includes(lessonId);
  const nextLesson = findNextLesson(course, lessonId);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{lesson.name}</h1>

      <VideoPlayer videoId={lesson.youtubeVideoId || ""} />

      {lesson.description && (
        <div className="mt-6 prose max-w-none">
          <h2 className="text-xl font-semibold">Description</h2>
          <p>{lesson.description}</p>
          <a
            href={course.notionDoc as string}
            target="_blank"
            className="text-orange-500 hover:border-b-2 mt-1 inline-block"
          >
            Document
          </a>
        </div>
      )}

      <LessonActions
        courseId={courseId}
        lessonId={lessonId}
        nextLessonId={nextLesson?.id}
        isCompleted={isLessonCompleted}
        markComplete={markLessonComplete}
      />
    </>
  );
}

// Sidebar content component with Suspense
async function SidebarContent({
  courseId,
  lessonId,
  userId,
}: {
  courseId: string;
  lessonId: string;
  userId: string;
}) {
  // Fetch data in parallel
  const [course, completedLessons] = await Promise.all([
    getCourseData(courseId),
    getCompletedLessons(userId, courseId),
  ]);

  if (!course) {
    redirect("/dashboard");
  }

  const completedLessonIds = completedLessons.map((cl) => cl.lessonId);

  // Use type assertion to match the expected type
  return (
    <CourseSidebar
      course={course as CourseSidebarProps["course"]}
      completedLessonIds={completedLessonIds}
      currentLessonId={lessonId}
    />
  );
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}) {
  const user = await getCurrentUser();
  const { courseId, lessonId } = await params;

  if (!user) {
    redirect("/login");
  }

  // Check if user has student role
  if (!isStudent(user)) {
    redirect("/dashboard");
  }

  // Check if user has access to this course
  const userCourseAccess = await prisma.userCourseAccess.findUnique({
    where: {
      userId_courseId: {
        userId: user.id,
        courseId: courseId,
      },
    },
  });

  if (!userCourseAccess) {
    redirect("/dashboard");
  }

  // Get course name for header
  const courseName = await prisma.course.findUnique({
    where: { id: courseId },
    select: { name: true },
  });

  return (
    <div className="flex min-h-screen flex-col">
      <CourseHeader title={courseName?.name || "Course"} />
      <div className="flex flex-1">
        {/* Sidebar with Suspense */}
        <Suspense
          fallback={
            <div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
              <div className="p-4">
                <div className="h-8 w-3/4 mb-4 bg-muted animate-pulse rounded" />
                <div className="space-y-2">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="space-y-2">
                        <div className="h-10 w-full bg-muted animate-pulse rounded" />
                        <div className="pl-4 space-y-2">
                          {Array(3)
                            .fill(0)
                            .map((_, j) => (
                              <div
                                key={j}
                                className="h-8 w-full bg-muted animate-pulse rounded"
                              />
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          }
        >
          <SidebarContent
            courseId={courseId}
            lessonId={lessonId}
            userId={user.id}
          />
        </Suspense>

        {/* Main content with Suspense */}
        <div className="flex-1 p-6">
          <Suspense
            fallback={
              <div>
                <div className="h-10 w-3/4 mb-6 bg-muted animate-pulse rounded" />
                <div className="relative aspect-video w-full bg-muted rounded-lg mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-muted animate-pulse" />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="h-6 w-40 mb-2 bg-muted animate-pulse rounded" />
                  <div className="h-4 w-full mb-1 bg-muted animate-pulse rounded" />
                  <div className="h-4 w-full mb-1 bg-muted animate-pulse rounded" />
                  <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
                </div>
              </div>
            }
          >
            <LessonContent
              courseId={courseId}
              lessonId={lessonId}
              userId={user.id}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
