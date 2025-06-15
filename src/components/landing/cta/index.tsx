import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center w-full">
            <div className="container">
                <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-grid-white/10" />

                    <div className="relative px-8 py-16 text-center lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-3xl">
                            {/* Icon */}
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                                <Sparkles className="h-8 w-8" />
                            </div>

                            {/* Headline */}
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                Ready to transform your forms?
                            </h2>

                            {/* Subheadline */}
                            <p className="mt-6 text-lg opacity-90 lg:text-xl">
                                Join thousands of teams who have already transformed their Google Forms
                                into beautiful, converting experiences. Start your free trial today.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="text-base bg-white text-primary hover:bg-white/90"
                                    asChild
                                >
                                    <Link href="/join">
                                        Start Free Trial
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-base border-white/30 text-white hover:bg-white/10"
                                    asChild
                                >
                                    <Link href="/demo">
                                        Book a Demo
                                    </Link>
                                </Button>
                            </div>

                            {/* Trust indicator */}
                            <p className="mt-8 text-sm opacity-75">
                                No credit card required • Free 14-day trial • Cancel anytime
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
