"use server";

import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface SectionData {
  name: string;
  status: "public" | "private";
  order: number;
}

export async function createSection(data: SectionData & { courseId: string }) {
  try {
    const user = await getCurrentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Unauthorized");
    }

    // Create the section
    const section = await prisma.courseSection.create({
      data: {
        name: data.name,
        status: data.status,
        order: data.order,
        courseId: data.courseId,
      },
    });

    revalidatePath(`/admin/courses/${data.courseId}/sections`);
    revalidatePath(`/courses/${data.courseId}`);

    return { success: true, sectionId: section.id };
  } catch (error) {
    console.error("[CREATE_SECTION]", error);
    throw new Error("Failed to create section");
  }
}

export async function updateSection({
  id,
  ...data
}: SectionData & { id: string }) {
  try {
    const user = await getCurrentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Unauthorized");
    }

    // Get the section to find the courseId
    const section = await prisma.courseSection.findUnique({
      where: { id },
      select: { courseId: true },
    });

    if (!section) {
      throw new Error("Section not found");
    }

    // Update the section
    await prisma.courseSection.update({
      where: { id },
      data: {
        name: data.name,
        status: data.status,
        order: data.order,
      },
    });

    revalidatePath(`/admin/courses/${section.courseId}/sections`);
    revalidatePath(`/courses/${section.courseId}`);

    return { success: true };
  } catch (error) {
    console.error("[UPDATE_SECTION]", error);
    throw new Error("Failed to update section");
  }
}

export async function deleteSection(id: string) {
  try {
    const user = await getCurrentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Unauthorized");
    }

    // Get the section to find the courseId
    const section = await prisma.courseSection.findUnique({
      where: { id },
      select: { courseId: true },
    });

    if (!section) {
      throw new Error("Section not found");
    }

    // Delete the section (this will cascade delete lessons)
    await prisma.courseSection.delete({
      where: { id },
    });

    revalidatePath(`/admin/courses/${section.courseId}/sections`);
    revalidatePath(`/courses/${section.courseId}`);

    return { success: true };
  } catch (error) {
    console.error("[DELETE_SECTION]", error);
    throw new Error("Failed to delete section");
  }
}

export async function reorderSection(id: string, direction: "up" | "down") {
  try {
    const user = await getCurrentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Unauthorized");
    }

    // Get the current section
    const currentSection = await prisma.courseSection.findUnique({
      where: { id },
      select: { courseId: true, order: true },
    });

    if (!currentSection) {
      throw new Error("Section not found");
    }

    // Find the adjacent section
    const adjacentSection = await prisma.courseSection.findFirst({
      where: {
        courseId: currentSection.courseId,
        order:
          direction === "up"
            ? currentSection.order - 1
            : currentSection.order + 1,
      },
      select: { id: true, order: true },
    });

    if (!adjacentSection) {
      throw new Error("Cannot reorder section");
    }

    // Swap the order of the two sections
    await prisma.$transaction([
      prisma.courseSection.update({
        where: { id },
        data: { order: adjacentSection.order },
      }),
      prisma.courseSection.update({
        where: { id: adjacentSection.id },
        data: { order: currentSection.order },
      }),
    ]);

    revalidatePath(`/admin/courses/${currentSection.courseId}/sections`);
    revalidatePath(`/courses/${currentSection.courseId}`);

    return { success: true };
  } catch (error) {
    console.error("[REORDER_SECTION]", error);
    throw new Error("Failed to reorder section");
  }
}
