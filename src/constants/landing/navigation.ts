import { NavigationItem } from "@/types/landing";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const MOBILE_NAVIGATION_ITEMS: NavigationItem[] = [
  ...NAVIGATION_ITEMS,
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
];
