"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import DateRangePicker from "../ui/DateRangePicker";

type ReservationData = {
  from: Date | undefined;
  to: Date | undefined;
  adults: number;
  children: number;
};

type Props = {
  heading?: string;
  buttonLabel?: string;
  bgColor?: string;
  textColor?: string;
  highlightColor?: string;
  onSubmit?: (data: ReservationData) => void;
};

const ReservationBar = ({
  heading = "Make Your Reservation",
  buttonLabel = "Book Now",
  bgColor = "rgba(1, 34, 25, 0.95)",
  textColor = "#FFFFFF",
  onSubmit,
}: Props) => {
  const [openDate, setOpenDate] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);
  const [dates, setDates] = useState<Date[]>([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // Close dropdown when clicking outside
  useEffect(() => {
    const close = () => {
      setOpenDate(false);
      setOpenGuests(false);
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const formattedFrom = dates[0]
    ? format(dates[0], "dd / MM / yy")
    : "-- / -- / --";
  const formattedTo = dates[1]
    ? format(dates[1], "dd / MM / yy")
    : "-- / -- / --";

  return (
    <div
      className="relative w-full py-4  px-8 md:px-12 backdrop-blur-md border-t border-white/10"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Heading */}
        <h2 className="font-sans text-lg md:text-xl font-medium whitespace-nowrap tracking-wide">
          {heading}
        </h2>

        {/* Inputs Container */}
        <div className="flex items-center gap-8 flex-1 justify-center">
          {/* DATE PICKER */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenDate(!openDate);
              setOpenGuests(false);
            }}
            className="flex items-center gap-3 py-2 cursor-pointer min-w-[280px] px-4 justify-center relative"
          >
            <span className="text-sm md:text-base tracking-wide">
              {formattedFrom}
            </span>
            <span className="text-white/60 text-sm px-2">-</span>
            <span className="text-sm md:text-base tracking-wide">
              {formattedTo}
            </span>

            {openDate && (
              <div
                className="absolute bottom-[120%] left-1/2 -translate-x-1/2 bg-[#2E2E2E] text-white shadow-2xl p-4 rounded-md z-[999] opacity-0 translate-y-2 animate-fadeSlide"
                onClick={(e) => e.stopPropagation()}
              >
                <DateRangePicker value={dates} onChange={setDates} />
              </div>
            )}
          </div>

          {/* GUEST PICKER */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenGuests(!openGuests);
              setOpenDate(false);
            }}
            className="flex items-center gap-2 py-2 cursor-pointer min-w-[200px] relative justify-center"
          >
            <span className="text-sm md:text-base tracking-wide whitespace-nowrap text-center">
              {adults} Adult{adults > 1 ? "s" : ""}, {children} Children
            </span>
            <div className="ml-2">
              {openGuests ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>

            {openGuests && (
              <div
                className="absolute bottom-[120%] right-0 bg-[#2E2E2E] text-white shadow-2xl p-6 rounded-md w-64 z-[999] space-y-6 opacity-0 translate-y-2 animate-fadeSlide"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <span className="text-base">Adults</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors"
                    >
                      –
                    </button>
                    <span className="w-6 text-center">{adults}</span>
                    <button
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                  <span className="text-base">Children</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors"
                    >
                      –
                    </button>
                    <span className="w-6 text-center">{children}</span>
                    <button
                      onClick={() => setChildren(children + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA BUTTON */}
        <button
          onClick={() =>
            onSubmit?.({
              from: dates[0],
              to: dates[1],
              adults,
              children,
            })
          }
          className="bg-white text-[#012219] px-8 py-3 font-bold text-sm md:text-base tracking-wide hover:bg-gray-100 transition-all whitespace-nowrap"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ReservationBar;
