"use server";

import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface CourseData {
  name: string;
  description: string;
  notionDoc?: string;
}

export async function createCourse(data: CourseData) {
  try {
    const user = await getCurrentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Unauthorized");
    }

    // Create the course
    const course = await prisma.course.create({
      data: {
        name: data.name,
        description: data.description,
        notionDoc: data.notionDoc,
      },
    });

    revalidatePath("/admin/courses");

    return { success: true, courseId: course.id };
  } catch (error) {
    console.error("[CREATE_COURSE]", error);
    throw new Error("Failed to create course");
  }
}

export async function updateCourse({
  id,
  ...data
}: CourseData & { id: string }) {
  try {
    const user = await getCurrentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Unauthorized");
    }

    // Update the course
    await prisma.course.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        notionDoc: data.notionDoc,
      },
    });

    revalidatePath("/admin/courses");
    revalidatePath(`/admin/courses/${id}`);
    revalidatePath(`/courses/${id}`);

    return { success: true };
  } catch (error) {
    console.error("[UPDATE_COURSE]", error);
    throw new Error("Failed to update course");
  }
}

export async function deleteCourse(id: string) {
  try {
    const user = await getCurrentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Unauthorized");
    }

    // Check if there are any users with access to this course
    const userAccess = await prisma.userCourseAccess.findMany({
      where: { courseId: id },
    });

    if (userAccess.length > 0) {
      throw new Error("Cannot delete a course with enrolled students");
    }

    // Delete the course (this will cascade delete sections and lessons)
    await prisma.course.delete({
      where: { id },
    });

    revalidatePath("/admin/courses");

    return { success: true };
  } catch (error) {
    console.error("[DELETE_COURSE]", error);
    throw new Error("Failed to delete course");
  }
}
