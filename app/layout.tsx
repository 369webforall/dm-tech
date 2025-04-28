import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar";
import Footer from "@/components/general/footer";
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-4 md:max-w-7xl mx-auto py-2`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
