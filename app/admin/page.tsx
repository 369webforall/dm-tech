import { redirect } from "next/navigation";
import Link from "next/link";
import { BookOpen, Users, Layers, BarChart } from "lucide-react";
import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function AdminDashboardPage() {
  const user = await getCurrentUser();

  if (!user || !isAdmin(user)) {
    redirect("/dashboard");
  }

  // Get counts for dashboard
  const coursesCount = await prisma.course.count();
  const usersCount = await prisma.user.count();
  const sectionsCount = await prisma.courseSection.count();
  const lessonsCount = await prisma.lesson.count();
  const enrollmentsCount = await prisma.userCourseAccess.count();

  // Get recent enrollments
  const recentEnrollments = await prisma.userCourseAccess.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      course: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <div className="container mx-auto py-10">
      <DashboardHeader
        heading="Admin Dashboard"
        text="Manage your LMS platform."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{coursesCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <Link href="/admin/courses" className="hover:underline">
                Manage courses
              </Link>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{usersCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <Link href="/admin/users" className="hover:underline">
                Manage users
              </Link>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {sectionsCount} / {lessonsCount}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Sections / Lessons
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrollments</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{enrollmentsCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Total course enrollments
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Enrollments</CardTitle>
            <CardDescription>
              The latest users enrolled in courses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentEnrollments.length === 0 ? (
              <p className="text-muted-foreground text-sm">
                No recent enrollments.
              </p>
            ) : (
              <div className="space-y-4">
                {recentEnrollments.map((enrollment) => (
                  <div
                    key={`${enrollment.userId}-${enrollment.courseId}`}
                    className="flex justify-between items-center border-b pb-2 last:border-0"
                  >
                    <div>
                      <p className="font-medium">{enrollment.user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {enrollment.user.email}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{enrollment.course.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(enrollment.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
