import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { customSession } from "better-auth/plugins";
import { user_role } from "./generated/prisma";
import prisma from "./prisma";
// Define a type for the partial user returned by findUserWithRole
type UserWithRole = {
  id: string;
  role: user_role;
} | null;

export const auth = betterAuth({
  appName: "DM-ACADEMY",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  plugins: [
    customSession(async ({ user, session }) => {
      try {
        const userData = await findUserWithRole(session.userId);

        return {
          ...session,
          user: {
            ...user,
            // Use optional chaining to safely access the role
            role: userData?.role ?? "user",
          },
          session,
        };
      } catch (error) {
        console.error("Error fetching user role:", error);
        // Return the original user and session if there's an error
        return { user, ...session };
      }
    }),
  ],
});

async function findUserWithRole(userId: string): Promise<UserWithRole> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, role: true }, // Only select the fields you need
    });

    return user;
  } catch (error) {
    console.error("Error in findUserWithRole:", error);
    return null;
  }
}
