import React from "react";

const features = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
        ),
        title: "Consistent Quality Across Every Stay",
        description: "A steady standard of care shaped by the dependable service culture of Mahaveer Ventures."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3.25h3m-3-3.75h3m-12 13.5h15" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12a3 3 0 013 3v0a3 3 0 01-3 3H6a3 3 0 01-3-3v0a3 3 0 013-3z" />
            </svg>
        ), // Bed icon placeholder (using a generic shape or similar)
        title: "Spaces Prepared With Intention",
        description: "Rooms and venues maintained with the same attention and order followed across the group."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ), // Cloche icon placeholder
        title: "Warm and Familiar Hospitality",
        description: "A guest experience guided by the group's rooted values and its focus on comfort."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ), // Handshake/Heart placeholder
        title: "Reliable Support at Every Step",
        description: "Helpful assistance that reflects the group's commitment to smooth and reassuring service."
    }
];

const WhatToExpectSection = () => {
    return (
        <section className="bg-[#F9F5EC] py-20">
            <div className="container mx-auto px-6">
                {/* Top Divider Line */}
                <div className="w-full h-px bg-[#A3B19C] mb-12 opacity-50"></div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Label */}
                    <div className="lg:w-1/4">
                        <span className="text-[#4A6C58] uppercase tracking-widest text-sm font-medium">
                            WHAT TO EXPECT
                        </span>
                    </div>

                    {/* Right Content */}
                    <div className="lg:w-3/4">
                        <p className="text-[#4A5568] text-lg font-light leading-relaxed mb-16 max-w-3xl">
                            You can expect calm, well-kept spaces and steady support throughout your visit, all shaped by the dependable hospitality Mahaveer Ventures is known for.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-start">
                                    <div className="text-[#1B4D3E] mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-serif text-[#0F2A1D] mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#4A5568] font-light leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatToExpectSection;
