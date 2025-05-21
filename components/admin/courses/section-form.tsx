"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { createSection, updateSection } from "@/actions/section-actions";
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
  status: z.enum(["public", "private"]),
  order: z.coerce.number().int().positive("Order must be a positive integer"),
});

interface SectionFormProps {
  courseId: string;
  section?: {
    id: string;
    name: string;
    status: "public" | "private";
    order: number;
  };
  defaultOrder?: number;
}

export function SectionForm({
  courseId,
  section,
  defaultOrder = 1,
}: SectionFormProps) {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: section
      ? {
          ...section,
        }
      : {
          name: "",
          status: "private",
          order: defaultOrder,
        },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);

      if (section) {
        // Update existing section
        await updateSection({
          id: section.id,
          ...values,
        });
        toast("Section updated", {
          description: "The section has been updated successfully.",
        });
      } else {
        // Create new section
        await createSection({
          courseId,
          ...values,
        });
        toast("Section created", {
          description: "The section has been created successfully.",
        });
      }

      router.push(`/admin/courses/${courseId}/sections`);
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
        <CardTitle>{section ? "Edit Section" : "New Section"}</CardTitle>
        <CardDescription>
          {section
            ? "Update the section details."
            : "Fill in the details to create a new section."}
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
                    <Input placeholder="Section name" {...field} />
                  </FormControl>
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
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Public sections are visible to enrolled students. Private
                    sections are hidden.
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
                    The order in which this section appears in the course.
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
              onClick={() => router.push(`/admin/courses/${courseId}/sections`)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {section ? "Update Section" : "Create Section"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
