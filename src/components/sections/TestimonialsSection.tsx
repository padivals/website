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
        const total = swiper.slides.length - (swiper.params.slidesPerView as number) + 1;
        const current = swiper.realIndex;
        const prog = ((current + 1) / total) * 100;
        // Clamp between 0 and 100
        setProgress(Math.min(100, Math.max(0, prog)));
    };

    return (
        <section className="bg-[#F9F5EC] py-20">
            <div className="container mx-auto px-6">
                {/* Top Divider Line */}
                <div className="w-full h-px bg-[#A3B19C] mb-12 opacity-50"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Side - Header */}
                    <div className="lg:col-span-4 flex flex-col">
                        <span className="text-[#4A6C58] uppercase tracking-widest text-sm font-medium mb-4">
                            {label}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0F2A1D] leading-tight">
                            {title}
                        </h2>
                    </div>

                    {/* Right Side - Slider */}
                    <div className="lg:col-span-8">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={24}
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
                                    slidesPerView: 2,
                                },
                            }}
                            className="w-full"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id} className="h-auto">
                                    <div className="border border-[#A3B19C] p-8 h-full flex flex-col justify-between min-h-[320px] bg-transparent">
                                        <div>
                                            <p className="text-[#4A5568] text-base leading-relaxed font-medium">
                                                “{testimonial.text}”
                                            </p>
                                        </div>
                                        <div className="mt-8">
                                            <span className="text-[#4A5568] font-medium block">
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
                <div className="flex flex-col md:flex-row justify-between items-end mt-16 gap-8">
                    {/* Rating Info */}
                    <div>
                        <h3 className="text-3xl font-serif text-[#0F2A1D] mb-1">{rating} Stars</h3>
                        <p className="text-[#4A6C58] text-sm mb-3">{ratingLabel}</p>
                        <div className="flex gap-1 text-[#1B4D3E]">
                            {[1, 2, 3, 4].map((star) => (
                                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                            ))}
                            {/* Dynamic Star representation based on rating could be complex, 
                                but for now we'll stick to the 4.3 visual (4 full + 1 partial) 
                                or we could make it dynamic if needed. 
                                Since the request is specifically for 4.3, keeping the partial star logic is fine.
                                Ideally, we should calculate the width based on `rating % 1`.
                            */}
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#A3B19C] opacity-50">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 absolute top-0 left-0 overflow-hidden text-[#1B4D3E]"
                                    style={{ width: `${(rating % 1) * 100}%` }}
                                >
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-6 w-full md:w-auto">
                        {/* Progress Bar */}
                        <div className="flex-1 md:w-64 h-1 bg-[#E2E8F0] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#1B4D3E] transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="text-[#1B4D3E] hover:opacity-70 transition-opacity"
                                aria-label="Previous"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="text-[#1B4D3E] hover:opacity-70 transition-opacity"
                                aria-label="Next"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
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
