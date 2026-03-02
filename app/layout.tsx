import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urban Crescent — Modular Interiors & End-to-End Design",
  description:
    "Urban Crescent crafts thoughtfully designed modular interiors with an end-to-end approach — from concept to installation. Contemporary spaces built for real life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
