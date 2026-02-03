"use client";

import React from "react";
import CarouselSection from "../ui/CarouselSection";
import Image from "next/image";
import ImageShowcaseSwiper from "../ui/newCarousel";

const NearbyAttractions = () => {
  const attractionsData = [
    {
      src: "/hospitalityImg/puttur.jpg",
      alt: "Puttur Shree Mahalingeshwara Temple",
      heading: "Puttur Shree Mahalingeshwara Temple",
      content: "A historic temple known for its serene ambience and deep cultural roots.",
    },
    {
      src: "/hospitalityImg/shivarama.jpg",
      alt: "Shivarama Karantha Balavana",
      heading: "Shivarama Karantha Balavana",
      content: "A peaceful cultural park with a museum, greenery and quiet spaces to unwind.",
    },
    {
      src: "/hospitalityImg/BeeramaleImg.jpeg",
      alt: "Beeramale Hill",
      heading: "Beeramale Hill",
      content: "A scenic hilltop offering panoramic views of Puttur's landscapes.",
    },
    {
      src: "/hospitalityImg/bendru.jpg",
      alt: "Bendru Theertha",
      heading: "Bendru Theertha",
      content: "A natural hot water spring located in a serene environment.",
    },
         
  ];

  return (
    <>
    <div className=" bg-[#FFFFFF]">
           <div className=" w-full z-20 pt-20 sm:pt-24 lg:pt-20 px-6 md:px-12 lg:px-16 rooms-responsive-padding">

        <div className="container mx-auto  md:block hidden  ">
          {/* Top Divider */}
          <div className="w-full h-px bg-[#165F41] mb-8 lg:mb-0"></div>

       
        </div>
          <div className="container mx-auto md:hidden block">

                <div className="w-full h-px bg-[#165F41] mb-12  "></div>
            </div>
        
      </div>
    <ImageShowcaseSwiper
      classname="py-16 bg-[white] md:pr-16 xl-faq-padding 16  "
      variant="split"
      heading="You can book rooms, event halls and restaurant tables, each supported by attentive service and well-prepared spaces."
      leftLabel="WHAT'S NEARBY"
      images={attractionsData}
    />
    </div>
    </>
  );
};

export default NearbyAttractions;
