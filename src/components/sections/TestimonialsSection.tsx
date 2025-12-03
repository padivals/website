"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location?: string;
}

interface TestimonialsSectionProps {
  title?: string;
  label?: string;
  testimonials?: Testimonial[];
  rating?: number;
  ratingLabel?: string;
}

const defaultTestimonials = [
  {
    id: 1,
    text: "This is a hidden jem in Puttur. Even though I am originally from puttur, I did not know about this place. This is the best place to stay in Puttur. It is in central location very near to ಮಹಾಲಿಂಗೇಶ್ವರ temple. It has got ample parking space. Rooms are maintained spotlessly clean...",
    author: "Shagrithaya B S",
    location: "Puttur",
  },
  {
    id: 2,
    text: "The Hotel is centrally located. The rooms are neat & well furnished. Lighting & AC were also good. Sufficient parking space. Courtesies staff. Restaurant in ground floor serves good veg food. Overall we had a comfortable stay...",
    author: "Nataraja Sundarappa",
    location: "Bangalore",
  },
  {
    id: 3,
    text: "Excellent hospitality and very clean rooms. The staff went out of their way to make our stay comfortable. The location is perfect for visiting nearby temples and attractions.",
    author: "Rajesh Kumar",
    location: "Mangalore",
  },
  {
    id: 4,
    text: "A wonderful experience! The ambiance is great and the food is delicious. Definitely the best hotel in Puttur for families.",
    author: "Priya Shetty",
    location: "Mumbai",
  },
];

const TestimonialsSection = ({
  title = "What Our Guests Appreciate Most",
  label = "REVIEWS",
  testimonials = defaultTestimonials,
  rating = 4.3,
  ratingLabel = "Average Rating by Past Guests",
}: TestimonialsSectionProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);

  const handleProgress = (swiper: SwiperType) => {
    const total =
      swiper.slides.length - (swiper.params.slidesPerView as number) + 1;
    const current = swiper.realIndex;
    const prog = ((current + 1) / total) * 100;
    // Clamp between 0 and 100
    setProgress(Math.min(100, Math.max(0, prog)));
  };

  return (
    <section className="bg-[#F9F5EC] py-15">
      <div className="container mx-auto md:pl-16 px-8">
        {/* Top Divider Line */}
        <div className="md:mr-16  h-px bg-[#165F41] mb-12 opacity-50"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Header */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-[#165F41CC] uppercase tracking-widest text-sm font-medium mb-4">
              {label}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0F2A1D] leading-tight">
              {title}
            </h2>
          </div>

          {/* Right Side - Slider */}
          <div className="lg:col-span-8">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={27}
              slidesPerView={1}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                handleProgress(swiper);
              }}
              onSlideChange={(swiper) => handleProgress(swiper)}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                1024: {
                  slidesPerView: 1.6,
                },
              }}
              className="w-full"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-auto">
                  <div className="border border-[#A3B19C] p-8  h-full flex flex-col justify-between  min-h-[320px] bg-transparent">
                    <div>
                      <p className="text-[#012219CC] text-base md:text-lg leading-relaxed font-bold">
                        “{testimonial.text}”
                      </p>
                    </div>
                    <div className="mt-8">
                      <span className="text-[#012219CC] text-base md:text-lg font-medium block">
                        - {testimonial.author}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mt-16 gap-8">
          {/* Rating Info */}
          <div>
            <p className="text-[22px] font-extrabold    text-[#012219CC] mb-1 ">
              {rating} Stars
            </p>
            <p className="text-[#012219CC] text-sm mb-3">{ratingLabel}</p>
            <div className="flex gap-1 text-[#1B4D3E]">
              {[1, 2, 3, 4].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}

              {/* 5th Star - Outlined only */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6 text-[#A3B19C]"
              >
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-8 w-full md:w-auto">
            {/* Progress Bar */}
            <div className="flex-1 md:w-84 h-1 bg-[#E2E8F0] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1B4D3E] transition-all duration-300 "
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex pr-12 gap-4  ">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="text-[#165F41] hover:opacity-70 transition-opacity "
                aria-label="Previous"
              >
               <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11L1 6L6 1" stroke="#165F41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="text-[#1B4D3E] hover:opacity-70 transition-opacity "
                aria-label="Next"
              >
           <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L6 6L1 11" stroke="#165F41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
