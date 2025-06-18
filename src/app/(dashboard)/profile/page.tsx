import type { Metadata } from "next";
import { ProfileContent } from "@/components/dashboard/profile-content";

export const metadata: Metadata = {
  title: "Profile | NeoForm",
  description: "Manage your profile information and preferences.",
};

export default function ProfilePage() {
  return <ProfileContent />;
}
