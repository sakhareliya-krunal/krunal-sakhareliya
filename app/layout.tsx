import type { Metadata } from "next";
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
        <div className="min-h-screen">
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
