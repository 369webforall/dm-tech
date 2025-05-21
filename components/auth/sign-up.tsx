"use client";
import CardWrapper from "../general/card-wrapper";
import FormError from "../general/form-error";

import { useAuthState } from "@/hooks/useAuthState";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SignupSchema } from "@/lib/helpers/zod/signup-schema";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("ref");
  const { error, loading, setLoading, setError, resetState } = useAuthState();

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      referralCode: referralCode || "",
    },
  });

  // const onSubmit = async (values: z.infer<typeof SignupSchema>) => {
  //   try {
  //     await signUp.email(
  //       {
  //         name: values.name,
  //         email: values.email,
  //         password: values.password,
  //         referralCode: values.referralCode,
  //       },
  //       {
  //         onResponse: () => {
  //           setLoading(false);
  //         },
  //         onRequest: () => {
  //           resetState();
  //           setLoading(true);
  //         },
  //         onSuccess: () => {
  //           toast("Account created", {
  //             description: "Check your email for verification link.",
  //           });
  //           router.replace("/");
  //         },
  //         onError: (ctx) => {
  //           setError(ctx.error.message);
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.error(error);
  //     toast("Something went wrong");
  //   }
  // };
  const onSubmit = async (values: z.infer<typeof SignupSchema>) => {
    try {
      // First sign up the user
      await signUp.email(
        {
          name: values.name,
          email: values.email,
          password: values.password,
        },
        {
          onResponse: () => {
            setLoading(false);
          },
          onRequest: () => {
            resetState();
            setLoading(true);
          },
          onSuccess: async () => {
            // Then handle the referral code if it exists
            if (values.referralCode) {
              try {
                await fetch("/api/referrals", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: values.email,
                    referralCode: values.referralCode,
                  }),
                });
              } catch (error) {
                console.error("Failed to process referral code:", error);
              }
            }

            toast("Account created", {
              description: "Check your email for verification link.",
            });
            router.replace("/");
          },
          onError: (ctx) => {
            setError(ctx.error.message);
          },
        }
      );
    } catch (error) {
      console.error(error);
      toast("Something went wrong");
    }
  };
  return (
    <CardWrapper
      cardTitle="SignUp"
      cardDescription="Create an new account"
      cardFooterLink="/signin"
      cardFooterDescription="Already have an account?"
      cardFooterLinkTitle="Login"
    >
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    type="text"
                    placeholder="john"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    type="email"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    type="password"
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="referralCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Referral Code (Optional)</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    type="text"
                    placeholder="Enter referral code"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  If you have a referral code, enter it here
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />

          <Button disabled={loading} type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SignUp;
