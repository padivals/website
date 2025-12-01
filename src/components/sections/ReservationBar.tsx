"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
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
  highlightColor?: string; // green or gold
  onSubmit?: (data: ReservationData) => void;
};

const ReservationBar = ({
  heading = "Make Your Reservation",
  buttonLabel = "Book Now",
  bgColor = "#012219",
  textColor = "#FFFFFF",
  highlightColor = "#1D8842",
  onSubmit,
}: Props) => {
  const [openDate, setOpenDate] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);
  const [dates, setDates] = useState<Date[]>([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
    const barRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { y: 150, opacity: 0 },
      {
        y: 0,
        delay: 2.5,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      }
    );
  }, []);



  // Close dropdown when clicking outside
  useEffect(() => {
    const close = () => {
      setOpenDate(false);
      setOpenGuests(false);
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const formattedFrom = dates[0] ? format(dates[0], "dd / MM / yyyy ") : " -- / -- / ---- ";
  const formattedTo = dates[1] ? format(dates[1], "dd / MM / yyyy ") : " -- / -- / ---- ";
  return (
    <div
     ref={barRef}
      className="fixed bottom-0 left-0 w-full z-50 py-5 px-6 md:px-10 border-t    border-white/10"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-7xl px-12    mx-auto flex items-center justify-between gap-6 ">

        {/* Heading */}
        <h2 className="font-sans text-sm md:text-[20px] font-medium whitespace-nowrap tracking-wide">
          {heading}
        </h2>

        {/* Inputs */}
        <div className="flex items-center gap-10 flex-1 justify-center">

          {/* DATE PICKER */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenDate(!openDate);
              setOpenGuests(false);
            }}
            className="flex items-center gap-3 border-b-2 border-white/50 py-2 cursor-pointer min-w-[240px] px-6 justify-center relative"
           >
            <span className="text-xs md:text-sm tracking-wider">{formattedFrom}</span>
            <span className="text-white/60 text-xs px-3">    -   </span>
            <span className="text-xs md:text-sm tracking-wider">{formattedTo}</span>

            {openDate && (
              <div
                className="absolute bottom-[120%] left-1/2 -translate-x-1/2 bg-[#2E2E2E] text-white shadow-xl p-4 rounded-sm z-[999]
                opacity-0 translate-y-2 animate-fadeSlide"
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
            className="flex items-center gap-2 border-b-2 border-white/50 py-2 cursor-pointer min-w-[200px] relative justify-center"
          >
            <span className="text-xs md:text-sm tracking-wider whitespace-nowrap text-center">
              {adults} Adult{adults > 1 ? "s" : ""}, {children} Children
            </span>
            <div className="ml-2">
              {openGuests ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </div>

            {openGuests && (
              <div
                className="absolute bottom-[120%] right-0 bg-[#2E2E2E] text-white shadow-xl p-6 rounded-sm w-64 z-[999] space-y-6 opacity-0 translate-y-2 animate-fadeSlide"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <span className="text-sm">Adults</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setAdults(Math.max(1, adults - 1))}>–</button>
                    <span>{adults}</span>
                    <button onClick={() => setAdults(adults + 1)}>+</button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                  <span className="text-sm">Children</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setChildren(Math.max(0, children - 1))}>–</button>
                    <span>{children}</span>
                    <button onClick={() => setChildren(children + 1)}>+</button>
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
          className="bg-white text-[#EAB361] px-6 py-3 font-semibold text-xs md:text-lg tracking-wide hover:bg-[#c1c1c1] transition-all whitespace-nowrap"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ReservationBar;