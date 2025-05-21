"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, X } from "lucide-react";
import {
  enrollUserInCourse,
  unenrollUserFromCourse,
} from "@/actions/enrollment-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

interface UserCourseManagementProps {
  userId: string;
  courses: {
    id: string;
    name: string;
    description: string;
  }[];
  enrolledCourseIds: string[];
}

export function UserCourseManagement({
  userId,
  courses,
  enrolledCourseIds,
}: UserCourseManagementProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

  const handleEnrollment = async (courseId: string, isEnrolled: boolean) => {
    try {
      setIsLoading((prev) => ({ ...prev, [courseId]: true }));

      if (isEnrolled) {
        await unenrollUserFromCourse(courseId, userId);
        toast("User unenrolled", {
          description: "The user has been unenrolled from this course.",
        });
      } else {
        await enrollUserInCourse(courseId, userId);
        toast("User enrolled", {
          description: "The user has been enrolled in this course.",
        });
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      toast("Action failed", {
        description:
          error instanceof Error
            ? error.message
            : "Failed to update enrollment",
      });
    } finally {
      setIsLoading((prev) => ({ ...prev, [courseId]: false }));
    }
  };

  return (
    <div className="space-y-4">
      {courses.map((course) => {
        const isEnrolled = enrolledCourseIds.includes(course.id);

        return (
          <Card
            key={course.id}
            className={isEnrolled ? "border-green-200 bg-green-50" : ""}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </div>
                {isEnrolled && (
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <Check className="h-4 w-4 mr-1" />
                    Enrolled
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <Button
                variant={isEnrolled ? "destructive" : "default"}
                size="sm"
                onClick={() => handleEnrollment(course.id, isEnrolled)}
                disabled={isLoading[course.id]}
              >
                {isLoading[course.id] ? (
                  "Processing..."
                ) : isEnrolled ? (
                  <>
                    <X className="h-4 w-4 mr-1" />
                    Unenroll
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    Enroll
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        );
      })}

      {courses.length === 0 && (
        <Card>
          <CardContent className="py-6 text-center text-muted-foreground">
            No courses available.
          </CardContent>
        </Card>
      )}
    </div>
  );
}
