"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Play, Pause } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import Image from "next/image";

interface VideoCarouselProps {
  heading?: string;
  videos?: string[];
  backgroundColor?: string;
}

const DEFAULT_VIDEOS = [
  "/momentsImg/vid1.mp4",
  "/momentsImg/video2.mp4",
  "/momentsImg/vid1.mp4",
  "/momentsImg/video2.mp4",
  "/momentsImg/vid1.mp4",
];

export default function VideoCarousel({
  heading = "Discover Moments at The Padival Grand Hotel",
  videos = DEFAULT_VIDEOS,
  backgroundColor = "bg-[#F9F2E8]",
}: VideoCarouselProps) {
  const VIDEOS = videos;
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const directionRef = useRef(1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const registerRef = (i: number, el: HTMLDivElement | null) => {
    cardRefs.current[i] = el;
  };

  const next = () => {
    directionRef.current = 1;
    setIndex((i) => (i + 1) % VIDEOS.length);
  };

  const prev = () => {
    directionRef.current = -1;
    setIndex((i) => (i - 1 + VIDEOS.length) % VIDEOS.length);
  };

  const getVid = (offset: number) =>
    VIDEOS[(index + offset + VIDEOS.length) % VIDEOS.length];

  const togglePlay = () => {
    const centerCard = cardRefs.current[2];
    if (!centerCard) return;
    const activeVid = centerCard.querySelector(".active-vid") as HTMLVideoElement;

    if (activeVid) {
      if (activeVid.paused) {
        activeVid.play();
        setIsPlaying(true);
      } else {
        activeVid.pause();
        setIsPlaying(false);
      }
    }
  };

  // Touch handling for mobile swipe
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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  /**
   * Animation Logic:
   * Decoupled from React state to prevent "immediate load".
   * New video slides IN over the old video.
   */
  const animateVideo = (card: HTMLDivElement, newSrc: string, isCenter: boolean) => {
    const dir = directionRef.current; // 1 = next (move left), -1 = prev (move right)

    const oldVid = card.querySelector(".active-vid") as HTMLVideoElement;
    const newVid = card.querySelector(".incoming-vid") as HTMLVideoElement;

    if (!oldVid || !newVid) return;

    // 1. Prepare New Video (Hidden initially)
    newVid.src = newSrc;
    newVid.currentTime = 0;

    // Play/Pause logic
    if (isCenter && isPlaying) {
      newVid.play().catch(() => { });
    } else {
      newVid.pause();
    }

    // 2. Set Initial Positions for Slide Over
    // If Next (dir=1): New slides in from Right (100%)
    // If Prev (dir=-1): New slides in from Left (-100%)
    const startX = dir > 0 ? "100%" : "-100%";

    gsap.set(newVid, {
      x: startX,
      zIndex: 2, // On top
      display: "block"
    });

    gsap.set(oldVid, {
      zIndex: 1, // Underneath
      x: "0%"    // Stay put (or slight parallax)
    });

    const tl = gsap.timeline();

    // 3. Animate New Video IN
    tl.to(newVid, {
      x: "0%",
      duration: 0.99,
      ease: "power3.inOut",
    });

    // Optional: Slight movement for Old Video (Parallax)
    // Moves slightly in opposite direction of incoming
    tl.to(oldVid, {
      x: dir > 0 ? "-40%" : "40%",
      duration: 0.92,
      ease: "power3.inOut",
    }, "<");

    // 4. Cleanup
    tl.add(() => {
      oldVid.classList.remove("active-vid");
      oldVid.classList.add("incoming-vid");

      newVid.classList.remove("incoming-vid");
      newVid.classList.add("active-vid");

      // Reset positions
      gsap.set(oldVid, { x: 0, y: 0, zIndex: 1 });
      gsap.set(newVid, { x: 0, y: 0, zIndex: 2 });
    });
  };

  // Initial Load
  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      // Initialize the active video src manually on mount
      const activeVid = card.querySelector(".active-vid") as HTMLVideoElement;
      if (activeVid) {
        const offset = [-2, -1, 0, 1, 2][i];
        activeVid.src = getVid(offset);
        if (i === 2) activeVid.play().catch(() => { });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

  // Handle Index Change (Animation)
  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const offset = [-2, -1, 0, 1, 2][i];
      const newSrc = getVid(offset);
      const isCenter = i === 2;

      animateVideo(card, newSrc, isCenter);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className={`w-full flex flex-col justify-center items-center py-0 md:py-8 ${backgroundColor} overflow-hidden md:min-h-[800px]`}>

      {/* <h2 className="text-3xl md:text-4xl font-serif text-[#1A3C34] mb-12 tracking-wide text-center">
        {heading}
      </h2> */}
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

      {/* Container: items-end for bottom alignment */}
      <div
        className="w-full md:w-[120%] flex justify-center items-end gap-3 md:gap-10 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >

        {/* Left Far */}
        <Card refIndex={0} size="sm" registerRef={registerRef} />

        {/* Left Mid */}
        <Card refIndex={1} size="md" registerRef={registerRef}>
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full hidden md:block  flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            {/* <ChevronLeft size={24} className="text-white" /> */}
            <Image src='/svgs/leftArrow.svg' alt="leftArrow" height={64} width={64} />
          </button>
        </Card>

        {/* Center */}
        <Card
          refIndex={2}
          size="lg"
          main
          registerRef={registerRef}
          onEnded={next} // Auto-slide on end
        >
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="absolute bottom-6 right-5 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-30"
          >
            {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" />}
          </button>
        </Card>

        {/* Right Mid */}
        <Card refIndex={3} size="md" registerRef={registerRef}>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full hidden md:block  flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <Image src='/svgs/rightArrow.svg' alt="rightArrow" height={74} width={74} />
          </button>
        </Card>

        {/* Right Far */}
        <Card refIndex={4} size="sm" registerRef={registerRef} />

      </div>

      {/* Progress Bar */}
      <div className=" hidden md:block  mt-12 w-[80%] md:w-[31rem] h-1 bg-[#ebe6e2] rounded-full relative overflow-hidden">
        <div
          className="absolute top-0 bottom-0 bg-[#165F41] rounded-2xl transition-all duration-500 ease-out"
          style={{
            left: `${(index / VIDEOS.length) * 100}%`,
            width: `${(1 / VIDEOS.length) * 100}%`
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
  onEnded,
}: CardProps) {
  const sizeMap = {
    sm: "hidden md:block md:w-[26vw] h-[70vh] opacity-80",
    md: "w-[18vw] md:w-[30vw] h-[45vh] md:h-[82vh]  ",
    lg: "w-[65vw] md:w-[34vw] h-[55vh] md:h-[90vh]  ",
  };


  return (
    <div
      ref={(el) => registerRef(refIndex, el)}
      className={`relative overflow-hidden transition-all  shadow-3xl duration-500 ${sizeMap[size]} bg-transparent `}
    >
      {/* Active Video - No src initially, set by JS */}
      <video
        className="absolute inset-0 w-full h-full object-cover active-vid"
        muted
        playsInline
        onEnded={main ? onEnded : undefined}
      />

      {/* Incoming Video - No src initially */}
      <video
        className="absolute inset-0 w-full h-full object-cover incoming-vid"
        muted
        playsInline
        onEnded={main ? onEnded : undefined}
      />

      {/* Dark Overlay for non-main cards */}
      {!main && (
        <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300" />
      )}

      {/* Content / Buttons */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto">
          {children}
        </div>
      </div>



    </div>

  );
}
