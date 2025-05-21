import { redirect } from "next/navigation";
import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { UsersTable } from "@/components/admin/users/users-table";

export default async function UsersPage() {
  const user = await getCurrentUser();

  if (!user || !isAdmin(user)) {
    redirect("/dashboard");
  }

  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      UserCourseAccess: {
        select: {
          courseId: true,
        },
      },
    },
  });

  // Transform data for the table
  const usersWithDetails = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    enrolledCourses: user.UserCourseAccess.length,
    createdAt: user.createdAt,
  }));

  return (
    <div className="container mx-auto py-10">
      <DashboardHeader heading="Users" text="Manage user accounts and roles." />

      <div className="mt-8">
        <UsersTable users={usersWithDetails} />
      </div>
    </div>
  );
}
