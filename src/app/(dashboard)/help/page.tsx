import type { Metadata } from "next";
import { HelpContent } from "@/components/dashboard/help";

export const metadata: Metadata = {
  title: "Help | NeoForm", 
  description: "Get help and support for using NeoForm.",
};

export default function HelpPage() {
  return <HelpContent />;
}
