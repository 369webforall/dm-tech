"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";

export async function updateUserRole(
  userId: string,
  role: "admin" | "user" | "student"
) {
  const currentUser = await getCurrentUser();

  if (!currentUser || !isAdmin(currentUser)) {
    throw new Error("Unauthorized");
  }

  // Don't allow changing your own role
  if (userId === currentUser.id) {
    throw new Error("You cannot change your own role");
  }

  // Update the user's role
  await prisma.user.update({
    where: { id: userId },
    data: { role },
  });

  revalidatePath("/admin/users");

  return { success: true };
}

export async function getUserDetails(userId: string) {
  const currentUser = await getCurrentUser();

  if (!currentUser || !isAdmin(currentUser)) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      UserCourseAccess: {
        include: {
          course: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export async function deleteUser(userId: string) {
  const currentUser = await getCurrentUser();

  if (!currentUser || !isAdmin(currentUser)) {
    throw new Error("Unauthorized");
  }

  // Don't allow deleting yourself
  if (userId === currentUser.id) {
    throw new Error("You cannot delete your own account");
  }

  // Delete user
  await prisma.user.delete({
    where: { id: userId },
  });

  revalidatePath("/admin/users");

  return { success: true };
}
