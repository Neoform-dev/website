import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading | NeoForm",
  description: "Loading your NeoForm experience.",
};

export default function OnloadingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Loading NeoForm</h1>
        <p className="text-gray-600">Please wait while we prepare your experience...</p>
      </div>
    </div>
  );
}
