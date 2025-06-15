import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
