"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useBookingModal } from "../providers/BookingModalContext";
import { format } from "date-fns";

const BookingModal = () => {
  const { isOpen, closeModal, reservationData } = useBookingModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [description, setDescription] = useState("");
  const [preferredFrom, setPreferredFrom] = useState("");
  const [preferredTo, setPreferredTo] = useState("");
  const [reservationType, setReservationType] = useState("Room Booking");
  const [roomType, setRoomType] = useState("The Deluxe A/C Room");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [openGuests, setOpenGuests] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState<Date[]>([]);
  const [dateError, setDateError] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(false);

  // Pre-fill form with reservation data when modal opens
  useEffect(() => {
    if (isOpen && reservationData) {
      // Set dates if available
      const newDates: Date[] = [];
      if (reservationData.from) newDates.push(reservationData.from);
      if (reservationData.to) newDates.push(reservationData.to);
      setDates(newDates);

      // Set adults and children
      setAdults(reservationData.adults);
      setChildren(reservationData.children);
    }
  }, [isOpen, reservationData]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const close = () => {
        setOpenGuests(false);
        setOpenDate(false);
    }
    if (openGuests || openDate) {
      window.addEventListener("click", close);
    }
    return () => window.removeEventListener("click", close);
  }, [openGuests, openDate]);

  useEffect(() => {
      if(dates.length > 0 && dates[0]){
          setPreferredFrom(format(dates[0], "dd / MM / yyyy"));
      }
      if(dates.length > 1 && dates[1]){
           setPreferredTo(format(dates[1], "dd / MM / yyyy"));
      }
  }, [dates])

  // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

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

   const parseAndValidateDate = (value: string) => {
    // Extract only digits from the formatted value
    const nums = value.replace(/\D/g, "");

    // Only run validation when we have full DDMMYYYY (8 digits)
    if (nums.length !== 8) {
      return { date: null as Date | null, error: null as string | null };
    }

    const day = parseInt(nums.slice(0, 2), 10);
    const month = parseInt(nums.slice(2, 4), 10);
    const year = parseInt(nums.slice(4), 10);

    const today = new Date();
    const currentYear = today.getFullYear();

    if (month < 1 || month > 12) {
      return { date: null, error: "Please enter a valid month (01–12)." };
    }

    // Basic year validation: current year or later, 4 digits
    if (year < currentYear || year < 1000 || year > 9999) {
      return { date: null, error: "Please enter a valid year (current or future)." };
    }

    const candidate = new Date(year, month - 1, day);

    // Check that JS date didn't overflow (e.g. 31/02)
    if (
      candidate.getFullYear() !== year ||
      candidate.getMonth() !== month - 1 ||
      candidate.getDate() !== day
    ) {
      return { date: null, error: "Please enter a valid calendar date." };
    }

    // Disallow dates before today
    const todayMidnight = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const candidateMidnight = new Date(year, month - 1, day);

    if (candidateMidnight < todayMidnight) {
      return { date: null, error: "Date cannot be earlier than today." };
    }

    return { date: candidate, error: null };
  };


  const handlePreferredFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferredFrom(formatDateDigits(e.target.value));
  };

  const handlePreferredToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferredTo(formatDateDigits(e.target.value));
  };

    const handlePreferredFromBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { error } = parseAndValidateDate(e.target.value);
    setDateError(error);
  };

  const handlePreferredToBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { error } = parseAndValidateDate(e.target.value);
    setDateError(error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentChecked) return;

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/google-sheets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          guests: `${adults} Adult(s), ${children} Child(ren)`,
          reservationType,
          roomType: reservationType === "Room Booking" ? roomType : "N/A",
          preferredFrom,
          preferredTo,
          description,
          source: "BookingModal",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage({ type: "success", text: "Booking request submitted successfully! We will contact you soon." });
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setDescription("");
        setPreferredFrom("");
        setPreferredTo("");
        setConsentChecked(false);
        // Optionally close modal after delay
        setTimeout(() => {
          closeModal();
          setSubmitMessage(null);
        }, 3000);
      } else {
        throw new Error(data.error || "Failed to submit booking request.");
      }
    } catch (error: any) {
      setSubmitMessage({ type: "error", text: error.message || "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" data-lenis-prevent>
      {/* Modal Content */}
      <div className="bg-white p-6 md:p-10 w-full max-w-5xl shadow-2xl relative max-h-[90vh] overflow-y-auto animate-fadeSlide" data-lenis-prevent>
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-[#165F41] hover:text-[#0F2A1D] transition-colors"
        >
          <X size={28} />
        </button>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-4">
          {/* Name */}
          <Input
            label="NAME"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="placeholder:text-[#165F41B2] text-[#165F41B2]"
          />

          {/* Number of Guests */}
          <div className="flex flex-col relative z-20">
            <label className="text-[#165F41] text-sm md:text-base font-medium uppercase tracking-wider mb-2">
              NUMBER OF GUESTS
            </label>
            <div
              className="w-full bg-transparent border border-[#165F41] p-4 text-[#165F41B2] cursor-pointer flex justify-between items-center"
              onClick={(e) => {
                e.stopPropagation();
                setOpenGuests(!openGuests);
                setOpenDate(false); 
              }}
            >
              <span>
                {adults < 10 ? `0${adults}` : adults} Adult, {children} Children
              </span>
              <button type="button" className="text-[#165F41]">
                 <ChevronDown size={20} className={`transform transition-transform ${openGuests ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Dropdown */}
            {openGuests && (
              <div
                className="absolute top-full left-0 w-full bg-[white] border border-[#165F41] border-t-0 z-50 p-6 flex flex-col gap-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Adults Row */}
                <div className="flex justify-between items-center">
                  <span className="text-[#165F41] font-medium text-lg">Adults</span>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 text-[#165F41] flex items-center justify-center hover:bg-[#165F41] hover:text-white transition-colors text-xl pb-1  border border-[#165F41]"
                    >
                      -
                    </button>
                    <span className="text-[#165F41] w-6 text-center text-lg font-medium">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 text-[#165F41] flex items-center justify-center hover:bg-[#165F41] hover:text-white transition-colors text-xl pb-1 border border-[#165F41]"
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
                      className="w-8 h-8 text-[#165F41] flex items-center justify-center hover:bg-[#165F41] hover:text-white transition-colors text-xl pb-1 border border-[#165F41]"
                    >
                      -
                    </button>
                    <span className="text-[#165F41] w-6 text-center text-lg font-medium">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-8 h-8 text-[#165F41] flex items-center justify-center hover:bg-[#165F41] hover:text-white transition-colors text-xl pb-1 border border-[#165F41]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Phone */}
           <div className="flex flex-col">
                <label className="text-[#165F41] text-sm md:text-base font-medium uppercase tracking-wider mb-2">
                  PHONE
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
            label="EMAIL"
            type="email"
            placeholder="Your Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-[#165F41B2] placeholder:text-[#165F41B2]"
          />

          {/* Reservation Type */}
          <div className="flex flex-col gap-6">
            <Select
              label="RESERVATION TYPE"
              options={["Room Booking", "Event Hosting", "Dining Reservation"]}
              value={reservationType}
              onChange={(e) => {
                const next = e.target.value;
                setReservationType(next);
                if (next !== "Room Booking") {
                  setRoomType("The Deluxe A/C Room");
                }
              }}
            />

            {reservationType === "Room Booking" && (
              <Select
                label="ROOM TYPE"
                options={[
                  "The Deluxe A/C Room",
                  "The Standard Room",
                  "Premium Room",
                  "The Family Quad Room",
                  "The Triple Bedroom",
                ]}
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              />
            )}
          </div>

          {/* Preferred Dates */}
           <div className="flex flex-col relative"
             onClick={(e) => {
                 e.stopPropagation();
                 setOpenDate(!openDate);
                 setOpenGuests(false);
             }}
           >
                <label className="text-[#165F41] text-sm md:text-base font-medium uppercase tracking-wider mb-2">
                  PREFERRED DATES
                </label>
                 <div className="flex gap-2">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="--  /  --  /  ---- "
                    value={preferredFrom}
                    onChange={handlePreferredFromChange}
                    onBlur={handlePreferredFromBlur}
                    className="w-1/2 bg-transparent border border-[#165F41] p-4 placeholder:text-[#165F41B2] text-[#165F41B2] text-center focus:outline-none focus:border-[#1B4D3E]"
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="--  /  --  /  ----"
                    value={preferredTo}
                    onChange={handlePreferredToChange}
                    onBlur={handlePreferredToBlur}
                    className="w-1/2 bg-transparent border border-[#165F41] p-4  placeholder:text-[#165F41B2] text-[#165F41B2] text-center focus:outline-none focus:border-[#1B4D3E]"
                  />
                </div>
                {dateError && (
                  <p className="mt-2 text-sm text-red-600">
                    {dateError}
                  </p>
                )}

            
              </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-[#165F41] text-sm md:text-base font-medium uppercase tracking-wider mb-2 flex items-end gap-1">
              DESCRIPTION
              <span className="text-[11px] text-[#165F41]/70 normal-case align-bottom mb-[2px]">
                (OPTIONAL)
              </span>
            </label>
            <div className="relative w-full">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Please mention any special requests or preferences our team ought to notified of"
                className="w-full bg-transparent text-[#165F41B2] border border-[#165F41] p-4 placeholder:text-[#165F41B2] focus:outline-none focus:border-[#1B4D3E] resize-none"
              ></textarea>
              <span className="absolute top-2 right-3 text-[10px] text-[#165F41]">
                {description.length}/125
              </span>
            </div>
          </div>

          {/* Footer - Consent & Submit */}
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between mt-6 gap-6">
            <label className="flex items-center gap-3 cursor-pointer self-start md:self-center">
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                className="w-5 h-5 border border-[#165F41] aspect-square  checked:bg-[#165F41] focus:ring-0 mr-2 accent-[#165F41]"
              />
              <span className="text-[#165F41] text-sm md:text-sm font-light">
                I give my consent to be contacted via Call, SMS, Email, or WhatsApp
              </span>
            </label>
            <Button
              type="submit"
              disabled={!consentChecked || isSubmitting}
              className={`w-full md:w-auto px-10 py-4 bg-[#165F41] text-white uppercase tracking-widest text-sm font-bold transition-all ${
                consentChecked && !isSubmitting
                  ? 'hover:bg-[#124b33] cursor-pointer opacity-100' 
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
  );
};

export default BookingModal;
