"use client";

import React from "react";
import CarouselSection from "../ui/CarouselSection";
import Image from "next/image";
import ImageShowcaseSwiper from "../ui/newCarousel";

const NearbyAttractions = () => {
  const attractionsData = [
    {
      src: "/hospitalityImg/img1.png",
      alt: "Puttur Shree Mahalingeshwara Temple",
      heading: "Puttur Shree Mahalingeshwara Temple",
      content: "A historic temple known for its serene ambience and deep cultural roots.",
    },
    {
      src: "/hospitalityImg/img2.png",
      alt: "Shivarama Karantha Balavana",
      heading: "Shivarama Karantha Balavana",
      content: "A peaceful cultural park with a museum, greenery and quiet spaces to unwind.",
    },
    {
      src: "/hospitalityImg/img3.png",
      alt: "Beeramale Hill",
      heading: "Beeramale Hill",
      content: "A scenic hilltop offering panoramic views of Puttur's landscapes.",
    },
    {
      src: "/hospitalityImg/img1.png",
      alt: "Bendru Theertha",
      heading: "Bendru Theertha",
      content: "A natural hot water spring located in a serene environment.",
    },
        {
      src: "/hospitalityImg/img3.png",
      alt: "Beeramale Hill",
      heading: "Beeramale Hill",
      content: "A scenic hilltop offering panoramic views of Puttur's landscapes.",
    },
  ];

  return (
    <ImageShowcaseSwiper
      classname="py-20 bg-[white]"
      variant="split"
      heading="You can book rooms, event halls and restaurant tables, each supported by attentive service and well-prepared spaces."
      leftLabel="WHAT'S NEARBY"
      images={attractionsData}
    />
  );
};

export default NearbyAttractions;
