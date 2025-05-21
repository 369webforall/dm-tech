import { getSessionFromRequest } from "@/components/auth/session";
import prisma from "@/lib/prisma";

export async function getAuthSession() {
  const session = await getSessionFromRequest();
  return session;
}

export async function getCurrentUser() {
  const session = await getAuthSession();

  if (!session?.userId) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
  });

  return user;
}

export function isStudent(user: { role: string } | null) {
  return user?.role === "student";
}

export function isAdmin(user: { role: string } | null) {
  return user?.role === "admin";
}
