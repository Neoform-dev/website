import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Define protected routes
const protectedRoutes = [
  "/dashboard",
  "/forms",
  "/templates",
  "/analytics", 
  "/settings",
  "/profile",
  "/create"
]

// Define auth routes that should redirect to dashboard if already logged in
const authRoutes = [
  "/signup",
  "/join",
  "/login"
]

export async function middleware(request: NextRequest) {
  const session = await auth()
  const { pathname } = request.nextUrl

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  )

  // Check if the current route is an auth route
  const isAuthRoute = authRoutes.some(route => 
    pathname.startsWith(route)
  )

  // If trying to access protected route without session, redirect to signup
  if (isProtectedRoute && !session) {
    const signupUrl = new URL("/signup", request.url)
    signupUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(signupUrl)
  }

  // If trying to access auth route with session, redirect to dashboard
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
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
}
