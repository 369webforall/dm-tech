// components/CourseInfo.tsx
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
const CourseInfo = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <Card className="shadow-md">
        <CardContent className="p-6 space-y-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Course Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <div className="p-4 rounded-lg bg-gray-50">
              <p>
                <span className="font-semibold">Duration:</span> 9 Months
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <p className="font-bold">Starting Date: June 23, 2025</p>
              <p>
                <span className="font-semibold">Class Time:</span> 1 Hour/Day
                (Mon-Fri) @ 7:45 PM to 8:45 PM
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <p>
                <span className="font-semibold">Fee:</span> RS: 9000
              </p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 border border-green-400">
              <p className="text-green-700 font-semibold">
                Opening Year Discount: 50% Off 🎉
              </p>
              <p className="text-sm text-green-600 mt-1">(Pay only RS:4500)</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Limited-time offer available for early enrollments in 2025!
          </p>
          <p className="text-md my-2">
            Join our Discord channel for communication.
            <Link href="/contact" className="hover:border-b-2 text-orange-400">
              Contact
            </Link>
          </p>

          <p>
            <span className="text-orange-700">Important: </span> for any
            question visit faq page
          </p>
          <Link href="/faq" className={buttonVariants({ size: "lg" })}>
            FAQ
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default CourseInfo;
