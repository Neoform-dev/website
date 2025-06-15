import { Testimonial, SocialLink, FooterSection } from "@/types/landing";

export const HERO_CONTENT = {
  headline: "Reimagine Google Forms with Beautiful UI",
  subheadline: "Transform boring Google Forms into stunning, custom-styled forms while keeping Google Sheets as your backend. Fast, minimal, and connected.",
  primaryCta: "Start Free Today",
  secondaryCta: "See How It Works"
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow",
    content: "NeoForm transformed our user feedback collection. Beautiful forms that actually convert!"
  },
  {
    name: "Mike Rodriguez",
    role: "Developer",
    company: "StartupXYZ",
    content: "The API integration is seamless. We built our custom UI in minutes, not hours."
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    company: "GrowthCo",
    content: "Finally, forms that match our brand! The mobile experience is flawless."
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Twitter", href: "https://twitter.com/SH20RAJ", icon: "Twitter" },
  { name: "GitHub", href: "https://github.com/sh20raj", icon: "Github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/sh20raj", icon: "Linkedin" }
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "API Docs", href: "/docs" },
      { label: "Templates", href: "/templates" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Status", href: "/status" },
      { label: "Updates", href: "/updates" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
      { label: "Cookies", href: "/cookies" }
    ]
  }
];

export const STATS = [
  { label: "Forms Transformed", value: "10,000+" },
  { label: "Happy Users", value: "2,500+" },
  { label: "API Calls Daily", value: "100K+" },
  { label: "Uptime", value: "99.9%" }
];
