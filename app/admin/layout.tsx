import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import { ReactNode } from "react";

export default function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function Navbar() {
  return (
    <header className="flex h-12 shadow bg-background z-10">
      <nav className="flex gap-4 container">
        <div className="mr-auto flex items-center gap-2">
          <Link className="text-lg hover:underline" href="/admin">
            DM ACADEMY
          </Link>
          <Badge>Admin</Badge>
        </div>
        <Link
          className="hover:bg-accent/10 flex items-center px-2"
          href="/admin"
        >
          Admin
        </Link>
        <Link
          className="hover:bg-accent/10 flex items-center px-2"
          href="/admin/courses"
        >
          Courses
        </Link>
      </nav>
    </header>
  );
}
