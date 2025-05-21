"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { enrollUserInCourse } from "@/actions/enrollment-actions";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface EnrollButtonProps {
  courseId: string;
}

export function EnrollButton({ courseId }: EnrollButtonProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleEnroll = async () => {
    try {
      setIsLoading(true);
      await enrollUserInCourse(courseId);

      toast("Enrolled successfully", {
        description: "You have been enrolled in this course.",
      });

      router.refresh();
      router.push(`/courses/${courseId}`);
    } catch (error) {
      console.error(error);
      toast("Enrollment failed", {
        description:
          error instanceof Error ? error.message : "Failed to enroll in course",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handleEnroll} disabled={isLoading} className="w-full">
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enrolling...
        </>
      ) : (
        "Enroll in Course"
      )}
    </Button>
  );
}
