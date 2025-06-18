import type { Metadata } from "next";
import { TemplatesContent } from "@/components/dashboard/templates-content";

export const metadata: Metadata = {
  title: "Templates | NeoForm",
  description: "Choose from professionally designed form templates.",
};

export default function TemplatesPage() {
  return <TemplatesContent />;
}
