import type { Metadata } from "next";
import { DashboardContent } from "@/components/dashboard/dashboard-content";

export const metadata: Metadata = {
  title: "Dashboard | NeoForm",
  description: "Manage your transformed Google Forms with ease.",
};

export default function DashboardPage() {
  return <DashboardContent />;
}
