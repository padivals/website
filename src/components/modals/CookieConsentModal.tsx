"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";

export default function CookieConsentModal() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentChoice, setConsentChoice] = useState<string | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem("padivals_cookie_consent");
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      setConsentChoice(savedConsent);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("padivals_cookie_consent", "accepted");
    setConsentChoice("accepted");
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("padivals_cookie_consent", "necessary");
    setConsentChoice("necessary");
    setShowBanner(false);
  };

  const handleClose = () => {
    localStorage.setItem("padivals_cookie_consent", "necessary");
    setConsentChoice("necessary");
    setShowBanner(false);
  };

  return (
    <>
      {/* Conditionally inject Microsoft Clarity script if and only if accepted */}
      {consentChoice === "accepted" && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vqgg3ms8f4");
          `}
        </Script>
      )}

      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-[9999] w-full bg-[#F9F5EC] border-t border-[#1B4D3E]/10 py-6 px-6 md:py-8 md:px-12"
          >
            {/* Inner Container */}
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative pr-8">
              
              {/* Close Button at top-right of container */}
              <button
                onClick={handleClose}
                aria-label="Close Cookie Banner"
                className="absolute top-0 right-0 text-gray-500 hover:text-[#1B4D3E] transition-colors p-1 cursor-pointer text-xl"
              >
                <X size={20} />
              </button>

              {/* Text Area */}
              <div className="flex-1 flex flex-col gap-2">
                <h2
                  className="text-[28px] md:text-[32px] font-normal text-[#0f2a1d] font-serif leading-tight"
                >
                  Cookie Policy
                </h2>
                <p className="text-[14px] leading-relaxed text-[#3a4740] font-sans max-w-[800px]">
                  We use cookies to give you the best experience on our website. By continuing, you&apos;re agreeing to our use of cookies. For more information read our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-[#1B4D3E] transition-colors">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              {/* Actions Stacked Vertically */}
              <div className="flex flex-col gap-3 w-full md:w-auto shrink-0 md:min-w-[200px] items-stretch">
                <Button
                  variant="primary"
                  onClick={handleAcceptAll}
                  className="w-full py-3.5 text-xs md:text-sm font-bold uppercase tracking-wider rounded-none text-white"
                >
                  Accept All
                </Button>
                <Button
                  variant="outline"
                  onClick={handleAcceptNecessary}
                  className="w-full py-3.5 text-xs md:text-sm font-bold uppercase tracking-wider rounded-none bg-transparent"
                >
                  Accept Necessary
                </Button>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
