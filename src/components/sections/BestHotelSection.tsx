
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const TABS_CONTENT = [
    {
        title: "A Glimpse into Our Hospitality",
        description: "Most hotel searches start with “just need a place to stay,” but expectations drop fast. At The Padival Grand, we changed that. As one of the best hotels in Puttur Karnataka, we offer thoughtfully designed hotel rooms, warm service, and a calm environment that feels like an upgrade, not a compromise. Located near Padil and well-connected to Puttur Main Road, we ensure every stay in Puttur is smooth, comfortable, and genuinely welcoming for families and travelers.",
        image: "/hospitalityImg/img1.png"
    },
    {
        title: "Hotel in Puttur Karnataka That Gets What Travelers Need",
        description: "Whether you're visiting a temple trip, work, or family travel, your needs are simple - comfort, convenience, and easy access. The Padival Grand delivers exactly that. Located on Puttur Main Road near Padil, our hotel offers seamless connectivity, peaceful surroundings, and reliable service. Among hotels in Puttur Karnataka, we focus on making your stay hassle-free, with everything designed to work smoothly from check-in to checkout.",
        image: "/hospitalityImg/puttur.jpg"
    },
    {
        title: "Hotel Rooms Designed for Comfort & Value",
        description: "Our hotel rooms in Puttur are built to meet real expectations. From effective AC and high-speed WiFi to clean interiors and daily housekeeping, every detail is handled with consistency. As one of the best hotels in Puttur Karnataka, we ensure each room feels fresh, secure, and easy to settle into. Whether it’s a short visit or a longer stay in Puttur, you get comfort and value without compromise.",
        image: "/roomsImg/executive.png"
    },
    {
        title: "Stay in Puttur Without the Usual Hassles",
        description: "Travel can be unpredictable, but your stay shouldn’t be. At The Padival Grand, we simplify everything - from easy parking to quick check-ins - so you can focus on your trip. Located in a prime area near Padial and Puttur Main Road, you stay connected to key routes and attractions. Whether it’s a short stay in Puttur or an extended visit, we ensure a smooth, stress-free experience every time.",
        image: "/hospitalityImg/padivalMainImg.webp"
    },
    {
        title: "A Welcoming Space for Stays, Dining & Celebrations",
        description: "The Padival Grand is more than just a hotel in Puttur - it’s a space designed for comfort and connection. From overnight stays to family gatherings, we provide well-maintained spaces and pure veg dining in a clean, welcoming environment. As one of the best hotels and lodges in Puttur Karnataka, we focus on reliable service and thoughtful details, ensuring every experience feels easy, structured, and truly comfortable.",
        image: "/roomsImg/foodDining.png"
    }
];

const BestHotelSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-[#F9F2E8] py-16 md:py-24 lg:py-32 overflow-hidden">
            <div className=" mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-16 lg:space-y-24">
                        {/* Heading */}
                        <h2 className="text-4xl md:text-[44px] font-serif text-[#012219] leading-[1.2] font-semibold max-w-2xl">
                            What Makes The Padival Grand a Trusted Hotel in Puttur
                        </h2>

                        {/* Tabs List */}
                        <div className="flex flex-col space-y-8 md:space-y-10">
                            {TABS_CONTENT.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className="relative flex items-center pl-8 text-left group transition-all duration-300 cursor-pointer"
                                >
                                    <motion.div 
                                        className="absolute left-0 w-[2.5px] bg-[#1D8842]"
                                        initial={false}
                                        animate={{ 
                                            height: activeTab === index ? "100%" : "0%",
                                            opacity: activeTab === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className={`text-xl md:text-2xl font-serif leading-tight transition-all duration-300 ${
                                        activeTab === index 
                                        ? "text-[#012219] opacity-100" 
                                        : "text-[#012219] opacity-50 hover:opacity-80"
                                    }`}>
                                        {item.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col space-y-12 lg:space-y-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col space-y-16"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[16/8] w-full overflow-hidden shadow-sm">
                                    <Image 
                                        src={TABS_CONTENT[activeTab].image} 
                                        alt={TABS_CONTENT[activeTab].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Description */}
                                <div className="max-w-2xl text-left">
                                    <p className="text-[#012219] text-[15px] md:text-[16px] leading-relaxed font-sans opacity-90">
                                        {TABS_CONTENT[activeTab].description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default BestHotelSection;
