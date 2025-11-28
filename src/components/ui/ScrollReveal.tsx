"use client";

import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    if (typeof children !== "string") return children;

    return children.split(/(\s+)/).map((word, index) =>
      /^\s+$/.test(word) ? (
        word
      ) : (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      )
    );
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef?.current ? scrollContainerRef.current : window;

    const rotationTrigger = gsap.fromTo(
      el,
      { rotate: baseRotation, transformOrigin: "0% 50%" },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const words = el.querySelectorAll(".word");

    const opacityTrigger = gsap.fromTo(
      words,
      { opacity: baseOpacity },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    let blurTrigger: ScrollTrigger | null = null;

    if (enableBlur) {
      blurTrigger = gsap.fromTo(
        words,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: "blur(0px)",
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }

    return () => {
      rotationTrigger.kill();
      opacityTrigger.kill();
      blurTrigger?.kill();
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <span
        className={` leading-[1.5]  ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollReveal;
