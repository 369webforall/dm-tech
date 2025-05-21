"use client";

import { memo } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  progress?: number;
  isEnrolled?: boolean;
  canAccess?: boolean;
}

// Use memo to prevent unnecessary re-renders
const CourseCard = memo(function CourseCard({
  id,
  title,
  description,
  progress,
  isEnrolled,
  canAccess,
}: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{title}</h3>
          {isEnrolled && (
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200"
            >
              Enrolled
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
        {typeof progress === "number" && (
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      <CardFooter>
        {canAccess ? (
          <Button asChild className="w-full">
            <Link href={`/courses/${id}`}>
              {progress && progress > 0 ? "Continue Learning" : "Start Course"}
            </Link>
          </Button>
        ) : isEnrolled ? (
          <Button disabled className="w-full">
            Student Access Required
          </Button>
        ) : (
          <Button asChild variant="outline" className="w-full">
            <Link href={`/courses/${id}/details`}>View Details</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
});

export { CourseCard };
