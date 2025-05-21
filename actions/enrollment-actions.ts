"use server";

import { getCurrentUser, isAdmin, isStudent } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function enrollUserInCourse(courseId: string, userId?: string) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error("Unauthorized");
    }

    // If userId is provided, only admins can enroll other users
    if (userId && userId !== currentUser.id) {
      if (!isAdmin(currentUser)) {
        throw new Error("Only admins can enroll other users");
      }
    } else {
      // Self-enrollment requires student role
      userId = currentUser.id;
      if (!isStudent(currentUser)) {
        throw new Error("Only students can enroll in courses");
      }
    }

    // Check if course exists
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      throw new Error("Course not found");
    }

    // Check if already enrolled
    const existingEnrollment = await prisma.userCourseAccess.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    if (!existingEnrollment) {
      // Create enrollment
      await prisma.userCourseAccess.create({
        data: {
          userId,
          courseId,
        },
      });
    }

    revalidatePath(`/courses`);
    revalidatePath(`/courses/${courseId}`);
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error) {
    console.error("[ENROLL_USER_IN_COURSE]", error);
    throw new Error("Failed to enroll in course");
  }
}

export async function unenrollUserFromCourse(
  courseId: string,
  userId?: string
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error("Unauthorized");
    }

    // If userId is provided, only admins can unenroll other users
    if (userId && userId !== currentUser.id) {
      if (!isAdmin(currentUser)) {
        throw new Error("Only admins can unenroll other users");
      }
    } else {
      // Self-unenrollment
      userId = currentUser.id;
    }

    // Delete enrollment
    await prisma.userCourseAccess.delete({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    revalidatePath(`/courses`);
    revalidatePath(`/courses/${courseId}`);
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error) {
    console.error("[UNENROLL_USER_FROM_COURSE]", error);
    throw new Error("Failed to unenroll from course");
  }
}
