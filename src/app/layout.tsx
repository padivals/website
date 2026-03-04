import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { BookingModalProvider } from "@/components/providers/BookingModalContext";
import BookingModal from "@/components/modals/BookingModal";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

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
  metadataBase: new URL("https://www.thepadivalgrand.com"),
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
    url: "https://www.thepadivalgrand.com",
    siteName: "The Padival Grand Hotel",
    images: [
      {
        url: "https://www.thepadivalgrand.com/ogImage.png",
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
    images: ["https://www.thepadivalgrand.com/ogImage.png"],
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
    canonical: "https://www.thepadivalgrand.com",
  },
  verification: {
    google: "sH2I4FsirEdc61dILm0CtFm4FLVcv6AmpeN7C7ahxl0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vqgg3ms8f4");
          `}
        </Script>
      </head>
      <GoogleTagManager gtmId="G-3R4LJCB4G5" />
      <body
        className={`${cormorantGaramond.variable} ${manrope.variable} antialiased font-sans`}
      >
        <SmoothScrollProvider>
          <BookingModalProvider>
            {children}
            <BookingModal />
          </BookingModalProvider>
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
