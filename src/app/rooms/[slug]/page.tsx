import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ReservationBar from "@/components/sections/ReservationBar";
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

    return (
        <main className="min-h-screen flex flex-col relative pb-24 bg-[#F9F5EC]">
            <Header />
            <PageHero
                title={room.title}
                subtitle="Accommodation"
                image={room.heroImage}
            />

            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Description */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-[#0F2A1D] mb-6">
                            Overview
                        </h2>
                        <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                            {room.description}
                        </p>

                        <h3 className="text-2xl font-serif text-[#0F2A1D] mb-4">
                            Details
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="font-semibold w-24">Size:</span>
                                <span>{room.details.size}</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="font-semibold w-24">Occupancy:</span>
                                <span>{room.details.occupancy}</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="font-semibold w-24">Bed:</span>
                                <span>{room.details.bed}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Amenities */}
                    <div className="bg-white p-8 border border-[#A3B19C]/30 shadow-sm">
                        <h3 className="text-2xl font-serif text-[#0F2A1D] mb-6">
                            Amenities
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {room.details.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-600">
                                    <span className="text-[#1B4D3E]">•</span>
                                    <span>{amenity}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <button className="w-full bg-[#1B4D3E] text-white py-4 px-8 uppercase tracking-widest hover:bg-[#143a2f] transition-colors">
                                Book This Room
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Rooms Section */}
            <section className="bg-white py-20 border-t border-[#A3B19C]/20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif text-[#0F2A1D] mb-12 text-center">
                        More Rooms
                    </h2>
                    <RelatedRooms rooms={rooms} />
                </div>
            </section>

            <CommonAmenities />

            <FoodAndDining />

            <FAQSection />

            <ReservationBar />
            <Footer />
        </main>
    );
}
