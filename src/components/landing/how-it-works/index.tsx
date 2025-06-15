import * as Icons from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HOW_IT_WORKS_STEPS } from "@/constants/landing";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 flex items-center justify-center w-full">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How NeoForm Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transform your Google Forms in just a few simple steps. 
            No technical knowledge required.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const IconComponent = Icons[step.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            
            return (
              <Card key={index} className="relative text-center border-0 shadow-sm">
                <CardContent className="pt-8 pb-6">
                  {/* Step Number */}
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    {step.step}
                  </Badge>

                  {/* Icon */}
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Optional CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to transform your forms?
          </p>
          <div className="flex justify-center">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icons.Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Start your first transformation</h4>
                  <p className="text-sm text-muted-foreground">
                    Paste your Google Form link and see the magic happen
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
