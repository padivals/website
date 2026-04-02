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
  metadataBase: new URL("https://thepadivalgrand.com"),
  title: "Hotel in Puttur | The Padival Grand | Stay, Dining & Events",
  description:
    "Stay at The Padival Grand in Puttur with clean rooms, AC, Wi-Fi, pure-veg dining, and event spaces. Ideal for families and travellers. Book your stay today.",
  openGraph: {
    title: "Padival Grand Hotel | Comfortable Stay & Pure Veg Dining in Puttur",
    description:
      "Looking for a comfortable stay in Puttur? The Padival Grand offers clean rooms, pure veg dining, AC, and WiFi for families, travellers, and temple visitors.",
    url: "https://thepadivalgrand.com",
    siteName: "The Padival Grand Hotel",
    images: [
      {
        url: "https://thepadivalgrand.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Padival Grand Hotel - Luxurious Stay & Pure Veg Dining in Puttur",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Padival Grand | Hotel in Puttur, Karnataka",
    description:
      "Enjoy a comfortable stay at The Padival Grand with clean rooms, pure veg dining, and essential amenities for families, travellers, and temple visits.  ",
    images: ["https://thepadivalgrand.com/og-image.png"],
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
    canonical: "/",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3R4LJCB4G5"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3R4LJCB4G5');
          `}
        </Script>

      </head>


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
