"use server";

import { getSessionFromRequest } from "@/components/auth/session";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
interface ProductData {
  name: string;
  description: string;
  imageUrl: string;
  priceInDollars: number;
  status: "public" | "private";
  courseIds: string[];
}

export async function createProduct(data: ProductData) {
  try {
    const session = await getSessionFromRequest();

    if (
      !session?.user ||
      !("role" in session.user) ||
      session.user.role !== "admin"
    ) {
      redirect("/dashboard");
    }

    // Create the product
    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        priceInDollars: data.priceInDollars,
        status: data.status,
      },
    });

    // Create course associations
    if (data.courseIds.length > 0) {
      const courseProducts = data.courseIds.map((courseId) => ({
        courseId,
        productId: product.id,
      }));

      await prisma.courseProduct.createMany({
        data: courseProducts,
      });
    }

    revalidatePath("/admin/products");
    revalidatePath("/courses");

    return { success: true, productId: product.id };
  } catch (error) {
    console.error("[CREATE_PRODUCT]", error);
    throw new Error("Failed to create product");
  }
}

export async function updateProduct({
  id,
  ...data
}: ProductData & { id: string }) {
  try {
    const session = await getSessionFromRequest();

    if (
      !session?.user ||
      !("role" in session.user) ||
      session.user.role !== "admin"
    ) {
      throw new Error("Unauthorized");
    }

    // Update the product
    await prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        priceInDollars: data.priceInDollars,
        status: data.status,
      },
    });

    // Delete existing course associations
    await prisma.courseProduct.deleteMany({
      where: { productId: id },
    });

    // Create new course associations
    if (data.courseIds.length > 0) {
      const courseProducts = data.courseIds.map((courseId) => ({
        courseId,
        productId: id,
      }));

      await prisma.courseProduct.createMany({
        data: courseProducts,
      });
    }

    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${id}`);
    revalidatePath("/courses");

    return { success: true };
  } catch (error) {
    console.error("[UPDATE_PRODUCT]", error);
    throw new Error("Failed to update product");
  }
}

export async function deleteProduct(id: string) {
  try {
    const session = await getSessionFromRequest();

    if (
      !session?.user ||
      !("role" in session.user) ||
      session.user.role !== "admin"
    ) {
      throw new Error("Unauthorized");
    }

    // Check if there are any purchases for this product
    const purchases = await prisma.purchase.findMany({
      where: { productId: id },
    });

    if (purchases.length > 0) {
      throw new Error("Cannot delete a product with existing purchases");
    }

    // Delete course associations
    await prisma.courseProduct.deleteMany({
      where: { productId: id },
    });

    // Delete the product
    await prisma.product.delete({
      where: { id },
    });

    revalidatePath("/admin/products");
    revalidatePath("/courses");

    return { success: true };
  } catch (error) {
    console.error("[DELETE_PRODUCT]", error);
    throw new Error("Failed to delete product");
  }
}
