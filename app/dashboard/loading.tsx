import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default function DashboardLoading() {
  return (
    <div className="container mx-auto py-10">
      <DashboardHeader
        heading="My Courses"
        text="Loading your enrolled courses..."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex flex-col h-full rounded-lg border overflow-hidden"
            >
              <div className="p-6">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-10" />
                  </div>
                  <Skeleton className="h-2 w-full" />
                </div>
              </div>
              <div className="p-6 mt-auto">
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
