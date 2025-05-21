import { Progress } from "@/components/ui/progress"

interface CourseProgressProps {
  courseId: string
  totalLessons: number
  completedLessons: number
}

export function CourseProgress({ totalLessons, completedLessons }: CourseProgressProps) {
  const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Your progress</span>
        <span className="font-medium">
          {completedLessons}/{totalLessons} lessons
        </span>
      </div>
      <Progress value={progressPercentage} className="h-2" />
      <p className="text-xs text-muted-foreground text-right">{progressPercentage}% complete</p>
    </div>
  )
}
