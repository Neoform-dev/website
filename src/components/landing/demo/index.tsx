import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";

export function Demo() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4">
            Live Demo
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            See the transformation in action
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Compare a regular Google Form with its NeoForm transformation
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Before */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Before: Google Form</span>
                  <Badge variant="secondary">Original</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded border-2 border-dashed border-gray-200">
                  <div className="text-sm text-gray-600 mb-3">Contact Us</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Name *</div>
                      <div className="h-8 bg-white border border-gray-300 rounded text-xs flex items-center px-2 text-gray-400">
                        Your answer
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Email *</div>
                      <div className="h-8 bg-white border border-gray-300 rounded text-xs flex items-center px-2 text-gray-400">
                        Your answer
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Message</div>
                      <div className="h-16 bg-white border border-gray-300 rounded text-xs flex items-start px-2 py-2 text-gray-400">
                        Your answer
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">
                      Submit
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="relative border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>After: NeoForm</span>
                  <Badge>Transformed</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 bg-white rounded-lg shadow-sm border">
                  <div className="text-lg font-semibold mb-4">Get in Touch</div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Full Name *
                      </label>
                      <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg text-sm flex items-center px-3 text-gray-500">
                        Enter your name
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Email Address *
                      </label>
                      <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg text-sm flex items-center px-3 text-gray-500">
                        your@email.com
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Your Message
                      </label>
                      <div className="h-20 bg-gray-50 border border-gray-200 rounded-lg text-sm flex items-start px-3 py-3 text-gray-500">
                        Tell us how we can help...
                      </div>
                    </div>
                    <Button className="w-full">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Try Interactive Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/signup">
                Transform Your Form
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
