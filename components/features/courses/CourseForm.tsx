"use client";

import React from "react";
import { toast } from "sonner"; // ✅ Import toast
import { courseSchema } from "./schemas/courses";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RequiredLabelIcon } from "@/components/admin/RequiredLabelIcon";
import { Textarea } from "@/components/ui/textarea";
import { createCourse } from "./actions/courses";
import { useRouter } from "next/navigation";
import { Course } from "@/lib/generated/prisma";
import { updateCourse } from "./actions/courses";
const CourseForm = ({ course }: { course?: Course | null }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      name: course?.name || "",
      description: course?.description || "",
    },
  });

  async function onSubmit(values: z.infer<typeof courseSchema>) {
    let result;

    if (course?.id) {
      result = await updateCourse(course.id, values);
    } else {
      result = await createCourse(values);
    }

    if (result?.success) {
      toast.success(
        `Course ${course?.id ? "updated" : "created"} successfully`
      );
      router.push(`/admin/courses`);
    } else {
      toast.error(result?.message || "Failed to save course");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-6 flex-col"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <RequiredLabelIcon />
                Course Name
              </FormLabel>
              <FormControl>
                <Input placeholder="course name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <RequiredLabelIcon />
                Course Description
              </FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-20 resize-none"
                  placeholder="course description"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display description.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="self-end">
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="cursor-pointer"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CourseForm;
