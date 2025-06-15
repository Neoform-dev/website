import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | NeoForm",
  description: "Terms and conditions for using NeoForm's form building platform.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-white">N</span>
              </div>
              <span className="text-xl font-bold text-gray-900">NeoForm</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-lg text-gray-600">
                Last updated: June 15, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing or using NeoForm's services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-6">
                NeoForm provides a web-based platform for creating, customizing, and managing online forms. 
                Our service allows users to build forms, collect responses, and analyze data through our 
                intuitive interface.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">
                  To use certain features of our service, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Providing accurate and complete information</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600 mb-4">You agree not to use our service to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on the rights of others</li>
                  <li>Transmit harmful, offensive, or illegal content</li>
                  <li>Collect personal information without consent</li>
                  <li>Distribute spam or unsolicited communications</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our service for any fraudulent purpose</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Content and Data</h2>
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your Content</h3>
                <p className="text-gray-600 mb-4">
                  You retain ownership of all content you create using our service. You grant us a 
                  limited license to host, store, and process your content to provide our services.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mb-2">Data Protection</h3>
                <p className="text-gray-600">
                  You are responsible for ensuring that your use of our service complies with applicable 
                  data protection laws, including obtaining necessary consents for data collection.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Payment Terms</h2>
              <div className="space-y-4 mb-6">
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Subscription fees are billed in advance on a recurring basis</li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>We may change our pricing with 30 days' notice</li>
                  <li>Failure to pay may result in service suspension</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Availability</h2>
              <p className="text-gray-600 mb-6">
                While we strive to maintain high availability, we do not guarantee uninterrupted access 
                to our service. We may perform maintenance, updates, or experience technical issues that 
                temporarily affect service availability.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                Our service, including all software, designs, and content, is protected by intellectual 
                property laws. You may not copy, modify, or distribute our proprietary materials without 
                explicit permission.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600 mb-4">
                  Either party may terminate this agreement at any time:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>You may cancel your account at any time through your account settings</li>
                  <li>We may suspend or terminate accounts that violate these terms</li>
                  <li>Upon termination, your access to the service will be discontinued</li>
                  <li>You may export your data within 30 days of termination</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimers</h2>
              <p className="text-gray-600 mb-6">
                Our service is provided "as is" without warranties of any kind. We disclaim all warranties, 
                express or implied, including but not limited to merchantability, fitness for a particular 
                purpose, and non-infringement.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                To the maximum extent permitted by law, NeoForm shall not be liable for any indirect, 
                incidental, special, or consequential damages arising from your use of our service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These terms are governed by the laws of [Jurisdiction], without regard to conflict of 
                law provisions. Any disputes shall be resolved in the courts of [Jurisdiction].
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. We will notify users of material 
                changes via email or through our service. Continued use after changes constitutes acceptance.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-600">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-800 font-medium">Email: legal@neoform.dev</p>
                <p className="text-gray-800 font-medium">Address: 123 Form Street, Design City, DC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
