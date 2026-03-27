"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Typography from "../ui/Typography";

const GLIMPSES_CONTENT = [
  {
    heading: "A Glimpse Into Our Hospitality",
    description: "Most hotel searches start with “just need a place to stay,” but expectations drop fast. At The Padival Grand, we changed that. As one of the best hotels in Puttur Karnataka, we offer thoughtfully designed hotel rooms, warm service, and a calm environment that feels like an upgrade, not a compromise. Located near Padil and well-connected to Puttur Main Road, we ensure every stay in Puttur is smooth, comfortable, and genuinely welcoming for families and travelers. "
  },
  {
    heading: "Hotel in Puttur Karnataka That Gets What Travelers Need ",
    description: "Whether you're visiting a temple trip, work, or family travel, your needs are simple - comfort, convenience, and easy access. The Padival Grand delivers exactly that. Located on Puttur Main Road near Padil, our hotel offers seamless connectivity, peaceful surroundings, and reliable service. Among hotels in Puttur Karnataka, we focus on making your stay hassle-free, with everything designed to work smoothly from check-in to checkout."
  },
  {
    heading: "Hotel Rooms in Puttur Designed for Comfort & Value ",
    description: "Our hotel rooms in Puttur are built to meet real expectations. From effective AC and high-speed WiFi to clean interiors and daily housekeeping, every detail is handled with consistency. As one of the best hotels in Puttur Karnataka, we ensure each room feels fresh, secure, and easy to settle into. Whether it’s a short visit or a longer stay in Puttur, you get comfort and value without compromise."
  },
  {
    heading: "Stay in Puttur Without the Usual Hassles ",
    description: "Travel can be unpredictable, but your stay shouldn’t be. At The Padival Grand, we simplify everything - from easy parking to quick check-ins - so you can focus on your trip. Located in a prime area near Padial and Puttur Main Road, you stay connected to key routes and attractions. Whether it’s a short stay in Puttur or an extended visit, we ensure a smooth, stress-free experience every time. "

  },
   {
    heading: "A Welcoming Space for Stays, Dining & Celebrations ",
    description: "The Padival Grand is more than just a hotel in Puttur - it’s a space designed for comfort and connection. From overnight stays to family gatherings, we provide well-maintained spaces and pure veg dining in a clean, welcoming environment. As one of the best hotels and lodges in Puttur Karnataka, we focus on reliable service and thoughtful details, ensuring every experience feels easy, structured, and truly comfortable."
    
  }
];

const GlimpsesSection = () => {
    const AUTOPLAY_DELAY = 10000;

    return (
        <section className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-[#012219] font-semibold mb-8  text-center max-w-[80%] mx-auto"> Best Hotel in Puttur Karnataka for Comfortable Stay & Dining </h1>
            <div className=" mx-auto px-6 md:px-8 flex flex-col items-center">
                {/* Text Carousel Section */}
                <div className="w-full max-w-5xl mx-auto">
                    <Swiper
                        modules={[Pagination, Autoplay, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `<span class="${className} custom-line-bullet"><span class="progress-fill"></span></span>`;
                            },
                        }}
                        autoplay={{
                            delay: AUTOPLAY_DELAY,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        slidesPerView={1}
                        className="text-carousel-swiper !pb-24"
                    >
                        {GLIMPSES_CONTENT.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center text-center px-4 md:px-12">
                                    <h2 className="text-4xl md:text-5xl lg:text-4xl font-serif leading-tight text-[#012219] font-semibold mb-8 max-w-4xl mx-auto">
                                        {item.heading}
                                    </h2>
                                    <Typography 
                                        variant="description" 
                                        className="max-w-4xl xl:max-w-5xl mx-auto font-medium leading-relaxed text-[#012219CC] text-lg md:text-xl lg:text-lg min-h-[120px] md:min-h-[100px]"
                                    >
                                        {item.description}
                                    </Typography>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx global>{`
                .text-carousel-swiper .swiper-pagination {
                    bottom: 0px !important;
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                }
                .text-carousel-swiper .custom-line-bullet {
                    width: 60px !important;
                    height: 4px !important;
                    background: rgba(22, 95, 65, 0.15) !important;
                    border-radius: 4px !important;
                    position: relative !important;
                    overflow: hidden !important;
                    cursor: pointer !important;
                    margin: 0 !important;
                    opacity: 1 !important;
                    transition: all 0.3s ease !important;
                }
                .text-carousel-swiper .custom-line-bullet .progress-fill {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 0%;
                    background: #165F41;
                    border-radius: 4px;
                }
                .text-carousel-swiper .swiper-pagination-bullet-active {
                    background: rgba(22, 95, 65, 0.15) !important;
                }
                .text-carousel-swiper .swiper-pagination-bullet-active .progress-fill {
                    animation: progressFill ${AUTOPLAY_DELAY}ms linear forwards;
                }

                @keyframes progressFill {
                    from { width: 0%; }
                    to { width: 100%; }
                }

                @media (max-width: 767px) {
                    .text-carousel-swiper .custom-line-bullet {
                        width: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default GlimpsesSection;