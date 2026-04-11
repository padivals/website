import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogs } from "@/data/blogs";
import JsonLd from "@/components/seo/JsonLd";
import HalfHeroSection from "@/components/sections/HalfHeroSection";

export const metadata: Metadata = {
  title: "Blog | Travel Tips & Hotel Guides | The Padival Grand, Puttur",
  description:
    "Read travel guides, temple tour tips, dining insights, and hotel stories from The Padival Grand — your trusted stay in Puttur, Karnataka.",
  openGraph: {
    title: "Blog | The Padival Grand Hotel, Puttur",
    description:
      "Stories, tips, and guides for travellers visiting Puttur. Explore our blog for temple guides, dining updates, and local travel tips.",
    url: "https://thepadivalgrand.com/blogs",
  },
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://thepadivalgrand.com/blogs#blog",
    "name": "Blog | Travel Tips & Hotel Guides | The Padival Grand, Puttur",
    "description": "Read travel guides, temple tour tips, dining insights, and hotel stories from The Padival Grand — your trusted stay in Puttur, Karnataka.",
    "url": "https://thepadivalgrand.com/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "The Padival Grand",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thepadivalgrand.com/svgs/mainLogo.svg"
      }
    },
    "blogPost": blogs.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.metaTitle || post.title,
      "url": `https://thepadivalgrand.com/blogs/${post.slug}`,
      "description": post.metaDescription || post.excerpt,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "image": `https://thepadivalgrand.com${post.heroImage}`
    }))
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F9F5EC]">
      <JsonLd data={blogSchema} id="blog-listing-schema" />
      <HalfHeroSection
        title="Blogs"
      />

      {/* ── Hero / Page Title ─────────────────────────── */}
      {/* <section className="relative pt-32 pb-14 md:pt-44 md:pb-20 bg-[#F9F5EC]">
 
      </section> */}

      {/* ── Blog Grid ─────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-[#F9F5EC]">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogs.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col bg-[#F9F5EC] overflow-hidden transition-shadow duration-300"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {/* PC Image */}
                  <Image
                    src={post.pcImage}
                    alt={post.title}
                    fill
                    className="hidden md:block object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Mobile Image */}
                  <Image
                    src={post.mobileImage}
                    alt={post.title}
                    fill
                    className="block md:hidden object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="100vw"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 pt-10 ">
                  {/* Category badge */}
                  {/* <span className="inline-block text-xs font-sans font-semibold uppercase tracking-widest text-[#C5A028] mb-3">
                    {post.category}
                  </span> */}

                  {/* Title */}
                  <h2 className="font-serif text-[1.2rem] md:text-3xl leading-snug text-[#012219] font-semibold mb-3 group-hover:text-[#1D8842] transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-sans text-[0.875rem] md:text-[0.9rem] text-[#012219]/70 leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#012219]/10">
                    <span className="font-sans text-xs text-[#012219]/50">{post.date}</span>
                    <span className="font-sans text-xs text-[#012219]/50">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}