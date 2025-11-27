import React from "react";

const icons = {
    wifi: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
    ),
    ac: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h20" />
            <path d="M2 16h20" />
            <path d="M2 8h20" />
            <path d="M4 20h16" />
            <path d="M4 4h16" />
        </svg>
    ),
    elevator: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <path d="M12 12h.01" />
            <path d="M12 6v.01" />
            <path d="M12 18v.01" />
        </svg>
    ),
    parking: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M9 14v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
            <path d="M9 14h6" />
        </svg>
    ),
    power: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
            <line x1="12" y1="2" x2="12" y2="12" />
        </svg>
    ),
    housekeeping: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
            <path d="M5 21a2 2 0 0 1 0-4h14a2 2 0 0 1 0 4" />
        </svg>
    ),
    water: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.74 5.74a8 8 0 1 1-11.48 0l5.74-5.74z" />
        </svg>
    ),
    toiletries: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18" />
            <path d="M3 10h18" />
            <path d="M12 3v18" />
        </svg>
    ),
    cctv: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
            <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path d="M12 14v8" />
            <path d="M8 22h8" />
        </svg>
    ),
    fire: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M12 2v4" />
            <path d="M12 12v8" />
            <path d="M5 6h14a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1z" />
        </svg>
    ),
    lounge: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 9l-7 7-7-7" />
        </svg>
    ),
    reception: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 3v18" />
        </svg>
    ),
    balcony: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" />
            <path d="M5 21V7l8-4 8 4v14" />
            <path d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
    ),
};

const amenities = [
    {
        category: "Basic Facilities",
        items: [
            { icon: "wifi", text: "High speed Wi-Fi offers steady internet access" },
            { icon: "ac", text: "Air Conditioning keeps rooms comfortable" },
            { icon: "elevator", text: "Elevator access allows easy movement" },
            { icon: "parking", text: "Guarded & ample parking provides safe vehicle space" },
            { icon: "power", text: "Power Backup ensures uninterrupted supply" },
            { icon: "housekeeping", text: "Daily Housekeeping keeps rooms clean" },
        ],
    },
    {
        category: "Room Amenities",
        items: [
            { icon: "water", text: "Mineral Water provides clean hydration" },
            { icon: "toiletries", text: "Essential Toiletries support daily needs" },
        ],
    },
    {
        category: "Safety and Security",
        items: [
            { icon: "cctv", text: "CCTV Surveillance monitors the property" },
            { icon: "fire", text: "Fire Extinguishers support emergency safety" },
        ],
    },
    {
        category: "Common Areas",
        items: [
            { icon: "lounge", text: "The Lounge welcomes you with relaxed seating" },
            { icon: "reception", text: "The Reception welcomes and assists guests" },
            { icon: "balcony", text: "The Rooftop Balcony offers open air" },
        ],
    },
];

const CommonAmenities = () => {
    return (
        <section className="bg-[#F9F5EC] py-20 border-t border-[#A3B19C]/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Title */}
                    <div className="lg:w-1/4">
                        <span className="block text-[#4A6741] font-sans tracking-widest uppercase text-sm font-semibold">
                            COMMON AMENITIES
                        </span>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-3/4">
                        <p className="text-[#0F2A1D] text-lg font-light leading-relaxed max-w-3xl mb-12">
                            At The Padival Grand, each amenity is thoughtfully maintained to make your stay comfortable, calm and dependable. Every facility is designed to support a smooth experience, whether you are here for a short visit or a longer stay.
                        </p>

                        <div className="space-y-12">
                            {amenities.map((category, index) => (
                                <div key={index}>
                                    <h3 className="text-xl font-serif text-[#0F2A1D] mb-6">
                                        {category.category}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                                        {category.items.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className="text-[#4A6741] mt-1">
                                                    {icons[item.icon as keyof typeof icons]}
                                                </div>
                                                <span className="text-gray-600 text-sm font-light leading-relaxed">
                                                    {item.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommonAmenities;
