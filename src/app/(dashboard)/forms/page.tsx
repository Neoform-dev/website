import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms | NeoForm",
  description: "Manage all your forms in one place.",
};

export default function FormsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Forms</h1>
        <p className="text-gray-600 mt-1">
          Manage and view all your transformed Google Forms
        </p>
      </div>

      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Forms Management Coming Soon</h3>
        <p className="text-gray-600">
          Advanced form management features are under development. Check back soon!
        </p>
      </div>
    </div>
  );
}
