import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

const PUBLIC_FILE = /\.[^/]+$/;

/**
 * Runs locale detection for public pages and skips admin/auth APIs.
 */
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|_vercel).*)"],
};
