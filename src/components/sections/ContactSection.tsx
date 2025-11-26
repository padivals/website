"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

const ContactSection = () => {
    return (
        <section className="bg-[#F9F5EC] py-20 border-t border-gray-200">
            <div className="container mx-auto px-6">
                {/* Top Divider Line */}
                <div className="w-full h-px bg-[#A3B19C] mb-12 opacity-50"></div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Side - Info & Map */}
                    <div className="lg:w-1/3">
                        <SectionHeader
                            label="CONTACT US"
                            heading="Get in Touch With The Padival Grand Hotel"
                            className="mb-8"
                        />
                        <a
                            href="#"
                            className="text-[#4A6741] underline underline-offset-4 hover:text-[#143a2f] font-medium mb-8 inline-block"
                        >
                            View on Google Maps
                        </a>

                        {/* Map Placeholder */}
                        <div className="w-full aspect-square bg-gray-200 relative overflow-hidden rounded-sm">
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                <span className="text-gray-400 text-sm">Map Placeholder</span>
                            </div>
                            {/* Custom Marker */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#1B4D3E] rounded-full flex items-center justify-center shadow-lg z-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 text-[#D4AF37]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-2/3">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <Input label="Name" placeholder="Your Full Name" />

                            {/* Number of Guests */}
                            <Select
                                label="Number of Guests"
                                options={[
                                    "01 Adult, 0 Children",
                                    "02 Adults, 0 Children",
                                    "02 Adults, 1 Child",
                                ]}
                            />

                            {/* Phone */}
                            <div className="flex flex-col">
                                <label className="text-[#4A6741] text-xs font-bold uppercase tracking-wider mb-2">
                                    Phone
                                </label>
                                <div className="flex">
                                    <div className="w-20 border border-[#A3B19C] border-r-0 p-4 flex items-center justify-center text-[#0F2A1D] bg-transparent">
                                        +91
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="Your Phone Number"
                                        className="flex-1 bg-transparent border border-[#A3B19C] p-4 text-[#0F2A1D] placeholder-gray-500 focus:outline-none focus:border-[#1B4D3E]"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <Input label="Email" type="email" placeholder="Your Email ID" />

                            {/* Reservation Type */}
                            <Select
                                label="Reservation Type"
                                options={[
                                    "Room Booking",
                                    "Event Hosting",
                                    "Dining Reservation",
                                ]}
                            />

                            {/* Preferred Dates */}
                            <div className="flex flex-col">
                                <label className="text-[#4A6741] text-xs font-bold uppercase tracking-wider mb-2">
                                    Preferred Dates
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="24 / 11 / 25"
                                        className="w-1/2 bg-transparent border border-[#A3B19C] p-4 text-[#0F2A1D] placeholder-gray-500 text-center focus:outline-none focus:border-[#1B4D3E]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="30 / 11 / 25"
                                        className="w-1/2 bg-transparent border border-[#A3B19C] p-4 text-[#0F2A1D] placeholder-gray-500 text-center focus:outline-none focus:border-[#1B4D3E]"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col md:col-span-2">
                                <label className="text-[#4A6741] text-xs font-bold uppercase tracking-wider mb-2">
                                    Description (Optional)
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Please mention any special requests or preferences our team ought to notified of"
                                    className="bg-transparent border border-[#A3B19C] p-4 text-[#0F2A1D] placeholder-gray-500 focus:outline-none focus:border-[#1B4D3E] resize-none"
                                ></textarea>
                                <div className="text-right text-xs text-[#4A6741] mt-1">
                                    0/125
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 border-2 border-[#1B4D3E] rounded-sm text-[#1B4D3E] focus:ring-0"
                                    />
                                    <span className="text-gray-600 text-sm font-light">
                                        I give my consent to be contacted via Call, SMS, Email, or
                                        WhatsApp
                                    </span>
                                </label>
                                <Button type="submit" className="w-full md:w-auto px-10">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
