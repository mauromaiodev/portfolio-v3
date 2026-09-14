import { auth } from "@/auth";
import { redirect } from "next/navigation";

/**
 * Redirects unauthenticated visitors away from the CMS.
 */
export async function requireAdmin() {
  const session = await auth();
  if (!session?.user) {
    redirect("/admin/login");
  }
  return session;
}
