import { Mail, Users } from "lucide-react";
import BunnyVideo from "@/components/video/BunnyVideo";
export default function ContactPage() {
  return (
    <section className="min-h-screen py-16 px-6 bg-background text-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground mb-10">
          Have questions or need help? Reach out to us via email or join our
          community on Discord.
        </p>

        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="flex items-center gap-3">
            <Mail className="text-primary" />
            <span className="text-lg">Email us at:</span>
            <a
              href="mailto:dmacademy2025@gmail.com"
              className="text-primary font-medium hover:underline"
            >
              dmacademy2025@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Users className="text-indigo-500" />
            <span className="text-lg">Join our Discord:</span>
            <a
              href="https://discord.gg/F2zmZrBH24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 font-medium hover:underline"
            >
              discord.gg/F2zmZrBH24
            </a>
          </div>

          <div className="my-4 w-full max-w-xl">
            <BunnyVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
