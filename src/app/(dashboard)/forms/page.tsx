import type { Metadata } from "next";
import { FormsContent } from "@/components/dashboard/forms-content";

export const metadata: Metadata = {
  title: "Forms | NeoForm", 
  description: "Manage all your forms in one place.",
};

export default function FormsPage() {
  return <FormsContent />;
}
