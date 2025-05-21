"use server";

import prisma from "@/lib/prisma";
import { nanoid } from "nanoid";
import { getSessionFromRequest } from "@/components/auth/session";

export async function generateReferralCode(userId: string) {
  try {
    const session = await getSessionFromRequest();

    if (!session?.user || session.user.id !== userId) {
      throw new Error("Unauthorized");
    }

    // Generate a unique referral code
    const code = nanoid(8);

    // Update user with new referral code
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        referralCode: code,
      },
    });

    return { code };
  } catch (error) {
    console.error("[GENERATE_REFERRAL_CODE]", error);
    throw new Error("Failed to generate referral code");
  }
}
