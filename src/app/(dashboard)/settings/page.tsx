import type { Metadata } from "next";
import { SettingsContent } from "@/components/dashboard/settings-content";

export const metadata: Metadata = {
  title: "Settings | NeoForm",
  description: "Manage your account settings and preferences.",
};

export default function SettingsPage() {
  return <SettingsContent />;
}
