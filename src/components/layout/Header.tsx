import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-50 p-6">
            <div className="container mx-auto grid grid-cols-5 items-center gap-8">
                {/* Left Navigation */}
                <Link href="#" className="hidden md:block text-white text-sm tracking-widest font-sans hover:text-gold-400 transition-colors text-center">
                    LODGING
                </Link>

                <Link href="#" className="hidden md:block text-white text-sm tracking-widest font-sans hover:text-gold-400 transition-colors text-center">
                    EVENT SPACES
                </Link>

                {/* Center Logo */}
                <div className="col-span-5 md:col-span-1 text-center">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="The Padival Grand Hotel"
                            width={250}
                            height={67}
                            className="w-48 md:w-64 h-auto mx-auto"
                            priority
                        />
                    </Link>
                </div>

                {/* Right Navigation */}
                <Link href="#" className="hidden md:block text-white text-sm tracking-widest font-sans hover:text-gold-400 transition-colors text-center">
                    DINING
                </Link>

                <Link href="#" className="hidden md:block text-white text-sm tracking-widest font-sans hover:text-gold-400 transition-colors text-center">
                    ABOUT US
                </Link>

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
