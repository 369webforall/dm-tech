"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { createLesson, updateLesson } from "@/actions/lesson-actions";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  youtubeVideoId: z.string().min(1, "YouTube Video ID is required"),
  status: z.enum(["public", "private", "preview"]),
  order: z.coerce.number().int().positive("Order must be a positive integer"),
});

interface LessonFormProps {
  courseId: string;
  sectionId: string;
  lesson?: {
    id: string;
    name: string;
    description: string | null;
    youtubeVideoId: string;
    status: "public" | "private" | "preview";
    order: number;
  };
  defaultOrder?: number;
}

export function LessonForm({
  courseId,
  sectionId,
  lesson,
  defaultOrder = 1,
}: LessonFormProps) {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: lesson
      ? {
          ...lesson,
          description: lesson.description || "",
        }
      : {
          name: "",
          description: "",
          youtubeVideoId: "",
          status: "private",
          order: defaultOrder,
        },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);

      if (lesson) {
        // Update existing lesson
        await updateLesson({
          id: lesson.id,
          ...values,
        });
        toast("Lesson updated", {
          description: "The lesson has been updated successfully.",
        });
      } else {
        // Create new lesson
        await createLesson({
          sectionId,
          ...values,
        });
        toast("Lesson created", {
          description: "The lesson has been created successfully.",
        });
      }

      router.push(`/admin/courses/${courseId}/sections/${sectionId}/lessons`);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast(`Error ${error}`, {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{lesson ? "Edit Lesson" : "New Lesson"}</CardTitle>
        <CardDescription>
          {lesson
            ? "Update the lesson details."
            : "Fill in the details to create a new lesson."}
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Lesson name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Lesson description (optional)"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="youtubeVideoId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>YouTube Video ID</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. dQw4w9WgXcQ" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the YouTube video ID, not the full URL. For example,
                    for https://www.youtube.com/watch?v=dQw4w9WgXcQ, enter
                    dQw4w9WgXcQ.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="preview">Preview</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Public lessons are visible to enrolled students. Private
                    lessons are hidden. Preview lessons are visible to everyone.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="order"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Order</FormLabel>
                  <FormControl>
                    <Input type="number" min="1" step="1" {...field} />
                  </FormControl>
                  <FormDescription>
                    The order in which this lesson appears in the section.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                router.push(
                  `/admin/courses/${courseId}/sections/${sectionId}/lessons`
                )
              }
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {lesson ? "Update Lesson" : "Create Lesson"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
