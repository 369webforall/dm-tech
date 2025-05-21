import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CourseHeaderProps {
  title: string
}

export function CourseHeader({ title }: CourseHeaderProps) {
  return (
    <div className="sticky top-0 z-10 flex h-14 items-center border-b bg-background px-4 lg:px-6">
      <Button variant="ghost" size="icon" asChild className="mr-2">
        <Link href="/dashboard">
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Back to dashboard</span>
        </Link>
      </Button>
      <h1 className="line-clamp-1 text-lg font-semibold">{title}</h1>
    </div>
  )
}
