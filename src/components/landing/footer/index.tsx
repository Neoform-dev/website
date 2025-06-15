import Link from "next/link";
import * as Icons from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FOOTER_SECTIONS, SOCIAL_LINKS } from "@/constants/landing";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-16">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">N</span>
              </div>
              <span className="text-xl font-bold">NeoForm</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Transform boring Google Forms into beautiful, custom-styled forms 
              while keeping Google Sheets as your backend. Fast, minimal, and connected.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = Icons[social.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-background hover:bg-muted transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {FOOTER_SECTIONS.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 NeoForm. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
