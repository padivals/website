"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true); // NEW: Tracks if we are at the top
  const [mobileOpen, setMobileOpen] = useState(false);

  // hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // 1. Logic to hide header when scrolling down
      if (current > lastScrollY && current > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      // 2. Logic to detect if we are at the top (Transparency logic)
      if (current < 10) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* ==================== MAIN HEADER ==================== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-500 
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        ${
          isTop
            ? "bg-transparent py-6 border-transparent" // Clean & Transparent at top
            : "bg-none   backdrop-blur-lg py-6 shadow-xl" // Dark Green & Blurred when scrolling
        }
        `}
      >
        <div className="px-16 mx-auto grid grid-cols-5 items-center gap-2">
          {/* LEFT NAV — Desktop only */}
          <Link
            href="/rooms"
            className="hidden md:block text-white text-lg font-medium  font-sans hover:text-[#D4AF37] transition-colors text-center drop-shadow-md"
          >
            <span className="nav-underline">LODGING</span>
          </Link>

          <Link
            href="/events"
            className="hidden md:block text-white text-lg font-medium  font-sans hover:text-[#D4AF37] transition-colors text-center drop-shadow-md"
          >
            <span className="nav-underline">EVENT SPACES</span>
          </Link>

          {/* CENTER LOGO */}
          <div className="col-span-5 md:col-span-1 text-center">
            <Link href="/">
              <Image
                src="/svgs/MainLogo.svg"
                alt="The Padival Grand Hotel"
                width={400}
                height={90}
                className={`h-auto mx-auto drop-shadow-lg transition-all duration-300 ${
                  isTop ? "w-48 md:w-80" : "w-40 md:w-64"
                }`} // Logo gets slightly smaller on scroll
                priority
              />
            </Link>
          </div>

          {/* RIGHT NAV — Desktop only */}
          <Link
            href="/dining"
            className="hidden md:block text-white text-lg font-medium  font-sans hover:text-[#D4AF37] transition-colors text-center drop-shadow-md"
          >
            <span className="nav-underline">DINING</span>
          </Link>

          <Link
            href="/about"
            className="hidden md:block text-white text-lg font-medium  font-sans hover:text-[#D4AF37] transition-colors text-center drop-shadow-md"
          >
            <span className="nav-underline">ABOUT US</span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white drop-shadow-lg absolute right-6"
            onClick={() => setMobileOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ==================== MOBILE SIDEBAR SLIDE IN ==================== */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#00221A] text-white z-[60] transform transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header with logo + close */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">

          <Link className="" href="/">
            <Image
              src="/MainLogo.png"
              alt="logo"
              width={120}
              height={40}
              className="h-auto"
            />
          </Link>

                    <button onClick={() => setMobileOpen(false)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* ONLY your 4 header links */}
        <nav className="flex flex-col mt-2 gap-6 p-6 text-lg tracking-wide font-sans text-start">
          <Link href="/rooms" onClick={() => setMobileOpen(false)}>
            LODGING
          </Link>
          <Link href="/events" onClick={() => setMobileOpen(false)}>
            EVENT SPACES
          </Link>
          <Link href="/dining" onClick={() => setMobileOpen(false)}>
            DINING
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>
            ABOUT US
          </Link>
        </nav>
      </div>

      {/* BACKDROP (dark overlay) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
