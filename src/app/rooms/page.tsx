import React from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ReservationBar from "@/components/sections/ReservationBar";
import { rooms } from "@/data/rooms";
import RoomCard from "@/components/ui/RoomCard";

export default function RoomsPage() {
    return (
        <main className="min-h-screen flex flex-col relative pb-24 bg-[#F9F5EC]">
            <Header />
            <PageHero
                title="Our Rooms"
                subtitle="Accommodation"
            />

            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {rooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            id={room.id}
                            title={room.title}
                            description={room.description}
                            slug={room.slug}
                            heroImage={room.heroImage}
                            imageColor={room.imageColor}
                        />
                    ))}
                </div>
            </section>

            <ReservationBar />
            <Footer />
        </main>
    );
}
