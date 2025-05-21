import { Skeleton } from "@/components/ui/skeleton";
import { CourseHeader } from "@/components/courses/course-header";

export default function LessonLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <CourseHeader title="Loading course..." />
      <div className="flex flex-1">
        {/* Sidebar skeleton */}
        <div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
          <div className="p-4">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <div className="space-y-2">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-10 w-full" />
                    <div className="pl-4 space-y-2">
                      {Array(3)
                        .fill(0)
                        .map((_, j) => (
                          <Skeleton key={j} className="h-8 w-full" />
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Main content skeleton */}
        <div className="flex-1 p-6">
          <Skeleton className="h-10 w-3/4 mb-6" />

          {/* Video player skeleton */}
          <div className="relative aspect-video w-full bg-muted rounded-lg mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
          </div>

          {/* Description skeleton */}
          <div className="mt-6">
            <Skeleton className="h-6 w-40 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          {/* Actions skeleton */}
          <div className="mt-8 pt-6 border-t flex justify-between">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
