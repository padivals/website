import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ReservationBar from "@/components/sections/ReservationBar";
import RoomDetailsSection from "@/components/sections/RoomDetailsSection";
import RoomImagesSection from "@/components/sections/RoomImagesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import OtherRoomsSection from "@/components/sections/OtherRoomsSection";
import { rooms } from "@/data/rooms";
import RelatedRooms from "@/components/sections/RelatedRooms";
import CommonAmenities from "@/components/sections/CommonAmenities";
import FoodAndDining from "@/components/sections/FoodAndDining";
import FAQSection from "@/components/sections/FAQSection";

export async function generateStaticParams() {
    return rooms.map((room) => ({
        slug: room.slug,
    }));
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
        <main className="min-h-screen flex flex-col relative pb-24 bg-white">
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
