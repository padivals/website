'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { BlogPost } from '@/data/blogs';

import 'swiper/css';
import 'swiper/css/free-mode';

interface MobileRecentBlogsProps {
  relatedPosts: BlogPost[];
}

export default function MobileRecentBlogs({ relatedPosts }: MobileRecentBlogsProps) {
  if (relatedPosts.length === 0) return null;

  return (
    <div className="lg:hidden mt-12 mb-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 px-4 sm:px-6">
        <h2 className="font-serif text-[1.4rem] text-[#002117] font-semibold">
          Recent Insights
        </h2>
        <Link
          href="/blogs"
          className="font-sans text-[0.8rem] text-[#C5A028] font-medium uppercase tracking-wider"
        >
          View All
        </Link>
      </div>

      {/*
        Outer wrapper: clips the swiper so cards peeking off-screen don't
        cause horizontal scroll on the page. The negative margin + padding
        trick lets cards visually bleed to the edge while keeping the
        scroll container flush with the viewport.
      */}
      <div className="overflow-hidden w-full">
        <div className="pl-4 sm:pl-6">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={12}
            slidesPerView={1.15}
            freeMode={{ enabled: true, momentum: true }}
            grabCursor={true}
            /**
             * Do NOT use !overflow-visible here — it causes the swiper
             * container to bleed outside the page and break mobile layout.
             * Instead we let the outer wrapper handle clipping.
             */
            style={{ overflow: 'visible' }}
            breakpoints={{
              360: { slidesPerView: 1.2,  spaceBetween: 12 },
              480: { slidesPerView: 1.4,  spaceBetween: 14 },
              560: { slidesPerView: 1.65, spaceBetween: 16 },
              640: { slidesPerView: 2.1,  spaceBetween: 16 },
              768: { slidesPerView: 2.4,  spaceBetween: 20 },
            }}
          >
            {relatedPosts.map((related) => (
              <SwiperSlide key={related.id} style={{ height: 'auto' }}>
                <Link
                  href={`/blogs/${related.slug}`}
                  className="group flex flex-col h-full"
                  // Prevent swipe gesture from being swallowed as a tap
                  draggable={false}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#E8E2D5] rounded-sm mb-3">
                    <Image
                      src={related.cardImage}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 480px) 85vw, (max-width: 768px) 60vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                  
                  </div>

                  {/* Meta + Title */}
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-sans text-[0.7rem] text-[#888] font-medium uppercase tracking-wider">
                        {related.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#C5A028]/40 shrink-0" />
                      <span className="font-sans text-[0.7rem] text-[#888] font-medium">
                        {related.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-[1rem] text-[#1a1a1a] leading-[1.4] font-semibold group-hover:text-[#C5A028] transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}