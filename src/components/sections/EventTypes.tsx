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
    heading: "Engagement Ceremonies ",
    content:
      "A thoughtfully arranged space for moments that matter, where families gather; conversations flow and celebrations feel effortless creating a warm, welcoming setting for meaningful beginnings. ",
  },
  {
    src: "/evnts/img2.png",
    alt: "Naming Ceremonies",
    heading: "Naming Ceremonies",
    content:
      "A calm, welcoming space where families come together to celebrate meaningful milestones, creating moments that feel personal, peaceful and quietly memorable for everyone involved. ",
  },
  {
    src: "/evnts/img4.png",
    alt: "Corporate Meetings",
    heading: "Corporate Meetings",
    content:
      "A clean, well-organized space where ideas flow and discussions stay focused, offering a calm and professional setting for meetings, collaborations and meaningful business conversations. ",
  },
  {
    src: "/evnts/img5.png",
    alt: "Social & Community Gatherings",
    heading: "Social & Community Gatherings",
    content:
      "A calm and well-prepared space where families gather to celebrate new beginnings, creating a warm and respectful atmosphere for meaningful moments shared with loved ones.",
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
             heading="We offer thoughtfully designed event venues in Puttur where gatherings feel easy and well-managed. From intimate celebrations to larger functions, our spaces combine clean interiors, practical layouts and reliable support, creating a setting where guests feel comfortable, and every event comes together smoothly. "
             leftLabel={<>Event Venues in Puttur for <br /> Every Celebration</>}
             images={eventTypes}
           />
      </div>

   
    );
};

export default EventTypes;
