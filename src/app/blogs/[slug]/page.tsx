import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileRecentBlogs from "@/components/blog/MobileRecentBlogs";
import MobileToC from "@/components/blog/MobileToC";
import { blogs, type BlogSection, type BlogPost } from "@/data/blogs";

/* ─── Static paths ─────────────────────────────────────── */
export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

/* ─── Dynamic metadata ──────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) return {};

  const baseUrl = "https://thepadivalgrand.com";
  const pageUrl = `${baseUrl}/blogs/${post.slug}`;
  const imageUrl = `${baseUrl}${post.heroImage}`;

  return {
    title: post.metaTitle || `${post.title} | The Padival Grand`,
    description: post.metaDescription || post.excerpt,
    keywords: [
      post.title,
      post.category,
      "The Padival Grand",
      "hotel in Puttur",
      "Puttur temple tourism",
      "Mahalingeshwara Temple",
      "Dakshina Kannada hotel",
      "pure veg hotel Puttur",
    ],
    authors: [{ name: post.author }],
    creator: "The Padival Grand",
    publisher: "The Padival Grand",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: pageUrl,
      siteName: "The Padival Grand",
      locale: "en_IN",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [imageUrl],
      creator: "@PadivalGrand",
    },
  };
}

/* ─── Content renderer ──────────────────────────────────── */
function renderSection(section: BlogSection, idx: number) {
  const generatedId = section.text
    ?.toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");

  const sectionId = section.id || generatedId;

  switch (section.type) {
    case "heading":
      return (
        <h2
          key={idx}
          id={sectionId}
          className="font-sans text-2xl md:text-[1.7rem] text-[#002117] font-semibold mt-10 mb-3 leading-snug"
        >
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h2
          key={idx}
          id={sectionId}
          className="font-sans text-xl md:text-2xl text-[#002117] font-semibold mt-10 mb-3 leading-snug"
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={idx}
          id={sectionId}
          className="font-sans text-base md:text-[1.05rem] text-[#002117] font-semibold mt-6 mb-2 leading-snug"
        >
          {section.text}
        </h3>
      );
    case "paragraph": {
      if (!section.text) return null;

      // Helper to render links, phone numbers, and emails
      const renderLinks = (inputText: string) => {
        const linkParts = inputText.split(/(\d{5}\s\d{5}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}|\*[^*|]+\|[^*]+\*)/g);
        return linkParts.map((linkPart, j) => {
          if (!linkPart) return null;

          // Handle *label|url* links
          if (linkPart.startsWith("*") && linkPart.endsWith("*") && linkPart.includes("|")) {
            const [label, url] = linkPart.slice(1, -1).split("|");
            return (
              <a key={j} href={url} target="_blank" rel="noopener noreferrer" className="text-[#C5A028] font-medium hover:underline">
                {label}
              </a>
            );
          }

          // Handle phone numbers
          if (/^\d{5}\s\d{5}$/.test(linkPart)) {
            return (
              <span key={j} className="inline-flex items-center gap-1.5 align-middle">
                <Phone size={13} className="text-[#C5A028]" />
                <a href={`tel:+91${linkPart.replace(/\s/g, "")}`} className="text-[#C5A028] font-medium hover:underline">
                  {linkPart}
                </a>
              </span>
            );
          }

          // Handle emails
          if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}/.test(linkPart)) {
            return (
              <span key={j} className="inline-flex items-center gap-1.5 align-middle ml-4 sm:ml-6">
                <Mail size={13} className="text-[#C5A028]" />
                <a href={`mailto:${linkPart}`} className="text-[#C5A028] font-medium hover:underline">
                  {linkPart}
                </a>
              </span>
            );
          }

          return linkPart;
        });
      };

      // First pass: Split by bold text
      const boldParts = section.text.split(/(\*\*[\s\S]+?\*\*)/g);

      return (
        <p
          key={idx}
          className="font-sans text-[0.875rem] text-[#012210] leading-[1.85] mb-4 whitespace-pre-line"
        >
          {boldParts.map((part, i) => {
            if (!part) return null;

            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={i} className="font-bold text-[#002117]">
                  {renderLinks(part.slice(2, -2))}
                </strong>
              );
            }

            return renderLinks(part);
          })}
        </p>
      );
    }
    case "list":
      return (
        <ul key={idx} className="space-y-1 mb-4 pl-0">
          {section.items?.map((item, i) => (
            <li
              key={i}
              className="font-sans text-[0.875rem] text-[#012210] leading-relaxed"
            >
              - {item}
            </li>
          ))}
        </ul>
      );
    case "bulletList":
      return (
        <ul key={idx} className="list-disc list-outside space-y-2 mb-4 pl-5">
          {section.items?.map((item, i) => (
            <li
              key={i}
              className="font-sans text-[0.875rem] text-[#012210] leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={idx} className="my-6 overflow-x-auto">
          {section.text && (
            <p className="font-sans text-[0.8rem] font-semibold uppercase tracking-wide text-[#555] mb-2">
              {section.text}
            </p>
          )}
          <table className="w-full border-collapse text-[0.875rem] font-sans">
            <thead>
              <tr className="bg-[#012219] text-white">
                {section.tableData?.headers.map((h, i) => (
                  <th
                    key={i}
                    className="text-left px-4 py-2 font-medium tracking-wide text-sm"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.tableData?.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-[#F0EBE1]" : "bg-[#F9F5EC]"}
                >
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2 text-[#333]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="my-5 border-l-2 border-[#C5A028] ml-0 md:ml-12 pl-4 py-1"
        >
          <p className="font-sans text-[0.875rem] text-[#444] italic leading-relaxed mb-1">
            "{section.text}"
          </p>
          {section.quoteAuthor && (
            <cite className="font-sans text-[0.78rem] text-[#777] not-italic font-medium">
              — {section.quoteAuthor}
            </cite>
          )}
        </blockquote>
      );
    case "rating":
      return (
        <div
          key={idx}
          className="my-8 p-4 border border-[#002117]/20 rounded-lg flex flex-col sm:flex-row items-center gap-5 max-w-lg bg-transparent"
        >
          <div className="flex flex-col items-center justify-center shrink-0 bg-[#002117]/80 w-32 py-4 rounded-md text-white">
            <span className="font-sans text-2xl font-semibold leading-none mb-1.5">{section.ratingValue}</span>
            <span className="text-sm tracking-[0.2em] opacity-90">{section.ratingStars}</span>
          </div>
          <div className="w-px h-12 bg-[#002117]/20 hidden sm:block"></div>
          <div className="w-full h-px bg-[#002117]/20 block sm:hidden my-1"></div>
          <div className="text-center sm:text-left pr-2">
            <p className="font-sans text-[0.875rem] text-[#444] leading-relaxed italic">
              {section.ratingSubtitle}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
}


/* ─── Page ──────────────────────────────────────────────── */
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogs.filter((p) => p.id !== post.id).slice(0, 3);

  const baseUrl = "https://thepadivalgrand.com";
  const pageUrl = `${baseUrl}/blogs/${post.slug}`;
  const imageUrl = `${baseUrl}${post.heroImage}`;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "The Padival Grand",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
    articleSection: post.category,
    inLanguage: "en-IN",
    keywords: [
      post.title,
      post.category,
      "hotel in Puttur",
      "Puttur temple tourism",
      "Mahalingeshwara Temple",
    ].join(", "),
  };

  const jsonLd = post.schema || defaultJsonLd;

  return (
    <main className="min-h-screen flex flex-col bg-[#F9F5EC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ── Full-width Hero Image ─────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[50vh] md:h-auto md:aspect-[16/6]">
          {/* PC Image */}
          <Image
            src={post.pcImage}
            alt={post.title}
            fill
            className="hidden md:block object-cover"
            priority
            sizes="100vw"
          />
          {/* Mobile Image */}
          <Image
            src={post.mobileImage}
            alt={post.title}
            fill
            className="block md:hidden object-cover "
            priority
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ── Body: Sidebar + Article ───────────────────────── */}
      <section className="flex-1 py-10 md:py-14">
        <div className="w-full px-4 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-stretch lg:items-start">

            {/* ══════════ LEFT SIDEBAR ══════════ */}
            <aside data-lenis-prevent className="w-full lg:w-[230px] xl:w-[250px] shrink-0 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto space-y-8 pb-4 pr-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#C5A028]/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#C5A028]/60 transition-all duration-300">

              {/* Table of Contents box */}
              <div className="bg-[#F0EBE1] p-5  md:block hidden">
                <p className="font-serif text-[1rem] text-[#1a1a1a] font-semibold mb-4">
                  Table of content
                </p>
                <ol className="space-y-[10px] list-none">
                  {post.tableOfContents.map((item, i) => (
                    <li key={item.id} className="flex gap-2">
                      <span className="font-sans text-[0.78rem] text-[#444] shrink-0">
                        {i + 1}.
                      </span>
                      <h2 className="-mt-1">
                        <a
                          href={`#${item.id}`}
                          className="font-sans text-[0.78rem] text-[#222] hover:text-[#C5A028] transition-colors leading-snug cursor-pointer"
                        >
                          {item.label}
                        </a>
                      </h2>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Recent Blogs - Desktop Only */}
              {relatedPosts.length > 0 && (
                <div className="bg-[#F0EBE1] p-5 hidden lg:block">
                  <p className="font-serif text-[1rem] text-[#1a1a1a] font-semibold mb-4">
                    Recent Blogs
                  </p>
                  <ol className="space-y-5 list-none">
                    {relatedPosts.map((related, i) => (
                      <li key={related.id}>
                        <Link href={`/blogs/${related.slug}`} className="group flex flex-col gap-2">
                          {/* Thumbnail */}
                          <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#ddd]">
                            <Image
                              src={related.cardImage}
                              alt={related.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="250px"
                            />
                          </div>
                          {/* Number + Title */}
                          <div className="flex gap-2">
                            <span className="font-sans text-[0.78rem] text-[#444] shrink-0">
                              {i + 1}.
                            </span>
                            <p className="font-sans text-[0.78rem] text-[#222] group-hover:text-[#1D8842] transition-colors leading-snug">
                              {related.title}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </aside>

            {/* ══════════ MAIN ARTICLE ══════════ */}
            <article className="flex-1 min-w-0 w-full">

              {/* Breadcrumb — inside article, above title */}
              <nav className="flex items-center gap-2 font-sans text-sm text-[#555] mb-5 flex-wrap">
                <Link href="/" className="uppercase hover:text-[#1D8842] transition-colors tracking-wide">
                  Home
                </Link>
                <span className="text-[#888]">›</span>
                <Link href="/blogs" className="uppercase hover:text-[#1D8842] transition-colors tracking-wide">
                  Blog
                </Link>
                <span className="text-[#888]">›</span>
                <span className="text-[#333] truncate max-w-[260px] md:max-w-[420px]">
                  {post.breadcrumb}
                </span>
              </nav>

              {/* H1 Title */}
              <h1 className="font-serif text-[1.95rem] md:text-4xl lg:text-[2.5rem] text-[#002117] font-semibold leading-[1.2] mb-5 lg:max-w-[800px]">
                {post.title}
              </h1>

              {/* Date + Author */}
              <div className="flex items-center gap-8 font-sans text-md text-[#012210] mb-6">
                <span>{post.date}</span>
                <span>By : {post.author}</span>
              </div>

              {/* Intro / excerpt */}
              <p className="font-sans text-[0.875rem] text-[#012210] leading-[1.85] mb-8 lg:max-w-[750px]">
                {post.excerpt}
              </p>

              {/* Table of Contents - Mobile Only */}
              <MobileToC items={post.tableOfContents} />

              {/* Article body */}
              <div className="lg:max-w-[750px]">
                {post.content.map((section, idx) => renderSection(section, idx))}
              </div>

              {/* CTA strip */}
              {/* <div className="mt-14 p-6 bg-[#012219] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-[720px]">
                <div>
                  <p className="font-serif text-lg font-semibold mb-1">
                    Plan Your Stay in Puttur
                  </p>
                  <p className="font-sans text-sm text-white/70">
                    Book a room at The Padival Grand — central location, pure veg dining & clean rooms.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-block font-sans text-sm font-semibold tracking-wide px-6 py-3 bg-[#C5A028] text-white hover:bg-[#D4AF37] transition-colors duration-200"
                >
                  Book Now
                </Link>
              </div> */}

              {/* Back link */}
              <div className="mt-8">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 font-sans text-sm text-[#555] hover:text-[#1D8842] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  All Blog Posts
                </Link>
              </div>
            </article>

            {/* Recent Blogs - Mobile Swiper (full-width, below article, mobile only) */}
            <MobileRecentBlogs relatedPosts={relatedPosts as BlogPost[]} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
