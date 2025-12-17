
"use client"

import React from "react";
import Image from "next/image";
import ImageShowcaseSwiper from "../ui/newCarousel";
import CarouselSection from "../ui/CarouselSection";

interface RoomImagesSectionProps {
    image: string[];
}

const RoomImagesSection = ({ image }: RoomImagesSectionProps) => {
    // Transform string[] to the expected object format
    const imageObjects = image.map((src) => ({ src }));


    return (
    <>
<ImageShowcaseSwiper
  variant="centered"
  images={imageObjects}
  leftLabel="OUR ROOMS"
  heading="Luxury accommodation designed for comfort"
/>

    </>
    );
};

export default RoomImagesSection;
