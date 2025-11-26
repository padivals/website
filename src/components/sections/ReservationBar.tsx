"use client";

import React from "react";
import Button from "../ui/Button";

const ReservationBar = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#E1B365] text-white z-50 py-4 px-6 md:px-12 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 transform translate-y-0">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Left: Heading */}
                <div className="text-center lg:text-left">
                    <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
                        Make Your Reservation
                    </h2>
                </div>

                {/* Center: Inputs */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full md:w-auto">
                    {/* Date Picker */}
                    <div className="flex items-center gap-4 border-b border-white pb-2 cursor-pointer min-w-[280px] justify-center">
                        <span className="font-sans text-lg font-medium tracking-wide">
                            24 / 11 / 25
                        </span>
                        <span className="text-white/80">-</span>
                        <span className="font-sans text-lg font-medium tracking-wide">
                            30 / 11 / 25
                        </span>
                    </div>

                    {/* Guests Picker */}
                    <div className="flex items-center justify-between gap-4 border-b border-white pb-2 cursor-pointer min-w-[200px]">
                        <span className="font-sans text-lg font-medium tracking-wide">
                            1 Adult, 0 Children
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                </div>

                {/* Right: Button */}
                <Button
                    variant="primary"
                    className="bg-white text-[#E1B365] hover:bg-gray-50 hover:text-[#C59B50] px-10 py-4 text-base shadow-md w-full md:w-auto"
                >
                    Book Now
                </Button>
            </div>
        </div>
    );
};

export default ReservationBar;
