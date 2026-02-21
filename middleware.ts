import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, type Locale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  const segment = pathname.split("/")[1];
  const locale = locales.includes(segment as Locale) ? (segment as Locale) : "en";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-next-locale", locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
