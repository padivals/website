
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { title } from 'process';

const TABS_CONTENT = [
    {
        title: "Comfortable Hotel Rooms in Puttur for Every Stay ",
        description: "Our rooms are designed for comfort, functionality, and consistency in everything you need for a smooth stay in Puttur. Whether you're visiting for a short trip, business travel, or a temple visit, each room offers clean interiors, effective air conditioning, high-speed Wi-Fi, and essential amenities that work without hassle. With a location near Puttur Main Road, getting in and out is easy, making your stay practical from check-in to checkout. ",
        image: "/bestHotelImg/11.webp"
    },
    // {
    //     title: "Pure Veg Restaurant in Puttur for Everyday Dining ",
    //     description: "At Padival’s Palara, we serve pure vegetarian food that is simple, fresh, and consistent. Our menu focuses on familiar, satisfying meals that work for families, travellers, and daily dining. Whether it’s breakfast, lunch, or dinner, the experience is built around clean preparation, reliable taste, and a comfortable space where you can enjoy your meal without overcomplication. ",
    //     image: "/bestHotelImg/2.webp"
    // },
    {
        title:"Explore Puttur Beyond Your Stay",
        description: "At The Padival Grand, you’re surrounded by places that reflect the culture, nature, and everyday charm of Puttur. From historic temples and peaceful parks to scenic hill views and natural springs, each attraction offers a different side of the region. Whether you’re travelling with family, visiting for a short getaway, or simply exploring at your own pace, these nearby destinations make your stay more connected, relaxed, and memorable.",
        image: "/bestHotelImg/2.webp"   
    },
    {
        title: "Event Spaces for Family Functions & Gatherings ",
        description: "From small gatherings to family celebrations, our event spaces are designed to keep things simple and well-organised. The setup is clean, flexible, and easy to manage, allowing different types of occasions to run smoothly without unnecessary coordination issues. Whether you're planning a small function or a private event, everything is handled with clarity so you can focus on the moment, not logistics. ",
        image: "/bestHotelImg/4.webp"
    },
    {
        title: "Hotel Amenities Designed for a Comfortable Stay",
        description: "The Padival Grand focuses on essentials that make your stay reliable and stress-free. Guests have access to high-speed Wi-Fi, air-conditioned rooms, elevator access, ample parking, power backup, and daily housekeeping. Every feature is maintained with consistency to ensure a comfortable environment for both short and extended stays. ",
        image: "/bestHotelImg/3.webp"
    }
];

const BestHotelSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
<>
<div className="">
 {/* <div className="w-full h-[2px] bg-[#165F41]   mb-8 lg:mb-0"></div> */}

</div>
  <section className="bg-[white] py-16 md:py-24 lg:py-32 overflow-hidden">

            
            <div className=" mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-16 lg:space-y-24">
                        {/* Heading */}
                        <h2 className="text-4xl md:text-[44px] font-serif text-[#012219] leading-[1.2] font-semibold max-w-2xl">
                            Why Guests Choose <br className="hidden md:block" /> The Padival Grand 
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
                                    <span className={`text-xl md:text-2xl font-serif leading-tight transition-all duration-300 ${activeTab === index
                                            ? "text-[#012219] opacity-100"
                                            : "text-[#012219] opacity-70 hover:opacity-100"
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
</>
      
    );
};


export default BestHotelSection;
