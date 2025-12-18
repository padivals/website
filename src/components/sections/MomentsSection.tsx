"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import ScrollReveal from "../ui/ScrollReveal";
import Image from "next/image";

interface ImageCarouselProps {
  heading?: string;
  images?: string[];
  backgroundColor?: string;
}

const DEFAULT_IMAGES = [
  "/diningImg/food1.png",
  "/diningImg/food2.png",
  "/diningImg/food3.png",
  "/diningImg/food2.png",
  "/diningImg/food1.png",
];

export default function ImageCarousel({
  heading = "Discover Moments at The Padival Grand Hotel",
  images = DEFAULT_IMAGES,
  backgroundColor = "bg-[#F9F2E8]",
}: ImageCarouselProps) {
  const IMAGES = images;
  const [index, setIndex] = useState(0);
  const directionRef = useRef(1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const registerRef = (i: number, el: HTMLDivElement | null) => {
    cardRefs.current[i] = el;
  };

  const next = () => {
    directionRef.current = 1;
    setIndex((i) => (i + 1) % IMAGES.length);
  };

  const prev = () => {
    directionRef.current = -1;
    setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  };

  const getImg = (offset: number) =>
    IMAGES[(index + offset + IMAGES.length) % IMAGES.length];

  /* Touch swipe */
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) prev();
  };

  /* GSAP animation */
  const animateImage = (card: HTMLDivElement, newSrc: string) => {
    const dir = directionRef.current;

    const oldImg = card.querySelector(".active-img") as HTMLElement;
    const newImg = card.querySelector(".incoming-img") as HTMLElement;

    if (!oldImg || !newImg) return;

    newImg.style.backgroundImage = `url(${newSrc})`;

    const startX = dir > 0 ? "100%" : "-100%";

    gsap.set(newImg, { x: startX, zIndex: 2, display: "block" });
    gsap.set(oldImg, { x: "0%", zIndex: 1 });

    const tl = gsap.timeline();

    tl.to(newImg, {
      x: "0%",
      duration: 0.99,
      ease: "power3.inOut",
    });

    tl.to(
      oldImg,
      {
        x: dir > 0 ? "-40%" : "40%",
        duration: 0.92,
        ease: "power3.inOut",
      },
      "<"
    );

    tl.add(() => {
      oldImg.classList.remove("active-img");
      oldImg.classList.add("incoming-img");

      newImg.classList.remove("incoming-img");
      newImg.classList.add("active-img");

      gsap.set([oldImg, newImg], { x: 0 });
    });
  };

  /* Initial load */
  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const img = card.querySelector(".active-img") as HTMLElement;
      if (img) {
        const offset = [-2, -1, 0, 1, 2][i];
        img.style.backgroundImage = `url(${getImg(offset)})`;
      }
    });
    // eslint-disable-next-line
  }, []);

  /* Animate on index change */
  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const offset = [-2, -1, 0, 1, 2][i];
      animateImage(card, getImg(offset));
    });
    // eslint-disable-next-line
  }, [index]);

  return (
    <div className={`w-full flex flex-col items-center ${backgroundColor} overflow-hidden md:min-h-[800px]`}>
   <div className="items-center pb-3  md:pt-12 md:pb-20 md:px-0 px-12">
        <ScrollReveal
          scrollContainerRef={undefined}
          enableBlur={false}
          baseOpacity={0}
          baseRotation={0}
          rotationEnd="top center"
          wordAnimationEnd="top 05%"
          containerClassName="text-center"
          textClassName="text-[#012219] text-3xl md:text-[42px] font-serif font-medium"
          blurStrength={10}
        >
          {heading}

        </ScrollReveal>
      </div>

      <div
        className="w-full md:w-[120%] flex justify-center items-end gap-3 md:gap-10 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Card refIndex={0} size="sm" registerRef={registerRef} />
        <Card refIndex={1} size="md" registerRef={registerRef}>
          <button onClick={prev}>
            <Image src="/svgs/leftArrow.svg" alt="" width={64} height={64} />
          </button>
        </Card>

        <Card refIndex={2} size="lg" main registerRef={registerRef} />

        <Card refIndex={3} size="md" registerRef={registerRef}>
          <button onClick={next}>
            <Image src="/svgs/rightArrow.svg" alt="" width={64} height={64} />
          </button>
        </Card>
        <Card refIndex={4} size="sm" registerRef={registerRef} />
      </div>

      {/* Progress Bar */}
      <div className="relative mt-12 w-[80%] md:w-[31rem] h-4">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#EADFCF]" />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-2 bg-[#165F41] transition-all duration-500"
          style={{
            left: `${(index / IMAGES.length) * 100}%`,
            width: `${(1 / IMAGES.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}


/* CARD COMPONENT */
interface CardProps {
  size: "sm" | "md" | "lg";
  children?: React.ReactNode;
  main?: boolean;
  refIndex: number;
  registerRef: (i: number, el: HTMLDivElement | null) => void;
  onEnded?: () => void;
}

function Card({
  size,
  children,
  main = false,
  refIndex,
  registerRef,
}: {
  size: "sm" | "md" | "lg";
  children?: React.ReactNode;
  main?: boolean;
  refIndex: number;
  registerRef: (i: number, el: HTMLDivElement | null) => void;
}) {
  const sizeMap = {
    sm: "hidden md:block md:w-[26vw] h-[60vh] opacity-80",
    md: "w-[18vw] md:w-[25vw] h-[45vh] md:h-[70vh]",
    lg: "w-[65vw] md:w-[28vw] h-[55vh] md:h-[80vh]",
  };

  return (
    <div
      ref={(el) => registerRef(refIndex, el)}
      className={`relative overflow-hidden shadow-3xl transition-all duration-500 ${sizeMap[size]}`}
    >
      <div className="absolute inset-0 bg-cover bg-center active-img" />
      <div className="absolute inset-0 bg-cover bg-center incoming-img" />

      {!main && <div className="absolute inset-0 bg-black/60 z-10" />}

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto">{children}</div>
      </div>
    </div>
  );
}