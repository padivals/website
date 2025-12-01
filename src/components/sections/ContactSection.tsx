"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { useState } from "react";
import Image from "next/image";
import { StyledMap } from "../ui/StyledMap";

const ContactSection = () => {
  const [description, setDescription] = useState("");

  return (
    <section className="bg-[#F9F5EC] py-20 border-t border-gray-200">
      <div className="container mx-auto px-6">
        {/* Top Divider Line */}
        <div className="w-full h-px bg-[#165F41] mb-12 opacity-50 lg:-ml-16 lg:w-[calc(100%+4rem)]"></div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Side - Info & Map */}
          {/* Left Side - Info & Map */}
          <div className="lg:w-2/5">
            <div className="lg:-ml-16">
              <SectionHeader
                label="CONTACT US"
                heading="Get in Touch With The Padival Grand Hotel"
                className="mb-8"
              />
              <a
                href="#"
                className="text-[#165F41B2] underline underline-offset-4 hover:text-[#143a2f] font-medium mb-4 inline-block pb-5"
              >
                View on Google Maps
              </a>
            </div>

            {/* Map Container */}
            <div className="w-full aspect-square relative overflow-hidden lg:-ml-16 lg:w-[calc(100%+4rem)]">
              {/* The StyledMap now handles everything (Styles + Marker) */}
              <StyledMap />
            </div>

            {/* DELETED THE EXTRA FLOATING IMAGES FROM HERE */}
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <Input
                label="Name"
                placeholder="Your Full Name"
                className="placeholder:text-[#165F41B2] placeholder:text-lg text-[#165F41B2]"
              />

              {/* Number of Guests */}
              <Select
                label="Number of Guests"
                options={[
                  "01 Adult, 0 Children",
                  "02 Adults, 0 Children",
                  "02 Adults, 1 Child",
                ]}
              />

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-[#165F41] text-lg font-medium uppercase tracking-wider mb-2">
                  Phone
                </label>
                <div className="flex">
                  <div className="w-20 border border-[#165F41] border-r-0 p-4 flex items-center justify-center text-[#165F41B2] bg-transparent">
                    +91
                  </div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="flex-1 bg-transparent border border-[#165F41] p-4 text-[#165F41B2] placeholder:text-[#165F41B2] placeholder:text-lg"
                  />
                </div>
              </div>

              {/* Email */}
              <Input
                label="Email"
                type="email"
                placeholder="Your Email ID"
                className="text-[#165F41B2]"
              />

              {/* Reservation Type */}
              <Select
                label="Reservation Type"
                options={[
                  "Room Booking",
                  "Event Hosting",
                  "Dining Reservation",
                ]}
              />

              {/* Preferred Dates */}
              <div className="flex flex-col">
                <label className="text-[#165F41] text-lg font-medium uppercase tracking-wider mb-2">
                  Preferred Dates
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="24 / 11 / 25"
                    className="w-1/2 bg-transparent border border-[#165F41] p-4 placeholder:text-[#165F41B2] text-center focus:outline-none focus:border-[#1B4D3E]"
                  />
                  <input
                    type="text"
                    placeholder="30 / 11 / 25"
                    className="w-1/2 bg-transparent border border-[#165F41] p-4  placeholder:text-[#165F41B2] text-center focus:outline-none focus:border-[#1B4D3E]"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col md:col-span-2">
                <label className="text-[#165F41] text-lg font-medium uppercase tracking-wider mb-2 flex items-end gap-1">
                  Description
                  <span className="text-[11px] text-[#165F41]/70 normal-case align-bottom ">
                    (Optional)
                  </span>
                </label>
                <div className="relative w-full">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    placeholder="Please mention any special requests or preferences our team ought to notified of"
                    className="w-full bg-transparent text-[#165F41B2] border border-[#165F41] p-4 placeholder:text-[#165F41B2] placeholder:text-lg focus:outline-none focus:border-[#1B4D3E] resize-none"
                  ></textarea>
                  <span className="absolute top-2 right-3 text-[10px] text-[#165F41]">
                    {description.length}/125
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-[#1B4D3E] rounded-sm text-[#1B4D3E] focus:ring-0"
                  />
                  <span className="text-[#165F41] text-sm font-light">
                    I give my consent to be contacted via Call, SMS, Email, or
                    WhatsApp
                  </span>
                </label>
                <Button
                  type="submit"
                  className="w-full md:w-auto px-[31px] py-[18px]"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
