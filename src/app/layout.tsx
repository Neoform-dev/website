import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/components/auth/auth-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NeoForm - Reimagine Google Forms with Beautiful UI",
    template: "%s | NeoForm"
  },
  description: "Transform boring Google Forms into stunning, custom-styled forms while keeping Google Sheets as your backend. Fast, minimal, and connected.",
  keywords: [
    "Google Forms",
    "Form Builder",
    "Custom Forms",
    "Google Sheets",
    "Form Design",
    "SaaS",
    "API",
    "Web Forms",
    "Form Transformation",
    "Beautiful Forms"
  ],
  authors: [{ name: "Shaswat Raj", url: "https://github.com/sh20raj" }],
  creator: "Shaswat Raj",
  publisher: "NeoForm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://neoform.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NeoForm - Reimagine Google Forms with Beautiful UI",
    description: "Transform boring Google Forms into stunning, custom-styled forms while keeping Google Sheets as your backend.",
    url: "https://neoform.dev",
    siteName: "NeoForm",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeoForm - Beautiful Google Forms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoForm - Reimagine Google Forms with Beautiful UI",
    description: "Transform boring Google Forms into stunning, custom-styled forms while keeping Google Sheets as your backend.",
    creator: "@SH20RAJ",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
  },
  verification: {
    google: "google-site-verification-code",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NeoForm",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "application-name": "NeoForm",
    "msapplication-TileColor": "#3b82f6",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#3b82f6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#3b82f6" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
