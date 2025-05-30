"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQsFour() {
  const faqItems = [
    {
      id: "item-1",
      question: "What is the duration of the course?",
      answer:
        "The course runs for 9 months. The first 4 months are focused on mastering the MERN Stack, followed by 5 months of advanced topics including DSA, DevOps, and real-world projects.",
    },
    {
      id: "item-2",
      question: "Who can join this course?",
      answer:
        "This course is ideal for anyone interested in web development — from Class 6 students to those pursuing degrees like BCA, BIT, or MCA. Whether you're a complete beginner or looking to build a solid foundation, we guide you step-by-step.",
    },
    {
      id: "item-3",
      question: "What topics are covered in this course?",
      answer:
        "You will learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Next.js, TailwindCSS, ShadCN, Zod, Authentication, SQL, ORMs, DevOps fundamentals, DSA, Monorepos, WebSockets, Testing, and advanced backend concepts.",
    },
    {
      id: "item-4",
      question: "What is the class schedule?",
      answer:
        "Live classes are held Monday to Friday, from 7:45 PM to 8:45 PM. That&#39;s 1 hour daily of structured, focused learning.",
    },
    {
      id: "item-5",
      question: "Will there be real-world projects?",
      answer:
        "Absolutely! After the MERN Stack phase, you&#39;ll build multiple full-stack projects, including production-level apps, to showcase your skills in portfolios and job interviews.",
    },
    {
      id: "item-6",
      question: "Do I need any prior experience?",
      answer:
        "No prior coding experience is required. We start from the basics and gradually progress to advanced topics, making it beginner-friendly.",
    },

    {
      id: "item-7",
      question: "What is the course fee and are there any discounts?",
      answer:
        "The course fee is RS:9000. However, as part of our opening year special offer, we are giving a 50% discount — you can enroll for just RS:4500",
    },
    {
      id: "item-8",
      question: "Is there a one-time payment for full course access?",
      answer:
        "Yes, the full course fee is RS:9000. As part of our opening year special offer, you can enroll for just RS:4500. While it's a one-time fee, we also offer the flexibility to pay in two parts to make it more convenient for students.",
    },
    {
      id: "item-9",
      question: "Will I get access to class recordings?",
      answer:
        "Yes! All enrolled students will have access to class recording videos directly from their dashboard. This ensures you can revise anytime or catch up if you miss a live session.",
    },
    {
      id: "item-10",
      question: "Will I get access to future courses and for how long?",
      answer:
        "Yes! Once you enroll, you will automatically get access to any new courses we add in the future, including topics like Python, Django, Ruby, and Ruby on Rails — without any extra charges. Plus, you will have full access to all course content and updates for 4 years from the date of enrollment.",
    },
    {
      id: "item-11",
      question: "Is there a referral bonus program?",
      answer:
        "Yes! We offer a referral bonus. If you refer a new student who successfully enrolls in the course, you will receive ₹1000 for each referral as a thank you reward.",
    },
    {
      id: "item-12",
      question: "How can I connect with the DM-TECH community?",
      answer:
        "We would love to connect with you! If you have more questions, need help, or just want to chat with our instructors and fellow learners, join our Discord community: [Join Discord](https://discord.gg/F2zmZrBH24). See you inside!",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
          >
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Can&#39;t find what you&#39;re looking for? Contact our{" "}
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              Student support
            </Link>
          </p>
          <p className="text-muted-foreground mt-6 px-8">
            {" "}
            Join our discord channel for all other information regarding class
          </p>
          <a
            href="https://discord.gg/F2zmZrBH24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 font-medium hover:underline"
          >
            discord.gg/F2zmZrBH24
          </a>
        </div>
      </div>
    </section>
  );
}
