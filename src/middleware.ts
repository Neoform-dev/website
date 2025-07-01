import { stackServerApp } from "../stack";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes
const protectedRoutes = [
  "/dashboard",
  "/forms", 
  "/templates",
  "/analytics",
  "/settings",
  "/profile",
  "/create"
];

// Define auth routes that should redirect to dashboard if already logged in
const authRoutes = [
  "/signup",
  "/join",
  "/login",
  "/handler/sign-up",
  "/handler/sign-in"
];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Get the user from Stack Auth
  const user = await stackServerApp.getUser();
  
  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // Check if the current route is an auth route
  const isAuthRoute = authRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // If accessing a protected route without being logged in
  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL("/handler/sign-in", request.url));
  }
  
  // If accessing an auth route while already logged in
  if (isAuthRoute && user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public|icons|manifest.json|sw.js|workbox-.*\\.js).*)",
  ],
};
