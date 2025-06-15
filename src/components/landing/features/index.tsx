import * as Icons from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FEATURES } from "@/constants/landing";

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50 flex items-center justify-center w-full">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to transform your forms
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features that work together to create beautiful, functional forms
            that your users will love.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            
            return (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
