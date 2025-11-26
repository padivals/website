"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";

const HospitalitySection = () => {
    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <SectionHeader
                    heading="A Glimpse Into Our Hospitality"
                    align="center"
                    className="mb-8"
                />
                <p className="max-w-4xl mx-auto text-[#0F2A1D] text-lg md:text-xl font-light leading-relaxed">
                    The Padival Grand Hotel is a welcoming space where thoughtful service,
                    reliable comfort and local warmth come together. From restful stays to
                    memorable celebrations, we offer well-designed spaces and attentive
                    hospitality that make every moment feel easy, meaningful and
                    beautifully supported.
                </p>
            </div>
        </section>
    );
};

export default HospitalitySection;
