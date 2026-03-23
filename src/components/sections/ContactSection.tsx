"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { useState, useEffect, useRef } from "react";
import { StyledMap } from "../ui/StyledMap";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import DateRangePicker from "../ui/DateRangePicker";
import { format } from "date-fns";


const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [description, setDescription] = useState("");
  const [dates, setDates] = useState<Date[]>([]);
  const [openDate, setOpenDate] = useState(false);
  const [isDropdownUp, setIsDropdownUp] = useState(false);
  const dateContainerRef = useRef<HTMLDivElement>(null);
  const [reservationType, setReservationType] = useState("Room Booking");
  const [roomType, setRoomType] = useState("Deluxe Room");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [openGuests, setOpenGuests] = useState(false);
  const [dateError, setDateError] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const close = () => {
      setOpenGuests(false);
      setOpenDate(false);
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const formattedFrom = dates[0] ? format(dates[0], "dd / MM / yyyy ") : " -- / -- / ---- ";
  const formattedTo = dates[1] ? format(dates[1], "dd / MM / yyyy ") : " -- / -- / ---- ";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentChecked) return;

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbxZmYo6_ze8qOUqgMU-tAneDXYamvPkb2uNcuDzvTBU7-CmZiFssQOPKVgICkro-rjCOg/exec";

      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          guests: `${adults} Adult(s), ${children} Child(ren)`,
          reservationType,
          roomType: reservationType === "Room Booking" ? roomType : "N/A",
          preferredFrom: formattedFrom,
          preferredTo: formattedTo,
          description,
          source: "ContactSection",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage({ type: "success", text: "Thank you! Your message has been sent successfully." });
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setDescription("");
        setDates([]);
        setConsentChecked(false);
        window.location.href = "/thank-you";
      } else {
        throw new Error(data.error || "Failed to send message.");
      }
    } catch (error: any) {
      setSubmitMessage({ type: "error", text: error.message || "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className=" md:py-20 md:pb-32 py-0 ">
      {/* <style>{`
        @media (min-width: 2100px) {
          .xl-faq-padding {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style> */}
      <div className="container mx-auto md:px-16 px-6 xl-faq-padding md:py-0 py-0">
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
                className="mb-3"
                containerClassName="text-start max-w-3xl"
              />
              <a
                target="_blank"
                href="https://maps.app.goo.gl/t6pdJoL1R8tTRo8f9"
                className="text-[#165F41B2] underline underline-offset-4 hover:text-[#aa8616] transition-all duration-200 font-medium mb-4 inline-block pb-5"
              >
                View on Google Maps
              </a>
            </div>

            {/* Map Container */}
            <div className="w-full h-92 relative overflow-hidden  ">
              {/* The StyledMap now handles everything (Styles + Marker) */}
              {/* <StyledMap /> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.193579366762!2d75.19388537587785!3d12.765937219352285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4bd11b23b38bf%3A0x29973ec88814e99b!2sMahaveer%20Ventures%20Hotel%20and%20Resort%20-%20The%20Padival%20Grand!5e0!3m2!1sen!2sin!4v1766124232524!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} loading="lazy" ></iframe>
            </div>

            {/* DELETED THE EXTRA FLOATING IMAGES FROM HERE */}
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <Input
                label="Name"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="placeholder:text-[#165F41B2] placeholder:text-lg text-[#165F41] font-medium"
              />

              {/* Number of Guests */}
              <div className="flex flex-col relative">
                <label className="text-[#165F41] text-lg font-medium uppercase tracking-wider mb-2">
                  Number of Guests
                </label>
                <div
                  className="w-full bg-transparent border border-[#165F41] p-4 text-[#165F41] font-medium cursor-pointer flex justify-between items-center"
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
                  inputClassName="w-full placeholder:text-[#165F41B2] placeholder:text-lg text-[#165F41]"
                  inputStyle={{
                    width: "100%",
                    background: "transparent",
                    border: "1px solid #165F41",

                    borderRadius: "0px",            // no rounded corners
                    padding: "28px",
                    fontSize: "16px",
                    color: "#165F41",
                    fontStyle: "medium",

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-[#165F41] font-medium placeholder:text-[#165F41B2]"
              />

              {/* Reservation Type */}
              <div className="flex flex-col gap-6">
                <Select
                  label="Reservation Type"
                  options={["Room Booking", "Event Hosting", "Dining Reservation"]}
                  value={reservationType}
                  onChange={(e) => {
                    const next = e.target.value;
                    setReservationType(next);
                    if (next !== "Room Booking") {
                      setRoomType("Deluxe Room");
                    }
                  }}
                  className="text-[#165F41] font-medium"
                />

                {reservationType === "Room Booking" && (
                  <Select
                    label="Room Type"
                    options={["The Deluxe A/C Room", "The Standard Room", "Premium Room", "The Family Quad Room", "The Triple Bedroom"]}
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="text-[#165F41] font-medium"
                  />
                )}
              </div>

              {/* Preferred Dates */}
              <div ref={dateContainerRef} className="flex flex-col relative">
                <label className="text-[#165F41] text-lg font-medium uppercase tracking-wider mb-2">
                  Preferred Dates
                </label>
                <div
                  className="flex gap-2 bg-transparent border border-[#165F41] p-4 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();

                    // Check if dropdown should open upwards
                    if (dateContainerRef.current) {
                      const rect = dateContainerRef.current.getBoundingClientRect();
                      const spaceBelow = window.innerHeight - rect.bottom;
                      // If less than 400px (approx height of flatpickr) below, open upwards
                      setIsDropdownUp(spaceBelow < 400);
                    }

                    setOpenDate(!openDate);
                    setOpenGuests(false);
                  }}
                >
                  <div className="w-1/2 text-[#165F41B2] text-center focus:outline-none">
                    {formattedFrom}
                  </div>
                  <div className="w-px bg-[#165F41] opacity-50 mx-1"></div>
                  <div className="w-1/2 text-[#165F41B2] text-center focus:outline-none">
                    {formattedTo}
                  </div>
                </div>

                {openDate && (
                  <div
                    className={`absolute left-0 w-full bg-[#f9f5ec] border border-[#165F41] z-10 p-4 shadow-lg flex justify-center ${isDropdownUp ? "bottom-full mb-1" : "top-full"
                      }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <DateRangePicker value={dates} onChange={setDates} />
                  </div>
                )}

                {dateError && (
                  <p className="mt-2 text-sm text-red-600">
                    {dateError}
                  </p>
                )}
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
                    className="w-full bg-transparent text-[#165F41] font-medium border border-[#165F41] p-4 placeholder:text-[#165F41B2] placeholder:text-lg focus:outline-none focus:border-[#1B4D3E] resize-none"
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
                    className="checkbox-custom focus:ring-0 aspect-square"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                  />
                  <span className="text-[#165F41] text-sm font-light">
                    I give my consent to be contacted via Call, SMS, Email, or
                    WhatsApp
                  </span>
                </label>
                <Button
                  type="submit"
                  disabled={!consentChecked || isSubmitting}
                  className={`w-full md:w-auto px-10 py-4 bg-[#165F41] text-white uppercase tracking-widest text-sm font-bold transition-all ${consentChecked && !isSubmitting
                    ? ' cursor-not-allowed opacity-80'
                    : 'cursor-not-allowed opacity-80'
                    }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
              {submitMessage && (
                <div className={`md:col-span-2 mt-4 p-4 text-center ${submitMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
