"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#052216] text-white pt-20 pb-10 px-6">
            <div className="container mx-auto">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Logo & Description */}
                    <div className="flex flex-col">
                        <div className="flex flex-col items-start mb-6">
                            {/* Logo Placeholder - Text based for now matching screenshot style */}
                            <div className="flex flex-col items-center md:items-start">
                                <div className="w-12 h-8 border-t-2 border-l-2 border-[#D4AF37] rotate-45 mb-2"></div>
                                <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-white mb-1">
                                    THE PADIVAL GRAND
                                </h2>
                                <div className="flex items-center w-full">
                                    <div className="h-px bg-white/30 flex-1"></div>
                                    <span className="px-4 text-sm tracking-[0.3em] font-light">
                                        HOTEL
                                    </span>
                                    <div className="h-px bg-white/30 flex-1"></div>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed font-light max-w-sm">
                            The Padival Grand Hotel offers warm, reliable and refined
                            hospitality, creating meaningful spaces for celebrations, stays
                            and memorable moments.
                        </p>
                    </div>

                    {/* Get In Touch */}
                    <div className="flex flex-col">
                        <h4 className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider mb-6">
                            Get In Touch
                        </h4>
                        <div className="flex flex-col space-y-4 text-gray-300 font-light text-sm">
                            <p>
                                Call:{" "}
                                <a href="tel:9686804784" className="underline hover:text-white">
                                    96868 04784
                                </a>
                            </p>
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:info@padival-grand-hotel.com"
                                    className="underline hover:text-white"
                                >
                                    info@padival-grand-hotel.com
                                </a>
                            </p>
                            <a href="#" className="underline hover:text-white">
                                WhatsApp
                            </a>
                            <a href="#" className="underline hover:text-white">
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col">
                        <h4 className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider mb-6">
                            Address
                        </h4>
                        <div className="flex flex-col space-y-4 text-gray-300 font-light text-sm">
                            <p className="leading-relaxed">
                                Mahaveer Mall, Main Road,
                                <br />
                                Above Reliance Trendz, Bolwar, Puttur,
                                <br />
                                Karnataka 574201
                            </p>
                            <a href="#" className="underline hover:text-white mt-2">
                                View on Google Maps
                            </a>
                        </div>
                    </div>
                </div>

                {/* Middle Divider */}
                <div className="w-full h-px bg-white/10 mb-10"></div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-between md:justify-center gap-8 md:gap-16 mb-10 text-gray-300 text-sm font-light">
                    <a href="#" className="hover:text-white transition-colors">
                        Bookings
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Dining
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Events
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Leisure
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Contact Us
                    </a>
                </div>

                {/* Bottom Divider */}
                <div className="w-full h-px bg-white/10 mb-8"></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light gap-4">
                    <p>A Company of Mahaveer Ventures</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-400">
                            Privacy Policy
                        </a>
                        <span>|</span>
                        <a href="#" className="hover:text-gray-400">
                            Terms of Service
                        </a>
                    </div>
                    <p>All Rights Reserved. The Grand Padival Hotel 2025</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
