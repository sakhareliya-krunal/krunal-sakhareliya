import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Krunal Sakhareliya | Flutter Developer",
    template: "%s | Krunal Sakhareliya",
  },
  description:
    "Flutter developer building responsive products, API-driven flows, and connected application experiences.",
  metadataBase: new URL("https://krunal-sakhareliya.netlify.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
