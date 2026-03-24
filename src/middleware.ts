import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Detect Layak Viral domain
  const isLayakViral =
    hostname.includes("layakviral.com") ||
    hostname.startsWith("layakviral.localhost");

  // Prevent /layakviral path from being accessed directly on dagelan.com
  if (!isLayakViral && pathname.startsWith("/layakviral")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
