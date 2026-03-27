"use client";

import React from "react";
import Image from "next/image";
import CarouselSection from "@/components/ui/CarouselSection";
import ImageShowcaseSwiper from "../ui/newCarousel";

const EventTypes = () => {
    const eventTypes = [
  {
    src: "/evnts/img1.png",
    alt: "Engagement Ceremonies",
    heading: "Engagement Ceremonies",
    content:
      "A graceful venue designed to host engagement functions and pre-wedding celebrations, providing a warm and welcoming atmosphere for family and guests to come together. ",
  },
  {
    src: "/evnts/img2.png",
    alt: "Naming Ceremonies",
    heading: "Naming Ceremonies",
    content:
      "A serene and well-organized setting ideal for traditional naming ceremonies, allowing families to gather comfortably and celebrate this special milestone in a peaceful and respectful ambience.",
  },
  {
    src: "/evnts/img4.png",
    alt: "Corporate Meetings",
    heading: "Corporate Meetings",
    content:
      "A professional and well-maintained environment suitable for corporate meetings, discussions, and small business gatherings, ensuring a focused and comfortable setting.",
  },
  {
    src: "/evnts/img5.png",
    alt: "Social & Community Gatherings",
    heading: "Social & Community Gatherings",
    content:
      "A peaceful space for families to celebrate their special milestone in a calm and supportive setting.",
  },

];



    return (
      <div className=" bg-white">
                     <div className=" w-full z-20 pt-20 sm:pt-24 lg:pt-20 px-6 md:px-12 lg:px-16 rooms-responsive-padding">

        <div className="container mx-auto  md:block hidden  ">
          {/* Top Divider */}
          <div className="w-full h-px bg-[#165F41] mb-8 lg:mb-12"></div>

       
        </div>
          <div className="container mx-auto md:hidden block">

                <div className="w-full h-px bg-[#165F41] mb-12  "></div>
            </div>
        
      </div>
       <ImageShowcaseSwiper
             classname="py-20 bg-[white] md:pr-16"
             variant="split"
             heading="We offer well-kept event spaces so guests can gather, celebrate, and host meaningful moments in a setting that feels comfortable and thoughtfully managed."
             leftLabel="Types of events WE CATER TO"
             images={eventTypes}
           />
      </div>

   
    );
};

export default EventTypes;
