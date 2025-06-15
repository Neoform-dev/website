import type { Metadata } from "next";
import {
  Header,
  Hero,
  Features,
  HowItWorks,
  Demo,
  Pricing,
  Testimonials,
  CTA,
  Footer,
} from "@/components/landing";
import { Visuals } from "@/components/landing/visuals";

export const metadata: Metadata = {
  title: "NeoForm - Reimagine Google Forms with Beautiful UI",
  description:
    "Transform boring Google Forms into stunning, custom-styled forms while keeping Google Sheets as your backend. Fast, minimal, and connected.",
  keywords: [
    "Google Forms",
    "Form Builder",
    "Custom Forms",
    "Google Sheets",
    "Form Design",
    "SaaS",
    "API",
    "Web Forms",
  ],
  authors: [{ name: "Shaswat Raj", url: "https://github.com/sh20raj" }],
  creator: "Shaswat Raj",
  openGraph: {
    title: "NeoForm - Reimagine Google Forms with Beautiful UI",
    description:
      "Transform boring Google Forms into stunning, custom-styled forms while keeping Google Sheets as your backend.",
    url: "https://neoform.dev",
    siteName: "NeoForm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoForm - Reimagine Google Forms with Beautiful UI",
    description:
      "Transform boring Google Forms into stunning, custom-styled forms while keeping Google Sheets as your backend.",
    creator: "@SH20RAJ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <Features />
        <HowItWorks />
        <Visuals />
        <Demo />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
