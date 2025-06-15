import type { Metadata } from "next";
import { AnalyticsContent } from "@/components/dashboard/analytics";

export const metadata: Metadata = {
  title: "Analytics | NeoForm",
  description: "View detailed analytics and insights for your forms.",
};

export default function AnalyticsPage() {
  return <AnalyticsContent />;
}
