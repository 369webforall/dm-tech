import { redirect } from "next/navigation";
import { getCurrentUser, isStudent } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { CourseHeader } from "@/components/courses/course-header";
import { CourseSidebar } from "@/components/courses/course-sidebar";
import { CourseProgress } from "@/components/courses/course-progress";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signin");
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

  // Get course details with sections and lessons
  const course = await prisma.course.findUnique({
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

  if (!course) {
    redirect("/dashboard");
  }

  // Get completed lessons for progress calculation
  const completedLessons = await prisma.completedLesson.findMany({
    where: {
      userId: user.id,
      lesson: {
        section: {
          courseId: courseId,
        },
      },
    },
  });

  const completedLessonIds = completedLessons.map((cl) => cl.lessonId);

  // Find the first incomplete lesson to redirect to
  let firstIncompleteLesson = null;

  for (const section of course.courseSections) {
    for (const lesson of section.lessons) {
      if (!completedLessonIds.includes(lesson.id)) {
        firstIncompleteLesson = lesson;
        break;
      }
    }
    if (firstIncompleteLesson) break;
  }

  // If all lessons are complete, use the first lesson
  const firstLesson = course.courseSections[0]?.lessons[0];
  const redirectLessonId = firstIncompleteLesson?.id || firstLesson?.id;

  if (redirectLessonId) {
    redirect(`/courses/${courseId}/lessons/${redirectLessonId}`);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <CourseHeader title={course.name} />
      <div className="flex flex-1">
        <CourseSidebar
          course={course}
          completedLessonIds={completedLessonIds}
        />
        <div className="flex-1 p-6">
          <CourseProgress
            courseId={course.id}
            totalLessons={course.courseSections.reduce(
              (acc, section) => acc + section.lessons.length,
              0
            )}
            completedLessons={completedLessonIds.length}
          />
          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold">Welcome to {course.name}</h2>
            <p className="mt-2 text-muted-foreground">
              Select a lesson from the sidebar to begin learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
