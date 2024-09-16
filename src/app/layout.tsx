import type { Metadata } from "next";

import "@/styles/globals.css";

import type { Viewport } from "next";

import { fontMono as font } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import SideBar from "@/components/aside/sideBar";
import Body from "@/components/layout/body";
import Header from "@/components/layout/header";
import ThemeProvider from "@/components/theme/themeProvider";

export const metadata: Metadata = {
  title: "nexfilms",
  description: "movie app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex overflow-hidden font-mono antialiased",
          font.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <SideBar />
          <Body>
            <Header />
            {children}
          </Body>
        </ThemeProvider>
      </body>
    </html>
  );
}
