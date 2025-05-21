import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus } from "lucide-react";
import { getCurrentUser, isAdmin } from "@/lib/auths";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Button } from "@/components/ui/button";
import { CoursesTable } from "@/components/admin/courses/courses-table";

export default async function CoursesPage() {
  const user = await getCurrentUser();

  if (!user || !isAdmin(user)) {
    redirect("/dashboard");
  }

  const courses = await prisma.course.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      courseSections: {
        select: {
          id: true,
        },
      },
      userCourseAccess: {
        select: {
          userId: true,
        },
      },
    },
  });

  // Transform data for the table
  const coursesWithDetails = courses.map((course) => ({
    id: course.id,
    name: course.name,
    description: course.description,
    sections: course.courseSections.length,
    students: course.userCourseAccess.length,
    createdAt: course.createdAt,
  }));

  return (
    <div className="container mx-auto py-10">
      <DashboardHeader
        heading="Courses"
        text="Manage your courses and their content."
      >
        <Button asChild>
          <Link href="/admin/courses/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Course
          </Link>
        </Button>
      </DashboardHeader>

      <div className="mt-8">
        <CoursesTable courses={coursesWithDetails} />
      </div>
    </div>
  );
}
