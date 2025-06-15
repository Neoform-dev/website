import type { Metadata } from "next";
import { Templates } from "@/components/dashboard/templates";

export const metadata: Metadata = {
  title: "Templates | NeoForm",
  description: "Choose from professionally designed form templates.",
};

export default function TemplatesPage() {
  return <Templates />;
}
