"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function User() {
  const { data: session, isPending, error, refetch } = authClient.useSession();

  if (isPending) {
    return <Skeleton className="h-10 w-24 rounded-md" />;
  }

  if (error) {
    return (
      <Link href="/signin" className={buttonVariants({ variant: "secondary" })}>
        Sign In
      </Link>
    );
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-4">
        <button
          onClick={async () => {
            await authClient.signOut();
            refetch(); // refresh session state after logout
          }}
          className={`${buttonVariants({
            variant: "destructive",
          })} cursor-pointer`}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/signin"
      className={`${buttonVariants({ variant: "secondary" })} cursor-pointer`}
    >
      Sign In
    </Link>
  );
}
