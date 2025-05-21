"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Edit, MoreHorizontal, Trash, ArrowUp, ArrowDown } from "lucide-react";
import { deleteLesson, reorderLesson } from "@/actions/lesson-actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

interface LessonsTableProps {
  courseId: string;
  sectionId: string;
  lessons: {
    id: string;
    name: string;
    status: "public" | "private" | "preview";
    order: number;
    youtubeVideoId: string;
  }[];
}

export function LessonsTable({
  courseId,
  sectionId,
  lessons,
}: LessonsTableProps) {
  const router = useRouter();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [lessonToDelete, setLessonToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReordering, setIsReordering] = useState(false);

  const handleDelete = async () => {
    if (!lessonToDelete) return;

    try {
      setIsDeleting(true);
      await deleteLesson(lessonToDelete);
      toast("Lesson deleted", {
        description: "The lesson has been deleted successfully.",
      });
      router.refresh();
    } catch (error) {
      toast(`Error ${error}`, {
        description: "Failed to delete the lesson. Please try again.",
      });
    } finally {
      setIsDeleting(false);
      setIsDeleteDialogOpen(false);
      setLessonToDelete(null);
    }
  };

  const handleReorder = async (lessonId: string, direction: "up" | "down") => {
    try {
      setIsReordering(true);
      await reorderLesson(lessonId, direction);
      toast("Lesson reordered", {
        description: "The lesson order has been updated.",
      });
      router.refresh();
    } catch (error) {
      toast(`Error ${error}`, {
        description: "Failed to reorder the lesson. Please try again.",
      });
    } finally {
      setIsReordering(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "public":
        return <Badge>Public</Badge>;
      case "private":
        return <Badge variant="secondary">Private</Badge>;
      case "preview":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200"
          >
            Preview
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Video ID</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lessons.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No lessons found. Add your first lesson.
                </TableCell>
              </TableRow>
            )}
            {lessons.map((lesson, index) => (
              <TableRow key={lesson.id}>
                <TableCell className="font-medium">{lesson.order}</TableCell>
                <TableCell>{lesson.name}</TableCell>
                <TableCell>{getStatusBadge(lesson.status)}</TableCell>
                <TableCell>
                  <code className="bg-muted px-1 py-0.5 rounded text-xs">
                    {lesson.youtubeVideoId}
                  </code>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleReorder(lesson.id, "up")}
                      disabled={index === 0 || isReordering}
                    >
                      <ArrowUp className="h-4 w-4" />
                      <span className="sr-only">Move up</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleReorder(lesson.id, "down")}
                      disabled={index === lessons.length - 1 || isReordering}
                    >
                      <ArrowDown className="h-4 w-4" />
                      <span className="sr-only">Move down</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/admin/courses/${courseId}/sections/${sectionId}/lessons/${lesson.id}`}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          onSelect={() => {
                            setLessonToDelete(lesson.id);
                            setIsDeleteDialogOpen(true);
                          }}
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the lesson. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                handleDelete();
              }}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
