"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { CourseSidebarProps } from "@/lib/types";

// Memoized lesson item to prevent re-renders
const LessonItem = memo(function LessonItem({
  courseId,
  lesson,
  isCompleted,
  isCurrent,
}: {
  courseId: string;
  lesson: {
    id: string;
    name: string;
  };
  isCompleted: boolean;
  isCurrent: boolean;
}) {
  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      className={cn(
        "mb-1 w-full justify-start",
        isCurrent && "bg-accent text-accent-foreground",
        isCompleted && "text-muted-foreground"
      )}
    >
      <Link href={`/courses/${courseId}/lessons/${lesson.id}`}>
        <div className="flex w-full items-center">
          <div className="mr-2 flex h-4 w-4 items-center justify-center">
            {isCompleted ? (
              <Check className="h-3 w-3 text-primary" />
            ) : (
              <div
                className={cn(
                  "h-2 w-2 rounded-full",
                  isCurrent ? "bg-primary" : "bg-muted-foreground"
                )}
              />
            )}
          </div>
          <span className="truncate">{lesson.name}</span>
        </div>
      </Link>
    </Button>
  );
});

// Memoized section to prevent re-renders
const CourseSection = memo(function CourseSection({
  section,
  courseId,
  completedLessonIds,
  currentLessonId,
  isOpen,
  onToggle,
}: {
  section: CourseSidebarProps["course"]["courseSections"][0];
  courseId: string;
  completedLessonIds: string[];
  currentLessonId?: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle} className="w-full">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between font-medium">
          <span className="truncate">{section.name}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 transition-transform duration-200",
              isOpen ? "rotate-180" : ""
            )}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-2">
        {section.lessons.map((lesson) => {
          const isCompleted = completedLessonIds.includes(lesson.id);
          const isCurrent = currentLessonId === lesson.id;

          return (
            <LessonItem
              key={lesson.id}
              courseId={courseId}
              lesson={lesson}
              isCompleted={isCompleted}
              isCurrent={isCurrent}
            />
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
});

export function CourseSidebar({
  course,
  completedLessonIds,
  currentLessonId,
}: CourseSidebarProps) {
  const router = useRouter();

  // Initialize with the section containing the current lesson open
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => {
      const initialState: Record<string, boolean> = {};

      if (currentLessonId) {
        // Find which section contains the current lesson
        const currentSection = course.courseSections.find((section) =>
          section.lessons.some((lesson) => lesson.id === currentLessonId)
        );

        // Set only that section as open
        if (currentSection) {
          course.courseSections.forEach((section) => {
            initialState[section.id] = section.id === currentSection.id;
          });
          return initialState;
        }
      }

      // If no current lesson or section not found, open all sections
      course.courseSections.forEach((section) => {
        initialState[section.id] = true;
      });

      return initialState;
    }
  );

  const toggleSection = useCallback((sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  }, []);

  // Prefetch adjacent lessons for faster navigation
  useEffect(() => {
    if (!currentLessonId) return;

    // Find current lesson index
    let currentSectionIndex = -1;
    let currentLessonIndex = -1;

    course.courseSections.forEach((section, sIndex) => {
      section.lessons.forEach((lesson, lIndex) => {
        if (lesson.id === currentLessonId) {
          currentSectionIndex = sIndex;
          currentLessonIndex = lIndex;
        }
      });
    });

    if (currentSectionIndex === -1) return;

    // Prefetch next and previous lessons
    const currentSection = course.courseSections[currentSectionIndex];

    // Next lesson in same section
    if (currentLessonIndex < currentSection.lessons.length - 1) {
      const nextLesson = currentSection.lessons[currentLessonIndex + 1];
      router.prefetch(`/courses/${course.id}/lessons/${nextLesson.id}`);
    }
    // First lesson in next section
    else if (currentSectionIndex < course.courseSections.length - 1) {
      const nextSection = course.courseSections[currentSectionIndex + 1];
      if (nextSection.lessons.length > 0) {
        router.prefetch(
          `/courses/${course.id}/lessons/${nextSection.lessons[0].id}`
        );
      }
    }

    // Previous lesson in same section
    if (currentLessonIndex > 0) {
      const prevLesson = currentSection.lessons[currentLessonIndex - 1];
      router.prefetch(`/courses/${course.id}/lessons/${prevLesson.id}`);
    }
    // Last lesson in previous section
    else if (currentSectionIndex > 0) {
      const prevSection = course.courseSections[currentSectionIndex - 1];
      if (prevSection.lessons.length > 0) {
        const lastLesson = prevSection.lessons[prevSection.lessons.length - 1];
        router.prefetch(`/courses/${course.id}/lessons/${lastLesson.id}`);
      }
    }
  }, [currentLessonId, course, router]);

  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
      <ScrollArea className="h-full py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Course Content
          </h2>
          <div className="space-y-1">
            {course.courseSections.map((section) => (
              <CourseSection
                key={section.id}
                section={section}
                courseId={course.id}
                completedLessonIds={completedLessonIds}
                currentLessonId={currentLessonId}
                isOpen={openSections[section.id]}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
