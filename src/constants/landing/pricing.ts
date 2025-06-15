import { PricingPlan } from "@/types/landing";

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out NeoForm",
    features: [
      "1 Form transformation",
      "Basic UI themes",
      "NeoForm branding",
      "Google Sheets integration",
      "Community support"
    ],
    ctaText: "Get Started Free"
  },
  {
    name: "Pro",
    price: "$5",
    description: "For professionals and small teams",
    features: [
      "Unlimited forms",
      "Premium UI themes",
      "Remove NeoForm branding",
      "Custom domain support",
      "Priority support",
      "Advanced analytics"
    ],
    popular: true,
    ctaText: "Start Pro Trial"
  },
  {
    name: "Developer",
    price: "$10",
    description: "For developers building custom solutions",
    features: [
      "Everything in Pro",
      "Full API access",
      "Custom embed options",
      "Webhook support",
      "White-label solution",
      "Developer support"
    ],
    ctaText: "Go Developer"
  }
];
