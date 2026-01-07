"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import DateRangePicker from "../ui/DateRangePicker";
import { useBookingModal } from "../providers/BookingModalContext";

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
  onSubmit,
}: Props) => {
  const { openModal, setReservationData } = useBookingModal();
  const [openDate, setOpenDate] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);
  const [dates, setDates] = useState<Date[]>([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const [bottomOffset, setBottomOffset] = useState(0);
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

  // Handle sticky positioning - stop at footer
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const bar = barRef.current;
      
      if (!footer || !bar) return;

      const footerRect = footer.getBoundingClientRect();
      const barHeight = bar.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate the position where the bar should stop (top of footer)
      const footerTop = scrollY + footerRect.top;
      const stopPosition = footerTop - barHeight;

      // Current scroll position where the bar would be if fixed
      const barBottomEdge = scrollY + windowHeight;

      if (barBottomEdge >= footerTop) {
        // Bar has reached the footer - switch to absolute and stop
        setIsFixed(false);
        setBottomOffset(documentHeight - footerTop);
      } else {
        // Bar hasn't reached footer yet - keep it fixed at bottom
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
      className={`md:block hidden ${isFixed ? 'fixed' : 'absolute'} left-0 w-full z-50 py-5 px-6 md:px-10 border-t border-white/10`}
      style={{ 
        backgroundColor: bgColor, 
        color: textColor,
        bottom: isFixed ? 0 : `${bottomOffset}px`
      }}
    >
      <div className="max-w-7xl px-12    mx-auto flex items-center justify-between gap-6 ">

        {/* Heading */}
        <p className="font-sans text-sm md:text-[20px] font-medium whitespace-nowrap tracking-wide">
          {heading}
        </p>

        {/* Inputs */}
        <div className="flex items-center gap-18 flex-1 justify-center">

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
                className="absolute bottom-[120%] left-1/2 border-2 border-[#052216] -translate-x-1/2 bg-[#f9f5ec] text-white shadow-xl p-4 rounded-sm z-[999]
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
            <span className="text-xs md:text-sm  font-medium whitespace-nowrap text-center">
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
                className="absolute bottom-[120%] right-0 bg-[#f9f5ec] border-2 border-[#052216] text-[#141414] shadow-xl p-6 rounded-sm w-64 z-[999] space-y-6 opacity-0 translate-y-2 animate-fadeSlide"
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
          onClick={() => {
            // Save reservation data to context before opening modal
            setReservationData({
              from: dates[0],
              to: dates[1],
              adults,
              children,
            });
            openModal();
          }}
          className={`   bg-white text-[#012219] px-6 py-3 font-extrabold md:text-lg  hover:bg-[#c1c1c1] transition-all`}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ReservationBar;