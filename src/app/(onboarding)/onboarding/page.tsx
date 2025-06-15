import type { Metadata } from "next";
import { OnboardingFlow } from "@/components/onboarding/onboarding-flow";

export const metadata: Metadata = {
  title: "Get Started | NeoForm",
  description: "Set up your NeoForm account in just a few steps.",
};

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <OnboardingFlow />
    </div>
  );
}
