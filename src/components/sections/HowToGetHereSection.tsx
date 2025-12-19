import React from "react";
import { StyledMap } from "../ui/StyledMap";

export default function HowToGetHereSection() {
    return (
        <section className="bg-[#F9F5EC] py-20">
            <div className="container mx-auto px-6 md:px-16">
               <div className="flex flex-col gap-12 min-h-[45vh] lg:h-[45vh] lg:flex-row-reverse">
                    {/* Right Content (Text) */}
                    <div className="lg:w-full">
                        {/* Divider for this section */}
                        <div className="w-full h-0.5 bg-[#165F41] top-0 mb-8"></div>

                        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#0F2A1D] mb-2">
                            How to Get Here
                        </h2>
                       <p className="text-[#4A5568] text-base sm:text-lg font-medium leading-relaxed mb-6 max-w-full lg:max-w-[80%]">
                            The Padival Grand Hotel sits close to Puttur&apos;s central routes, only a few minutes from the main market and local transport points.
                        </p>

                      <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-y-6 sm:gap-y-8 gap-x-4">
                            <span className="text-[#4A6C58] text-md font-bold uppercase tracking-wider pt-1">
                                ADDRESS
                            </span>
                            <div className="flex flex-col items-start">
                                <p className="text-[#0F2A1D] text-base sm:text-lg font-light leading-relaxed mb-4 max-w-full lg:max-w-[80%]">
                                    Mahaveer Mall, Main Road, Above Reliance Trendz, Bolwar, Puttur, Karnataka 574201
                                </p>
                                <a target="_blank" href="https://maps.app.goo.gl/t6pdJoL1R8tTRo8f9" className="text-[#4A6C58] text-sm underline underline-offset-4 font-medium hover:text-[#1B4D3E]">
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Left Map */}
                 <div className="w-full h-[300px] sm:h-[360px] lg:h-full overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.193579366762!2d75.19388537587785!3d12.765937219352285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4bd11b23b38bf%3A0x29973ec88814e99b!2sMahaveer%20Ventures%20Hotel%20and%20Resort%20-%20The%20Padival%20Grand!5e0!3m2!1sen!2sin!4v1766124232524!5m2!1sen!2sin"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
                </div>
            </div>
        </section >
    );
}
