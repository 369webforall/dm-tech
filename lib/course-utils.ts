import type { Course, Lesson } from "@/lib/types";
import prisma from "./prisma";
import { unstable_cache } from "next/cache";

// Get course with sections and lessons
export const getCourseWithLessons = unstable_cache(
  async (courseId: string) => {
    return prisma.course.findUnique({
      where: {
        id: courseId,
      },
      select: {
        id: true,
        name: true,
        description: true,
        courseSections: {
          orderBy: {
            order: "asc",
          },
          select: {
            id: true,
            name: true,
            order: true,
            lessons: {
              orderBy: {
                order: "asc",
              },
              select: {
                id: true,
                name: true,
                order: true,
                status: true,
              },
            },
          },
        },
      },
    });
  },
  ["course-with-lessons"],
  { revalidate: 3600 } // 1 hour
);

// Get lesson details
export const getLessonDetails = unstable_cache(
  async (lessonId: string) => {
    return prisma.lesson.findUnique({
      where: {
        id: lessonId,
      },
      select: {
        id: true,
        name: true,
        description: true,
        youtubeVideoId: true,
        section: {
          select: {
            id: true,
            courseId: true,
          },
        },
      },
    });
  },
  ["lesson-details"],
  { revalidate: 3600 } // 1 hour
);

// Get user's completed lessons for a course
export const getUserCompletedLessons = unstable_cache(
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
      select: {
        lessonId: true,
      },
    });
  },
  ["user-completed-lessons"],
  { revalidate: 300 } // 5 minutes
);

// Check if user has access to course
export const checkUserCourseAccess = unstable_cache(
  async (userId: string, courseId: string) => {
    const access = await prisma.userCourseAccess.findUnique({
      where: {
        userId_courseId: {
          userId: userId,
          courseId: courseId,
        },
      },
    });

    return !!access;
  },
  ["user-course-access"],
  { revalidate: 3600 } // 1 hour
);

// Find next lesson
export function findNextLesson(
  course: Course,
  currentLessonId: string
): Lesson | null {
  let nextLesson: Lesson | null = null;
  let foundCurrent = false;

  for (const section of course.courseSections) {
    for (const lesson of section.lessons) {
      if (foundCurrent) {
        nextLesson = lesson;
        break;
      }

      if (lesson.id === currentLessonId) {
        foundCurrent = true;
      }
    }

    if (nextLesson) break;
  }

  return nextLesson;
}
