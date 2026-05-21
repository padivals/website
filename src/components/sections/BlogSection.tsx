'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import { blogs } from '@/data/blogs';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

export default function BlogSection() {
  const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);

  return (
    <section className="bg-[#FDFBF7] py-16 px-6 md:px-12 lg:px-18 w-full font-sans">
      <div className=" mx-auto">

        {/* add a top divider line */}
        <div className="w-full h-px bg-[#165F41] mb-4 mt-8 md:mt-0 "></div>
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10 py-12">
          <h2 className="text-4xl md:text-5xl lg2:text-7xl font-semibold text-[#1A362D] font-serif tracking-tight">
            Blog
          </h2>
          <Link 
            href="/blogs" 
            className="text-sm md:text-base text-[#1A362D]/70 hover:text-[#1A362D] transition-colors duration-300 pb-1"
          >
            View More
          </Link>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[FreeMode, Mousewheel]}
          spaceBetween={24}
          slidesPerView={1.2}
          freeMode={true}
          mousewheel={{
            forceToAxis: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          {sortedBlogs.map((post) => (
            <SwiperSlide key={post.id} className="h-auto">
              <Link href={`/blogs/${post.slug}`} className="flex flex-col gap-5 group">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                  <Image
                    src={post.cardImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3 pr-4">
                  <h3 className="text-xl md:text-2xl text-[#002117] font-serif font-medium leading-snug group-hover:text-[#012210] transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-[16px] text-[#012210] leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}