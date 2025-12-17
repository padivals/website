"use client";

import React from "react";
import Image from "next/image";
import CarouselSection from "@/components/ui/CarouselSection";
import ImageShowcaseSwiper from "../ui/newCarousel";

const EventTypes = () => {
    const eventTypes = [
  {
    src: "/evnts/img1.png",
    alt: "Engagement and Pre-Wedding Rituals",
    heading: "Engagement and Pre-Wedding Rituals",
    content:
      "Neat, welcoming spaces suited for meaningful ceremonies held with care and simplicity.",
  },
  {
    src: "/evnts/img2.png",
    alt: "Naming Ceremonies",
    heading: "Naming Ceremonies",
    content:
      "A peaceful space for families to celebrate their special milestone in a calm and supportive setting.",
  },
  {
    src: "/evnts/img3.png",
    alt: "Small Corporate Meetings",
    heading: "Small Corporate Meetings",
    content:
      "Quiet, well-kept rooms ideal for discussions, training sessions, and professional gatherings.",
  },
  {
    src: "/evnts/img1.png",
    alt: "Birthday Celebrations",
    heading: "Birthday Celebrations",
    content:
      "Intimate spaces perfect for celebrating another year of life with close friends and family.",
  },
   {
    src: "/evnts/img2.png",
    alt: "Small Corporate Meetings",
    heading: "Small Corporate Meetings",
    content:
      "Quiet, well-kept rooms  ideal for discussions, training sessions, and professional gatherings.",
  },
];



    return (
       <ImageShowcaseSwiper
             classname="py-20 bg-[white]"
             variant="split"
             heading="You can book rooms, event halls and restaurant tables, each supported by attentive service and well-prepared spaces."
             leftLabel="WHAT'S NEARBY"
             images={eventTypes}
           />
    );
};

export default EventTypes;
