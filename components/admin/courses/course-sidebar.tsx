"use client"

import Link from "next/link"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"

interface CourseSidebarProps {
  course: {
    id: string
    name: string
    courseSections: {
      id: string
      name: string
      order: number
      lessons: {
        id: string
        name: string
        order: number
        status: string
      }[]
    }[]
  }
  completedLessonIds: string[]
  currentLessonId?: string
}

export function CourseSidebar({ course, completedLessonIds, currentLessonId }: CourseSidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    // Initialize with all sections open, or just the one with the current lesson
    const initialState: Record<string, boolean> = {}

    if (currentLessonId) {
      // Find which section contains the current lesson
      const currentSection = course.courseSections.find((section) =>
        section.lessons.some((lesson) => lesson.id === currentLessonId),
      )

      // Set only that section as open
      if (currentSection) {
        course.courseSections.forEach((section) => {
          initialState[section.id] = section.id === currentSection.id
        })
        return initialState
      }
    }

    // If no current lesson or section not found, open all sections
    course.courseSections.forEach((section) => {
      initialState[section.id] = true
    })

    return initialState
  })

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
      <ScrollArea className="h-full py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Course Content</h2>
          <div className="space-y-1">
            {course.courseSections.map((section) => (
              <Collapsible
                key={section.id}
                open={openSections[section.id]}
                onOpenChange={() => toggleSection(section.id)}
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between font-medium">
                    <span className="truncate">{section.name}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        openSections[section.id] ? "rotate-180" : "",
                      )}
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-2">
                  {section.lessons.map((lesson) => {
                    const isCompleted = completedLessonIds.includes(lesson.id)
                    const isCurrent = currentLessonId === lesson.id

                    return (
                      <Button
                        key={lesson.id}
                        variant="ghost"
                        size="sm"
                        asChild
                        className={cn(
                          "mb-1 w-full justify-start",
                          isCurrent && "bg-accent text-accent-foreground",
                          isCompleted && "text-muted-foreground",
                        )}
                      >
                        <Link href={`/courses/${course.id}/lessons/${lesson.id}`}>
                          <div className="flex w-full items-center">
                            <div className="mr-2 flex h-4 w-4 items-center justify-center">
                              {isCompleted ? (
                                <Check className="h-3 w-3 text-primary" />
                              ) : (
                                <div
                                  className={cn(
                                    "h-2 w-2 rounded-full",
                                    isCurrent ? "bg-primary" : "bg-muted-foreground",
                                  )}
                                />
                              )}
                            </div>
                            <span className="truncate">{lesson.name}</span>
                          </div>
                        </Link>
                      </Button>
                    )
                  })}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
