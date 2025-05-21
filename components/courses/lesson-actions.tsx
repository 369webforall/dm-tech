"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface LessonActionsProps {
  courseId: string;
  lessonId: string;
  nextLessonId?: string | null;
  isCompleted: boolean;
  markComplete: (lessonId: string) => Promise<{ success: boolean }>;
}

export function LessonActions({
  courseId,
  lessonId,
  nextLessonId,
  isCompleted,
  markComplete,
}: LessonActionsProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleMarkComplete = async () => {
    try {
      setIsLoading(true);
      await markComplete(lessonId);

      toast("Lesson completed", {
        description: "Your progress has been saved.",
      });

      router.refresh();

      // If there's a next lesson, navigate to it
      if (nextLessonId) {
        router.push(`/courses/${courseId}/lessons/${nextLessonId}`);
      }
    } catch (error) {
      toast(`Error ${error}`, {
        description: "Failed to mark lesson as complete.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 flex items-center justify-between border-t pt-6">
      <div>
        {isCompleted && (
          <div className="flex items-center text-primary">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span>Completed</span>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        {!isCompleted && (
          <Button onClick={handleMarkComplete} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Mark as Complete"
            )}
          </Button>
        )}
        {nextLessonId && (
          <Button
            variant={isCompleted ? "default" : "outline"}
            onClick={() =>
              router.push(`/courses/${courseId}/lessons/${nextLessonId}`)
            }
          >
            Next Lesson
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
