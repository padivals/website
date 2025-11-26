"use client";

import React, { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What types of reservations can I make at The Padival Grand Hotel?",
            answer:
                "You can book rooms, event halls and restaurant tables, each supported by attentive service and well-prepared spaces.",
        },
        {
            question: "How early should I book an event or celebration?",
            answer:
                "We recommend booking at least 2-4 weeks in advance for small events and 3-6 months for weddings or large celebrations to ensure availability.",
        },
        {
            question: "Do you offer on-site parking for guests?",
            answer:
                "Yes, we have ample on-site parking available for all our guests, including valet services for events.",
        },
        {
            question: "Can I request special arrangements for my stay or event?",
            answer:
                "Absolutely! We pride ourselves on personalized service. Please contact our concierge or event planning team to discuss your specific needs.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                {/* Top Divider Line */}
                <div className="w-full h-px bg-[#A3B19C] mb-12 opacity-50"></div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Side - Static Content */}
                    <div className="lg:w-1/3">
                        <SectionHeader
                            label="FREQUENTLY ASKED QUESTIONS"
                            heading="Helpful Information for Your Visit"
                        />
                    </div>

                    {/* Right Side - Accordion */}
                    <div className="lg:w-2/3">
                        <div className="flex flex-col">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-[#A3B19C]/30 last:border-b-0"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full py-6 flex items-center justify-between text-left group"
                                    >
                                        <span className="text-[#0F2A1D] font-medium text-lg pr-8">
                                            {faq.question}
                                        </span>
                                        <span className="text-[#D4AF37] text-2xl font-light transition-transform duration-300">
                                            {openIndex === index ? "−" : "+"}
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                                            ? "max-h-40 opacity-100 mb-6"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-gray-600 font-light leading-relaxed">
                                            {faq.answer}
                                        </p>
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

export default FAQSection;
