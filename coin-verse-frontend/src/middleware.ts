import { NextMiddleware, NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(
  request: NextRequest,
  response: NextResponse,
  next: NextMiddleware
) {
  const cookie = request.cookies.get("token")?.value;
  console.log("cookie", cookie);
  console.log("pathname", request.nextUrl.pathname);

  const restrictedPathsForLoggedIn = ["/auth/sign-in", "/auth/sign-up"];

  if (cookie && restrictedPathsForLoggedIn.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!cookie) {
    // return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    return NextResponse.redirect(
      new URL(
        `/auth/sign-in?callbackUrl=${request.nextUrl.pathname}`,
        request.url
      )
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*"],
};
