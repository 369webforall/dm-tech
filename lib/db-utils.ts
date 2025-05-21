import prisma from "./prisma";
import { unstable_cache } from "next/cache";

// Cache user courses with a 5-minute TTL
export const getUserCourses = unstable_cache(
  async (userId: string) => {
    // Only select the fields we actually need
    return prisma.userCourseAccess.findMany({
      where: {
        userId: userId,
      },
      select: {
        courseId: true,
        course: {
          select: {
            id: true,
            name: true,
            description: true,
            courseSections: {
              select: {
                lessons: {
                  select: {
                    id: true,
                  },
                },
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

// Get course progress efficiently
export const getCourseProgress = unstable_cache(
  async (userId: string, courseId: string) => {
    // Count total lessons
    const totalLessons = await prisma.lesson.count({
      where: {
        section: {
          courseId: courseId,
        },
      },
    });

    // Count completed lessons
    const completedLessons = await prisma.completedLesson.count({
      where: {
        userId: userId,
        lesson: {
          section: {
            courseId: courseId,
          },
        },
      },
    });

    return {
      totalLessons,
      completedLessons,
      progress:
        totalLessons > 0
          ? Math.round((completedLessons / totalLessons) * 100)
          : 0,
    };
  },
  ["course-progress"],
  { revalidate: 300 } // 5 minutes
);

// Get all course progress in one query
export const getAllCourseProgress = unstable_cache(
  async (userId: string) => {
    // Get all completed lessons grouped by course
    const completedLessonsByCourse = await prisma.$queryRaw`
      SELECT 
        cs.course_id as courseId, 
        COUNT(DISTINCT cl.lesson_id) as completedCount
      FROM 
        completed_lessons cl
      JOIN 
        lessons l ON cl.lesson_id = l.id
      JOIN 
        course_sections cs ON l.section_id = cs.id
      WHERE 
        cl.user_id = ${userId}
      GROUP BY 
        cs.course_id
    `;

    return completedLessonsByCourse;
  },
  ["all-course-progress"],
  { revalidate: 300 } // 5 minutes
);
