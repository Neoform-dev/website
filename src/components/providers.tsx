"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { StackProvider, StackClientApp } from "@stackframe/stack";

interface ProvidersProps {
  children: React.ReactNode;
}

const stackApp = new StackClientApp({ 
  tokenStore: "nextjs-cookie" 
});

export function Providers({ children }: ProvidersProps) {
  return (
    <StackProvider app={stackApp}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </StackProvider>
  );
}
