import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest): NextResponse | undefined {
  const proto = request.headers.get("x-forwarded-proto");
  const host = request.headers.get("host");

  if (proto === "http" && host && process.env.NODE_ENV === "production") {
    return NextResponse.redirect(
      `https://${host}${request.nextUrl.pathname}${request.nextUrl.search}`,
      301,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
