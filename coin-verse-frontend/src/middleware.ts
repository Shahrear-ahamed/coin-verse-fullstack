import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token")?.value;

  const restrictedPathsForLoggedIn = ["/auth/sign-in", "/auth/sign-up"];
  const restrictedPathsForLoggedOut = [
    "/dashboard",
    "/dashboard/profile",
    "/dashboard/coins",
    "/dashboard/users",
  ];

  if (cookie && restrictedPathsForLoggedIn.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    !cookie &&
    restrictedPathsForLoggedOut.includes(request.nextUrl.pathname)
  ) {
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
  matcher: ["/dashboard/:path*", "/auth/sign-in", "/auth/sign-up"],
};
