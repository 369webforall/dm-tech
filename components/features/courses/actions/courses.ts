"use server";

import { z } from "zod";

import { courseSchema } from "../schemas/courses";
import prisma from "@/lib/prisma";

export async function createCourse(unsafeData: z.infer<typeof courseSchema>) {
  try {
    const parsed = courseSchema.safeParse(unsafeData);
    if (!parsed.success) {
      return { error: true, message: "Invalid course data." };
    }

    const course = await prisma.course.create({
      data: parsed.data,
    });

    return { success: true, courseId: course.id };
  } catch (err) {
    console.error("Error creating course:", err);
    return { error: true, message: "Failed to create course in database." };
  }
}
export async function updateCourse(
  id: string,
  unsafeData: z.infer<typeof courseSchema>
) {
  const result = courseSchema.safeParse(unsafeData);

  if (!result.success) {
    return { error: true, message: "Invalid input data" };
  }

  const data = result.data;

  try {
    await prisma.course.update({
      where: { id },
      data,
    });

    return { success: true };
  } catch (err) {
    console.error("Update course failed:", err);
    return { error: true, message: "Failed to update course" };
  }
}

export async function deleteCourse(id: string) {
  try {
    await prisma.course.delete({
      where: { id },
    });

    return { success: true };
  } catch (err) {
    console.error("Delete course failed:", err);
    return { error: true, message: "Failed to delete course" };
  }
}
