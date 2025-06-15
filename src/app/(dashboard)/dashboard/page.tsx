import type { Metadata } from "next";
import { Dashboard } from "@/components/dashboard/dashboard";

export const metadata: Metadata = {
  title: "Dashboard | NeoForm",
  description: "Manage your transformed Google Forms with ease.",
};

export default function DashboardPage() {
  return <Dashboard />;
}
