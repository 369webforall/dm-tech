import Link from "next/link";

export default function Hero() {
  return (
    <section className="rounded-2xl bg-white p-8 md:p-12 shadow-sm border border-gray-100 mb-12 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        Master Full-Stack Web Development
      </h1>

      <p className="text-xl md:text-2xl text-gray-600 mb-4">
        Join our comprehensive{" "}
        <span className="font-semibold text-gray-800">
          MERN Stack Online Course
        </span>{" "}
        and become a job-ready full-stack developer.
      </p>

      <p className="text-md md:text-lg text-gray-500 mb-8">
        Learn HTML, CSS, JavaScript, React, Next.js, Node.js, MongoDB, DevOps,
        and modern workflows like TurboRepo, TypeScript, and CI/CD — guided by
        live sessions, real-world projects, and expert mentorship.
      </p>

      <Link
        href="/signup"
        className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 text-lg font-semibold rounded-md shadow-xl hover:scale-105 transition"
      >
        Enroll Now
      </Link>
    </section>
  );
}
