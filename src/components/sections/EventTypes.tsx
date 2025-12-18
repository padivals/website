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
      "A peaceful space for families to celebrate their special milestone in a calm and supportive setting.",
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
    alt: "Naming Ceremony",
    heading: "Social & Community Gatherings",
    content:
      "A serene and well-organized setting ideal for traditional naming ceremonies, allowing families to gather comfortably and celebrate this special milestone in a peaceful and respectful ambience.",
  },

];



    return (
       <ImageShowcaseSwiper
             classname="py-20 bg-[white]"
             variant="split"
             heading="We offer well-kept event spaces so guests can gather, celebrate, and host meaningful moments in a setting that feels comfortable and thoughtfully managed."
             leftLabel="Types of events WE CATER TO"
             images={eventTypes}
           />
    );
};

export default EventTypes;
