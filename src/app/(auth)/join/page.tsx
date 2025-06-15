import type { Metadata } from "next";
import { GoogleSignup } from "@/components/auth/google-signup";

export const metadata: Metadata = {
  title: "Join NeoForm | Transform Your Google Forms",
  description: "Join NeoForm and start transforming Google Forms today. One-click access with Google authentication.",
};

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center p-4">
      <GoogleSignup />
    </div>
  );
}
