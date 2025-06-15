"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function GoogleSignup() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleJoin = async () => {
    setIsLoading(true);
    // Simulate API call - in real implementation, this would:
    // 1. Check if user exists in database
    // 2. If exists, update last login and redirect to dashboard
    // 3. If new user, create account and redirect to onboarding
    setTimeout(() => {
      // For demo, we'll redirect to onboarding for new users
      window.location.href = "/onboarding";
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>

      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-primary-foreground">N</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-foreground">
            Join NeoForm
          </h1>
          <p className="text-muted-foreground mt-2">
            Transform your Google Forms in minutes
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Google Join Button */}
          <Button
            onClick={handleGoogleJoin}
            disabled={isLoading}
            className="w-full h-12 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 shadow-sm"
            variant="outline"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-3" />
                Connecting...
              </div>
            ) : (
              <div className="flex items-center">
                <Chrome className="w-5 h-5 mr-3 text-blue-500" />
                Continue with Google
              </div>
            )}
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                One-Click Access
              </span>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
              <span>Automatic account creation or login</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              <span>Secure Google authentication</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
              <span>Instant access to your forms</span>
            </div>
          </div>

          {/* Terms */}
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-foreground">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
          </p>
        </CardContent>
      </Card>

      {/* Trust Indicators */}
      <div className="mt-8 text-center">
        <p className="text-xs text-muted-foreground mb-4">
          Trusted by 50,000+ users worldwide
        </p>
        <div className="flex justify-center items-center space-x-6 opacity-60">
          <div className="text-sm font-medium">Microsoft</div>
          <div className="text-sm font-medium">Google</div>
          <div className="text-sm font-medium">Stripe</div>
        </div>
      </div>
    </div>
  );
}
