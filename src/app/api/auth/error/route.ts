import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const error = searchParams.get("error") || "Default";
  
  // Redirect to the Stack Auth error page instead
  const redirectUrl = new URL("/auth/error", request.url);
  redirectUrl.searchParams.set("error", error);
  
  return NextResponse.redirect(redirectUrl);
}

export async function POST(request: NextRequest) {
  // Handle POST requests the same way
  return GET(request);
}
