import React from "react";

export default function HowToGetHereSection() {
    return (
        <section className="bg-[#F9F5EC] py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-12 lg:flex-row-reverse">
                    {/* Right Content (Text) */}
                    <div className="lg:w-7/12">
                        {/* Divider for this section */}
                        <div className="w-full h-0.5 bg-[#165F41] top-0 mb-8"></div>

                        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#0F2A1D] mb-2">
                            How to Get Here
                        </h2>
                        <p className="text-[#4A5568] text-lg font-medium leading-relaxed mb-6 max-w-[80%]">
                            The Padival Grand Hotel sits close to Puttur's central routes, only a few minutes from the main market and local transport points.
                        </p>

                        <div className="grid grid-cols-[100px_1fr] gap-y-8 gap-x-4">
                            <span className="text-[#4A6C58] text-xs font-bold uppercase tracking-wider pt-1">
                                ADDRESS
                            </span>
                            <div className="flex flex-col items-start">
                                <p className="text-[#0F2A1D] text-lg font-light leading-relaxed mb-4 max-w-[80%]">
                                    Mahaveer Mall, Main Road, Above Reliance Trendz, Bolwar, Puttur, Karnataka 574201
                                </p>
                                <a href="#" className="text-[#4A6C58] text-sm underline underline-offset-4 font-medium hover:text-[#1B4D3E]">
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Left Map */}
                    <div className="lg:w-5/12 w-full">
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm shadow-sm bg-gray-200">
                            {/* Map Placeholder Image or Iframe */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                                <span className="text-gray-500">Map Placeholder</span>
                            </div>
                            {/* Center Marker Button */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <button className="bg-[#1B4D3E] text-white p-4 rounded-full shadow-lg hover:bg-[#143a2f] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
