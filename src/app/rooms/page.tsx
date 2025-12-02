import React from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ReservationBar from "@/components/sections/ReservationBar";
import { rooms } from "@/data/rooms";
import RoomCard from "@/components/ui/RoomCard";
import CommonAmenities from "@/components/sections/CommonAmenities";
import FoodAndDining from "@/components/sections/FoodAndDining";
import FAQSection from "@/components/sections/FAQSection";

export default function RoomsPage() {
    return (
        <main className="min-h-screen flex flex-col relative  bg-[#F9F5EC]">
            <Header />
            <PageHero
                underlineClass="hidden"
                image="/roomsImg/bgImg1.png"
            />

            <section className="container mx-auto md:px-16 px-6 py-20">
                {/* Desktop grid (visible md+) */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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

                {/* Mobile swiper (visible only on small screens) */}
                <div className="md:hidden">
                    <div className="flex gap-4 overflow-x-auto px-4 py-2 snap-x snap-mandatory scrollbar-hide">
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
                </div>
            </section>

            <CommonAmenities />
            <FoodAndDining />
            <FAQSection />
            <section className="hidden md:block">
                 <ReservationBar />
            </section>
           
            <Footer />
        </main>
    );
}
