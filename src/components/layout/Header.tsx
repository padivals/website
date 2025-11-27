"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
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
        className={`fixed top-0 left-0 w-full z-50 p-10 transition-transform duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto grid grid-cols-5 items-center gap-2">

          {/* LEFT NAV — Desktop only */}
          <Link
            href="#"
            className="hidden md:block text-white text-md tracking-widest font-sans hover:text-gold-400 transition-colors text-center"
          >
            <span className="nav-underline">LODGING</span>
          </Link>

          <Link
            href="#"
            className="hidden md:block text-white text-md tracking-widest font-sans hover:text-gold-400 transition-colors text-center"
          >
            <span className="nav-underline">EVENT SPACES</span>
          </Link>

          {/* CENTER LOGO */}
          <div className="col-span-5 md:col-span-1 text-center">
            <Link href="/">
              <Image
                src="/Mainlogo.png"
                alt="The Padival Grand Hotel"
                width={250}
                height={67}
                className="w-48 md:w-74 h-auto mx-auto"
                priority
              />
            </Link>
          </div>

          {/* RIGHT NAV — Desktop only */}
          <Link
            href="#"
            className="hidden md:block text-white text-md tracking-widest font-sans hover:text-gold-400 transition-colors text-center"
          >
            <span className="nav-underline">DINING</span>
          </Link>

          <Link
            href="#"
            className="hidden md:block text-white text-md tracking-widest font-sans hover:text-gold-400 transition-colors text-center"
          >
            <span className="nav-underline">ABOUT US</span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
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
        className={`fixed top-0 left-0 h-full w-full bg-[#00221A] text-white z-[999] transform transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header with logo + close */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">

             <button onClick={() => setMobileOpen(false)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> 
          <div className=" px-10">
                <Image
            src="/Mainlogo.png"
            alt="logo"
            width={120}
            height={40}
            className="h-auto "
          /></div>    
      
     
        </div>

        {/* ONLY your 4 header links */}
        <nav className="flex flex-col gap-6 p-6 text-lg tracking-wide font-sans">
          <Link href="#" onClick={() => setMobileOpen(false)}>
            LODGING
          </Link>
          <Link href="#" onClick={() => setMobileOpen(false)}>
            EVENT SPACES
          </Link>
          <Link href="#" onClick={() => setMobileOpen(false)}>
            DINING
          </Link>
          <Link href="#" onClick={() => setMobileOpen(false)}>
            ABOUT US
          </Link>
        </nav>
      </div>

      {/* BACKDROP (dark overlay) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
