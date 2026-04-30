import type { Metadata } from "next";
import { AppShell } from "@/components/ui/app-shell";
import { SiteFooter } from "@/components/ui/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Krunal Sakhareliya",
    template: "%s | Krunal Sakhareliya",
  },
  description:
    "A cinematic portfolio blending product thinking, engineering, and immersive 3D storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AppShell footer={<SiteFooter />}>{children}</AppShell>
      </body>
    </html>
  );
}
