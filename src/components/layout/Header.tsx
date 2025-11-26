import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-50 p-6">
            <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
                {/* Left Navigation */}
                <nav className="hidden md:flex space-x-8 text-white text-sm tracking-widest font-sans">
                    <Link href="#" className="hover:text-gold-400 transition-colors">
                        LODGING
                    </Link>
                    <Link href="#" className="hover:text-gold-400 transition-colors">
                        EVENT SPACES
                    </Link>
                </nav>

                {/* Center Logo */}
                <div className="text-center my-4 md:my-0">
                    <div className="flex flex-col items-center">
                        {/* Simple icon representation or image could go here */}
                        <div className="w-8 h-8 border-t-2 border-l-2 border-gold-400 rotate-45 mb-2"></div>
                        <h1 className="text-2xl md:text-3xl text-white font-serif tracking-wider">
                            THE PADIVAL GRAND
                        </h1>
                        <span className="text-gold-400 text-sm tracking-[0.3em] uppercase mt-1">
                            Hotel
                        </span>
                        {/* Decorative wave line */}
                        <div className="w-32 h-2 mt-2 bg-[url('/wave.svg')] bg-repeat-x opacity-80"></div>
                    </div>
                </div>

                {/* Right Navigation */}
                <nav className="hidden md:flex space-x-8 text-white text-sm tracking-widest font-sans">
                    <Link href="#" className="hover:text-gold-400 transition-colors">
                        DINING
                    </Link>
                    <Link href="#" className="hover:text-gold-400 transition-colors">
                        ABOUT US
                    </Link>
                </nav>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-white">
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
    );
};

export default Header;
