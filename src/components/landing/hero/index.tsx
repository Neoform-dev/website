import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HERO_CONTENT } from "@/constants/landing";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-4">
            🚀 Now supporting Google Forms API v2
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {HERO_CONTENT.headline}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl lg:text-2xl max-w-3xl mx-auto">
            {HERO_CONTENT.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base" asChild>
              <Link href="/signup">
                {HERO_CONTENT.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <Link href="#how-it-works">
                <Play className="mr-2 h-4 w-4" />
                {HERO_CONTENT.secondaryCta}
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm text-muted-foreground">Forms Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2,500+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100K+</div>
              <div className="text-sm text-muted-foreground">API Calls Daily</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
