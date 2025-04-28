// components/CourseDetails.tsx
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const CourseDetails = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-center">About Course</h1>
        <Separator />
        <div>
          <a
            href="https://abrasive-beetle-e95.notion.site/DM-MERN-STACK-ROAD-MAP-12466335ef9f800db261e7f28a0e2439"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:scale-105 hover:shadow-lg transition-all"
          >
            View Full Syllabus
          </a>
        </div>

        {/* Web Dev Cohort Overview */}
        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold">Web Dev Cohort</h2>
            <p className="text-muted-foreground">
              Join our live classes and learn everything you need to master web
              development, including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Front-End Basics:</strong> HTML, CSS, JavaScript
              </li>
              <li>
                <strong>Advanced Front-End:</strong> React, Next.js
              </li>
              <li>
                <strong>Back-End Development:</strong> Node.js
              </li>
              <li>
                <strong>Modern CSS Libraries:</strong> TailwindCSS, ShadCN
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, PostgreSQL
              </li>
              <li>
                <strong>DevOps Skills:</strong> Docker, AWS (ECR, EC2)
              </li>
              <li>
                <strong>Modern Workflows:</strong> TurboRepo, TypeScript, GitHub
                CI/CD
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* Web Development Essentials */}
          <Card>
            <CardContent className="space-y-4 p-6">
              <h3 className="text-xl font-semibold">
                Web Development Essentials
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>HTML, CSS, and JavaScript:</strong> Master core web
                  technologies to build beautiful, functional websites.
                </li>
                <li>
                  <strong>Advanced JavaScript:</strong> Understand closures,
                  promises, async/await for modern development.
                </li>
                <li>
                  <strong>DOM Manipulation:</strong> Create dynamic, interactive
                  websites through the Document Object Model.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Frontend Frameworks */}
          <Card>
            <CardContent className="space-y-4 p-6">
              <h3 className="text-xl font-semibold">Frontend Frameworks</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>React:</strong> Build reusable components, manage
                  state, and optimize performance.
                </li>
                <li>
                  <strong>Next.js:</strong> Master SSR, SSG, ISR, advanced
                  routing, API routes, and middleware.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Modern CSS Libraries */}
          <Card>
            <CardContent className="space-y-4 p-6">
              <h3 className="text-xl font-semibold">Modern CSS Libraries</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Tailwind CSS:</strong> Utility-first styling with fast
                  prototyping, theme customization, and dark mode support.
                </li>
                <li>
                  <strong>ShadCN:</strong> Build accessible, themeable UI
                  components easily with Radix UI + Tailwind CSS.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Backend Development */}
          <Card>
            <CardContent className="space-y-4 p-6">
              <h3 className="text-xl font-semibold">Backend Development</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Node.js and Express:</strong> Develop scalable servers
                  and APIs with asynchronous programming.
                </li>
                <li>
                  <strong>Socket.IO:</strong> Implement real-time communication
                  for chats, games, and more.
                </li>
                <li>
                  <strong>Authentication:</strong> Learn JWT, Passport.js, and
                  NextAuth.js for user authentication & authorization.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Databases and ORMs */}
          <Card>
            <CardContent className="space-y-4 p-6">
              <h3 className="text-xl font-semibold">Databases and ORMs</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>MongoDB:</strong> Handle unstructured data efficiently
                  with aggregation pipelines and indexes.
                </li>
                <li>
                  <strong>PostgreSQL:</strong> Manage structured data using
                  advanced SQL features and transactions.
                </li>
                <li>
                  <strong>Prisma:</strong> Type-safe ORM integration with
                  Next.js and Postgres.
                </li>
                <li>
                  <strong>Mongoose:</strong> Simplified MongoDB modeling with
                  schema validation.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* DevOps and Deployment */}
          <Card>
            <CardContent className="space-y-4 p-6">
              <h3 className="text-xl font-semibold">DevOps and Deployment</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Docker:</strong> Containerize applications for
                  consistent deployment environments.
                </li>
                <li>
                  <strong>Nginx:</strong> Optimize web server performance and
                  set up reverse proxies.
                </li>
                <li>
                  <strong>AWS:</strong> Deploy scalable apps with ECR, EC2, and
                  load balancers.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Modern Development Workflows */}
          <Card>
            <CardContent className="space-y-4 p-6">
              <h3 className="text-xl font-semibold">
                Modern Development Workflows
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Mono-repo & TurboRepo:</strong> Efficiently manage
                  large codebases with caching and pipelines.
                </li>
                <li>
                  <strong>TypeScript & ESLint:</strong> Improve code quality
                  with static typing and consistent code styles.
                </li>
                <li>
                  <strong>GitHub CI/CD:</strong> Automate your testing,
                  building, and deployment pipelines.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
