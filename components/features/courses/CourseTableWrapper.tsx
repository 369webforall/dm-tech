// components/features/courses/CourseTableWrapper.tsx
"use client";

import { useRouter } from "next/navigation";
import { CourseTable, Course } from "./CourseTable";
import { deleteCourse } from "./actions/courses";

interface Props {
  courses: Course[];
}

export function CourseTableWrapper({ courses }: Props) {
  const router = useRouter();

  const handleEdit = (id: string) => {
    router.push(`/admin/courses/${id}/edit`);
  };

  const handleDelete = async (id: string) => {
    await deleteCourse(id);
    router.refresh();
  };

  return (
    <CourseTable
      courses={courses}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
