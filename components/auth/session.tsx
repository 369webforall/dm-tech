import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function getSessionFromRequest() {
  const incomingHeaders = await headers(); // This is ReadonlyHeaders
  const realHeaders = new Headers();

  // Copy all headers into the real Headers object
  for (const [key, value] of incomingHeaders.entries()) {
    realHeaders.set(key, value);
  }

  const session = await auth.api.getSession({
    headers: realHeaders,
  });

  return session;
}
