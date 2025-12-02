import React from "react";
import { StyledMap } from "../ui/StyledMap";

export default function HowToGetHereSection() {
    return (
        <section className="bg-[#F9F5EC] py-20">
            <div className="container mx-auto px-6 md:px-16">
                <div className="flex flex-col gap-12 h-[45vh] lg:flex-row-reverse">
                    {/* Right Content (Text) */}
                    <div className="lg:w-7/12">
                        {/* Divider for this section */}
                        <div className="w-full h-0.5 bg-[#165F41] top-0 mb-8"></div>

                        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#0F2A1D] mb-2">
                            How to Get Here
                        </h2>
                        <p className="text-[#4A5568] text-lg font-medium leading-relaxed mb-6 max-w-[80%]">
                            The Padival Grand Hotel sits close to Puttur&apos;s central routes, only a few minutes from the main market and local transport points.
                        </p>

                        <div className="grid grid-cols-[100px_1fr] gap-y-8 gap-x-4">
                            <span className="text-[#4A6C58] text-md font-bold uppercase tracking-wider pt-1">
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
                    <div className="lg:w-5/12 w-full ">
                                   
                                  
                                     <StyledMap />
                                 
                    </div>
                </div>
            </div>
        </section>
    );
}
