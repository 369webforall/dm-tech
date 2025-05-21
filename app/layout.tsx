import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar";
import Footer from "@/components/general/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DM-TECH MERN Stack Mastery | Full-Stack Web Development Course",
  description:
    "Master full-stack web development with the DM-TECH MERN Stack Course. Learn MongoDB, Express, React, Node.js, and more — perfect for aspiring devs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-padding-top-20">
      <head>
        <style>{`
          html {
            scrollbar-width: thin;
            scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
          }
          
          body {
            overflow-y: scroll;
          }
          
          @supports (overflow: overlay) {
            body {
              overflow-y: overlay;
            }
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main className="px-4 md:max-w-7xl mx-auto py-2">{children}</main>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
