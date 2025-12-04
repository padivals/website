"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { useState } from "react";
import { StyledMap } from "../ui/StyledMap";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";


const ContactSection = () => {
  const [description, setDescription] = useState("");
  const [preferredFrom, setPreferredFrom] = useState("");
  const [preferredTo, setPreferredTo] = useState("");
  const [phone, setPhone] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [openGuests, setOpenGuests] = useState(false);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const close = () => setOpenGuests(false);
    if (openGuests) {
      window.addEventListener("click", close);
    }
    return () => window.removeEventListener("click", close);
  }, [openGuests]);

  const formatDateDigits = (digits: string) => {
    // Keep numbers only and limit to 8 digits (DDMMYYYY)
    const nums = digits.replace(/\D/g, "").slice(0, 8);
    const parts = [];
    if (nums.length >= 2) {
      parts.push(nums.slice(0, 2));
      if (nums.length >= 4) {
        parts.push(nums.slice(2, 4));
        if (nums.length > 4) parts.push(nums.slice(4));
      } else if (nums.length > 2) {
        parts.push(nums.slice(2));
      }
    } else if (nums.length > 0) {
      parts.push(nums);
    }

    // Join with separators
    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0];
    if (parts.length === 2) return `${parts[0]} / ${parts[1]}`;
    return `${parts[0]} / ${parts[1]} / ${parts[2]}`;
  };

  const handlePreferredFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferredFrom(formatDateDigits(e.target.value));
  };

  const handlePreferredToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferredTo(formatDateDigits(e.target.value));
  };

  return (
    <section className="bg-[#F9F5EC] md:py-20 md:pb-32 py-0 border-t border-gray-200">
      <div className="container mx-auto md:px-16 px-6 
      ">
        {/* Top Divider Line */}
        <div className="w-full h-px bg-[#165F41] mb-12 opacity-50  "></div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Side - Info & Map */}
          {/* Left Side - Info & Map */}
          <div className="lg:w-2/5">
            <div className="">
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
            <div className="w-full h-88 relative overflow-hidden  ">
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
              <div className="flex flex-col relative">
                <label className="text-[#165F41] text-lg font-medium uppercase tracking-wider mb-2">
                  Number of Guests
                </label>
                <div
                  className="w-full bg-transparent border border-[#165F41] p-4 text-[#165F41B2] cursor-pointer flex justify-between items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenGuests(!openGuests);
                  }}
                >
                  <span>
                    {adults < 10 ? `0${adults}` : adults} Adult{adults !== 1 ? "s" : ""}, {children < 10 ? `0${children}` : children} Child{children !== 1 ? "ren" : ""}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-4 h-4 text-gray-500 transition-transform ${openGuests ? "rotate-180" : ""}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                {/* Dropdown */}
                {openGuests && (
                  <div
                    className="absolute top-full left-0 w-full bg-[#F9F5EC] border border-[#165F41] border-t-0 z-10 p-6 flex flex-col gap-6 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Adults Row */}
                    <div className="flex justify-between items-center">
                      <span className="text-[#165F41] font-medium text-lg">Adults</span>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-8 h-8  text-[#165F41] flex items-center justify-center hover:bg-[#165F41] hover:text-white transition-colors text-xl pb-1"
                        >
                          -
                        </button>
                        <span className="text-[#165F41] w-6 text-center text-lg font-medium">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-8 h-8 text-[#165F41] flex items-center justify-center hover:bg-[#165F41] hover:text-white transition-colors text-xl pb-1"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Children Row */}
                    <div className="flex justify-between items-center">
                      <span className="text-[#165F41] font-medium text-lg">Children</span>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-8 h-8 text-[#165F41] flex items-center justify-center hover:bg-[#165F41] hover:text-white transition-colors text-xl pb-1"
                        >
                          -
                        </button>
                        <span className="text-[#165F41] w-6 text-center text-lg font-medium">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-8 h-8 text-[#165F41] flex items-center justify-center hover:bg-[#165F41] hover:text-white transition-colors text-xl pb-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* phone */}
              <div className="flex flex-col">
                <label className="text-[#165F41] text-lg font-medium uppercase tracking-wider mb-2">
                  Phone
                </label>
                <PhoneInput
                  defaultCountry="in"
                  value={phone}
                  onChange={setPhone}
                  className="w-full"
                  inputClassName="w-full placeholder:text-[#165F41B2] placeholder:text-lg"
                  inputStyle={{
                    width: "100%",
                    background: "transparent",
                    border: "1px solid #165F41",

                    borderRadius: "0px",            // no rounded corners
                    padding: "28px",
                    fontSize: "16px",
                    color: "#165F41B2",
                  }}
                  countrySelectorStyleProps={{
                    buttonStyle: {
                      background: "transparent",
                      border: "1px solid #165F41",
                      borderRight: "0px",
                      borderRadius: "0px",          // no rounded corners
                      padding: "28px",
                      width: "80px",
                      color: "#165F41",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    dropdownStyleProps: {
                      style: {
                        maxHeight: "220px",         // enables scroll
                        overflowY: "auto",          // scrollable dropdown
                        borderRadius: "0px",
                        border: "1px solid #165F41",
                        background: "white",
                        zIndex: 9999,
                        overscrollBehavior: "contain",
                      },
                    },
                  }}
                />
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
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="25  /  11  /  2025 "
                    value={preferredFrom}
                    onChange={handlePreferredFromChange}
                    className="w-1/2 bg-transparent border border-[#165F41] p-4 placeholder:text-[#165F41B2] text-[#165F41B2] text-center focus:outline-none focus:border-[#1B4D3E]"
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="30  /  11  /  2025"
                    value={preferredTo}
                    onChange={handlePreferredToChange}
                    className="w-1/2 bg-transparent border border-[#165F41] p-4  placeholder:text-[#165F41B2] text-[#165F41B2] text-center focus:outline-none focus:border-[#1B4D3E]"
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
                    className="w-5 h-5 border-2 border-[#1B4D3E] rounded-sm accent-[#1B4D3E] focus:ring-0"
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
