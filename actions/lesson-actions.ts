"use server";

import { getCurrentUser, isAdmin, isStudent } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface LessonData {
  name: string;
  description?: string;
  youtubeVideoId: string;
  status: "public" | "private" | "preview";
  order: number;
}

export async function createLesson(data: LessonData & { sectionId: string }) {
  try {
    const user = await getCurrentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Unauthorized");
    }

    // Get the section to find the courseId
    const section = await prisma.courseSection.findUnique({
      where: { id: data.sectionId },
      select: { courseId: true },
    });

    if (!section) {
      throw new Error("Section not found");
    }

    // Create the lesson
    const lesson = await prisma.lesson.create({
      data: {
        name: data.name,
        description: data.description || null,
        youtubeVideoId: data.youtubeVideoId,
        status: data.status,
        order: data.order,
        sectionId: data.sectionId,
      },
    });

    revalidatePath(
      `/admin/courses/${section.courseId}/sections/${data.sectionId}/lessons`
    );
    revalidatePath(`/courses/${section.courseId}`);

    return { success: true, lessonId: lesson.id };
  } catch (error) {
    console.error("[CREATE_LESSON]", error);
    throw new Error("Failed to create lesson");
  }
}

export async function updateLesson({
  id,
  ...data
}: LessonData & { id: string }) {
  try {
    const user = await getCurrentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Unauthorized");
    }

    // Get the lesson to find the sectionId and courseId
    const lesson = await prisma.lesson.findUnique({
      where: { id },
      select: {
        sectionId: true,
        section: {
          select: {
            courseId: true,
          },
        },
      },
    });

    if (!lesson) {
      throw new Error("Lesson not found");
    }

    // Update the lesson
    await prisma.lesson.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description || null,
        youtubeVideoId: data.youtubeVideoId,
        status: data.status,
        order: data.order,
      },
    });

    revalidatePath(
      `/admin/courses/${lesson.section.courseId}/sections/${lesson.sectionId}/lessons`
    );
    revalidatePath(`/courses/${lesson.section.courseId}`);

    return { success: true };
  } catch (error) {
    console.error("[UPDATE_LESSON]", error);
    throw new Error("Failed to update lesson");
  }
}

export async function deleteLesson(id: string) {
  try {
    const user = await getCurrentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Unauthorized");
    }

    // Get the lesson to find the sectionId and courseId
    const lesson = await prisma.lesson.findUnique({
      where: { id },
      select: {
        sectionId: true,
        section: {
          select: {
            courseId: true,
          },
        },
      },
    });

    if (!lesson) {
      throw new Error("Lesson not found");
    }

    // Delete the lesson
    await prisma.lesson.delete({
      where: { id },
    });

    revalidatePath(
      `/admin/courses/${lesson.section.courseId}/sections/${lesson.sectionId}/lessons`
    );
    revalidatePath(`/courses/${lesson.section.courseId}`);

    return { success: true };
  } catch (error) {
    console.error("[DELETE_LESSON]", error);
    throw new Error("Failed to delete lesson");
  }
}

export async function reorderLesson(id: string, direction: "up" | "down") {
  try {
    const user = await getCurrentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Unauthorized");
    }

    // Get the current lesson
    const currentLesson = await prisma.lesson.findUnique({
      where: { id },
      select: {
        sectionId: true,
        order: true,
        section: {
          select: {
            courseId: true,
          },
        },
      },
    });

    if (!currentLesson) {
      throw new Error("Lesson not found");
    }

    // Find the adjacent lesson
    const adjacentLesson = await prisma.lesson.findFirst({
      where: {
        sectionId: currentLesson.sectionId,
        order:
          direction === "up"
            ? currentLesson.order - 1
            : currentLesson.order + 1,
      },
      select: { id: true, order: true },
    });

    if (!adjacentLesson) {
      throw new Error("Cannot reorder lesson");
    }

    // Swap the order of the two lessons
    await prisma.$transaction([
      prisma.lesson.update({
        where: { id },
        data: { order: adjacentLesson.order },
      }),
      prisma.lesson.update({
        where: { id: adjacentLesson.id },
        data: { order: currentLesson.order },
      }),
    ]);

    revalidatePath(
      `/admin/courses/${currentLesson.section.courseId}/sections/${currentLesson.sectionId}/lessons`
    );
    revalidatePath(`/courses/${currentLesson.section.courseId}`);

    return { success: true };
  } catch (error) {
    console.error("[REORDER_LESSON]", error);
    throw new Error("Failed to reorder lesson");
  }
}

export async function markLessonComplete(lessonId: string) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("Unauthorized");
    }

    // Check if user has student role
    if (!isStudent(user)) {
      throw new Error("Only students can mark lessons as complete");
    }

    const userId = user.id;

    // Check if already completed
    const existingRecord = await prisma.completedLesson.findUnique({
      where: {
        userId_lessonId: {
          userId,
          lessonId,
        },
      },
    });

    if (!existingRecord) {
      // Create completed lesson record
      await prisma.completedLesson.create({
        data: {
          userId,
          lessonId,
        },
      });
    }

    // Get the course ID for the lesson to revalidate the correct paths
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: { section: true },
    });

    if (lesson) {
      revalidatePath(`/courses/${lesson.section.courseId}`);
      revalidatePath(`/courses/${lesson.section.courseId}/lessons/${lessonId}`);
      revalidatePath("/dashboard");
    }

    return { success: true };
  } catch (error) {
    console.error("[MARK_LESSON_COMPLETE]", error);
    throw new Error("Failed to mark lesson as complete");
  }
}
