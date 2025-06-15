import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/constants/landing";

export function Testimonials() {
  return (
    <section className="py-24 flex items-center justify-center w-full">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by teams worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our customers are saying about NeoForm
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="pt-6">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-muted-foreground mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by teams at companies like:
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-lg font-semibold">TechFlow</div>
            <div className="text-lg font-semibold">StartupXYZ</div>
            <div className="text-lg font-semibold">GrowthCo</div>
            <div className="text-lg font-semibold">InnovateLabs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
