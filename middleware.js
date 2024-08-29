// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  // Attempt to validate the URL
  try {
    new URL(request.url);
  } catch (error) {
    console.error(
      `Invalid URL detected: ${request.url} - Error: ${error.message}`
    );
    // Redirect to a custom error page or handle the error
    return NextResponse.redirect(new URL("/error", request.url));
  }

  // Proceed with the request if the URL is valid
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // Apply middleware to all paths
};
