import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://padivals-megamind.vercel.app/"),
  title: "The Padival Grand Hotel | Luxury Stay in Puttur",
  description:
    "Experience the finest hospitality at The Padival Grand Hotel in Puttur. Luxury rooms, exquisite dining, and grand event spaces for a memorable stay.",
  keywords: [
    "Padival Grand Hotel",
    "Hotel in Puttur",
    "Luxury Hotel Puttur",
    "Accommodation Puttur",
    "Event Hall Puttur",
    "Best Hotel in Puttur",
  ],
  openGraph: {
    title: "The Padival Grand Hotel | Luxury Stay in Puttur",
    description:
      "Experience the finest hospitality at The Padival Grand Hotel in Puttur. Luxury rooms, exquisite dining, and grand event spaces for a memorable stay.",
    url: "https://padivals-megamind.vercel.app/",
    siteName: "The Padival Grand Hotel",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "The Padival Grand Hotel - Luxury Accommodation in Puttur",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Padival Grand Hotel | Luxury Stay in Puttur",
    description:
      "Experience the finest hospitality at The Padival Grand Hotel in Puttur. Luxury rooms, exquisite dining, and grand event spaces for a memorable stay.",
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://padivals-megamind.vercel.app/",
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
        className={`${cormorantGaramond.variable} ${manrope.variable} antialiased font-sans`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
