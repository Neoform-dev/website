"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-96 max-w-md">
        <CardContent className="flex flex-col items-center justify-center p-8 space-y-6">
          {/* Animated Logo */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-primary/20 animate-pulse">
              <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin">
              </div>
              <div className="absolute inset-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">N</span>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold">Loading NeoForm</h2>
            <p className="text-sm text-muted-foreground">
              Preparing your beautiful forms...
            </p>
          </div>

          {/* Loading Bar */}
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-pulse"></div>
          </div>

          {/* Animated Dots */}
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
