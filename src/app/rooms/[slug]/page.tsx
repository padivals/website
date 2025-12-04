import type { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import RoomDetailsSection from "@/components/sections/RoomDetailsSection";
import RoomImagesSection from "@/components/sections/RoomImagesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import OtherRoomsSection from "@/components/sections/OtherRoomsSection";
import { rooms } from "@/data/rooms";

export async function generateStaticParams() {
    return rooms.map((room) => ({
        slug: room.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const room = rooms.find((r) => r.slug === slug);

    if (!room) {
        return {
            title: "Room Not Found | The Padival Grand Hotel",
            description: "The requested room could not be found.",
        };
    }

    return {
        title: `${room.title} | The Padival Grand Hotel Puttur`,
        description: room.description,
        keywords: [
            room.title,
            `${room.title} Puttur`,
            "hotel room Puttur",
            "luxury accommodation",
            "Padival Grand Hotel",
        ],
        openGraph: {
            title: `${room.title} | The Padival Grand Hotel Puttur`,
            description: room.description,
            url: `https://padivals-megamind.vercel.app//rooms/${slug}`,
            images: [
                {
                    url: room.heroImage,
                    width: 1200,
                    height: 630,
                    alt: room.title,
                },
            ],
        },
    };
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const room = rooms.find((r) => r.slug === slug);

    if (!room) {
        notFound();
    }

    // Fallback for features if not defined in data (since we only updated one room)
    const features = room.features || room.details.amenities;

    return (
        <main className="min-h-screen flex flex-col relative  bg-white">
            <Header />
            <PageHero
                title={room.title}
                subtitle="Accommodation"
                image={room.heroImage}
            />

            <RoomDetailsSection
                title={room.title}
                description={room.description}
                features={features}
                image={room.heroImage}
            />

            {/* Additional Sections */}
            {room.images && <RoomImagesSection images={room.images} />}
            <TestimonialsSection />
            <ContactSection />
            <OtherRoomsSection rooms={rooms} currentSlug={slug} />

            <Footer />
        </main>
    );
}
