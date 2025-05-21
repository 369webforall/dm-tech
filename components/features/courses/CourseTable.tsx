"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { format } from "date-fns";

export type Course = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

interface CourseTableProps {
  courses: Course[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function CourseTable({ courses, onEdit, onDelete }: CourseTableProps) {
  return (
    <Table>
      <TableCaption>A list of all courses in the system.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Updated</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell className="font-medium">{course.name}</TableCell>
            <TableCell>{course.description}</TableCell>
            <TableCell>
              {format(new Date(course.createdAt), "dd MMM yyyy")}
            </TableCell>
            <TableCell>
              {format(new Date(course.updatedAt), "dd MMM yyyy")}
            </TableCell>
            <TableCell className="text-right space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onEdit(course.id)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => onDelete(course.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {courses.length === 0 && (
        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={5}
              className="text-center text-muted-foreground"
            >
              No courses available.
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}
