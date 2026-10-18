import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Urban Crescent designs and builds complete interiors end to end — modular kitchens, wardrobes, living rooms, bedrooms, lighting and painting — with product brands customised to your choice.";

export const metadata: Metadata = {
  metadataBase: new URL("https://urban-crescent.vercel.app"),
  title: {
    default: "Urban Crescent — Interiors Redefined",
    template: "%s | Urban Crescent",
  },
  description,
  applicationName: "Urban Crescent",
  keywords: [
    "interior design",
    "modular kitchen",
    "modular wardrobe",
    "home interiors",
    "living room design",
    "bedroom design",
    "lighting design",
    "painting",
    "Urban Crescent",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Urban Crescent",
    title: "Urban Crescent — Interiors Redefined",
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Crescent — Interiors Redefined",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F8F4EE",
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
