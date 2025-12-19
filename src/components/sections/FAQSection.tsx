"use client";

import React, { useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";

const FAQSection = () => {
   const heading = "Helpful Information for Your Visit"
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "What types of reservations can I make at The Padival Grand Hotel?",
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
    <section className="bg-white md:py-14 py-12">
      <style>{`
        @media (min-width: 1920px) {
          .xl-faqq-padding {
            padding-left: 10vw !important;
            padding-right: 10vw !important;
          }
        }
      `}</style>
      <div className=" mx-auto container  md:px-16 px-6 xl-faq-padding">
        {/* Top Divider Line */}
        <div className="w-full hidden md:block  h-px bg-[#165F41] mb-4 mt-8 md:mt-0 "></div>

        <div className="flex flex-col lg:flex-row gap-0 lg:gap-24">
          {/* Left Side - Static Content */}
          <div className="lg:w-1/3 lg:pr-8">
            <div className="flex flex-col items-start text-left md:mt-6 mt-0">
               <span className="block text-[#165F41CC] uppercase text-lg md:text-lg font-semibold md:mb-4">
                FREQUENTLY ASKED QUESTIONS
              </span>
              {/* <h2 className="text-3xl md:text-5xl font-serif text-[#012219] leading-tight font-semibold max-w-3xl">
                Helpful Information
                <br />
                for Your Visit
              </h2>  */}

                 <div className="">
        <ScrollReveal
          scrollContainerRef={undefined}
          enableBlur={false}
          baseOpacity={0}
          baseRotation={0}
          rotationEnd="top center"
          wordAnimationEnd="top 40%"
          containerClassName="text-start max-w-lg"
          textClassName="text-4xl md:text-5xl lg2:text-7xl  font-serif leading-tight text-[#0F2A1D] font-semibold " 
          blurStrength={10}
        >
          {heading}

        </ScrollReveal>
      </div>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="lg:w-2/3 lg:pl-8">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-[#165F41] last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <span className="text-[#012219CC] font-bold text-lg pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`text-2xl font-light transition-transform duration-500 shrink-0  ${
                        openIndex === index
                          ? "text-[#EAB361] rotate-180"
                          : "text-[#165F41]"
                      }`}
                    >
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-40 opacity-100 mb-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#012219]/80 font-medium max-w-3xl leading-relaxed pr-8">
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
