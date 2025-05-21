"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Edit, MoreHorizontal, Trash, ArrowUp, ArrowDown } from "lucide-react";
import { deleteSection, reorderSection } from "@/actions/section-actions";
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

interface SectionsTableProps {
  courseId: string;
  sections: {
    id: string;
    name: string;
    status: "public" | "private";
    order: number;
    lessons: {
      id: string;
    }[];
  }[];
}

export function SectionsTable({ courseId, sections }: SectionsTableProps) {
  const router = useRouter();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [sectionToDelete, setSectionToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReordering, setIsReordering] = useState(false);

  const handleDelete = async () => {
    if (!sectionToDelete) return;

    try {
      setIsDeleting(true);
      await deleteSection(sectionToDelete);
      toast("Section deleted", {
        description: "The section has been deleted successfully.",
      });
      router.refresh();
    } catch (error) {
      toast(`Error ${error}`, {
        description: "Failed to delete the section. Please try again.",
      });
    } finally {
      setIsDeleting(false);
      setIsDeleteDialogOpen(false);
      setSectionToDelete(null);
    }
  };

  const handleReorder = async (sectionId: string, direction: "up" | "down") => {
    try {
      setIsReordering(true);
      await reorderSection(sectionId, direction);
      toast("Section reordered", {
        description: "The section order has been updated.",
      });
      router.refresh();
    } catch (error) {
      toast(`Error ${error}`, {
        description: "Failed to reorder the section. Please try again.",
      });
    } finally {
      setIsReordering(false);
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
              <TableHead>Lessons</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sections.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No sections found. Add your first section.
                </TableCell>
              </TableRow>
            )}
            {sections.map((section, index) => (
              <TableRow key={section.id}>
                <TableCell className="font-medium">{section.order}</TableCell>
                <TableCell>{section.name}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      section.status === "public" ? "default" : "secondary"
                    }
                  >
                    {section.status === "public" ? "Public" : "Private"}
                  </Badge>
                </TableCell>
                <TableCell>{section.lessons.length}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleReorder(section.id, "up")}
                      disabled={index === 0 || isReordering}
                    >
                      <ArrowUp className="h-4 w-4" />
                      <span className="sr-only">Move up</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleReorder(section.id, "down")}
                      disabled={index === sections.length - 1 || isReordering}
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
                            href={`/admin/courses/${courseId}/sections/${section.id}`}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/admin/courses/${courseId}/sections/${section.id}/lessons`}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Manage Lessons
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          onSelect={() => {
                            setSectionToDelete(section.id);
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
              This will permanently delete the section and all its lessons. This
              action cannot be undone.
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
