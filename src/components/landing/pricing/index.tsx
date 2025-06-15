import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PRICING_PLANS } from "@/constants/landing";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-muted/50 flex items-center justify-center w-full">
            <div className="container">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Simple, transparent pricing
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Choose the plan that&apos;s right for you. Start free, upgrade when you need more.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
                    {PRICING_PLANS.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}
                        >
                            {plan.popular && (
                                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    Most Popular
                                </Badge>
                            )}

                            <CardHeader className="text-center pb-6">
                                <CardTitle className="text-xl">{plan.name}</CardTitle>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.price !== "$0" && <span className="text-muted-foreground">/month</span>}
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className="w-full mt-6"
                                    variant={plan.popular ? "default" : "outline"}
                                    asChild
                                >
                                    <Link href="/join">
                                        {plan.ctaText}
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Enterprise CTA */}
                <div className="mt-16 text-center">
                    <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                        <h3 className="text-xl font-semibold mb-2">Need something custom?</h3>
                        <p className="text-muted-foreground mb-4">
                            Enterprise solutions with custom integrations, dedicated support, and SLA guarantees.
                        </p>
                        <Button variant="outline" asChild>
                            <Link href="/contact">Contact Sales</Link>
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    );
}
