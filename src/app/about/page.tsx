import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContentSection from "@/components/sections/ContentSection";
import ReservationBar from "@/components/sections/ReservationBar";
import WhatToExpectSection from "@/components/sections/WhatToExpectSection";
import FAQSection from "@/components/sections/FAQSection";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col relative pb-24 bg-[#F9F5EC]">
            <Header />

            {/* Custom Hero Section */}
            <section className="relative bg-[#1B4D3E] pt-40 pb-20 px-6 overflow-hidden">
                {/* Background Pattern (Placeholder) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    {/* You would typically put an SVG or Image of the leaf pattern here */}
                    <div className="absolute right-0 bottom-0 w-1/2 h-full bg-[url('/leaf-pattern.png')] bg-no-repeat bg-contain bg-right-bottom"></div>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col gap-2 mb-12">
                        {/* Breadcrumb-like or small label if needed, but screenshot shows just title */}
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">
                        Who We Are
                    </h1>
                    <p className="text-white/60 text-lg uppercase tracking-widest font-light">
                        History
                    </p>
                </div>
            </section>

            {/* History Section */}
            <ContentSection
                title="The Padival Grand Hotel"
                description={
                    <>
                        <p className="mb-6">
                            The Padival Grand Hotel was established by Mahaveer Ventures as a place where comfort, familiarity and thoughtful hospitality come together in the heart of Puttur. Created with the intent to offer a dependable and naturally welcoming stay, it reflects the steady and warm character the group is known for.
                        </p>
                        <p className="mb-6">
                            More than a lodging space, The Padival Grand Hotel is a homely stop for travellers, families and visitors who value simplicity carried out with care. From neatly maintained rooms to subtle textures inspired by the local landscape, every detail is chosen with intention.
                        </p>
                        <p>
                            Guided by the values of Mahaveer Ventures, the hotel upholds sincerity, rooted hospitality and attentive service. For us, being a hotel means offering a calm place where people can pause, gather and feel at ease, creating a gentle connection between everyday Puttur and those who come to visit.
                        </p>
                    </>
                }
                image="/hero-bg.png" // Placeholder
                imagePosition="right"
            />

            {/* Ventures Section */}
            <ContentSection
                title="Mahaveer Ventures"
                description={
                    <>
                        <p className="mb-6">
                            Mahaveer Ventures is the steady presence that anchors The Padival Grand Hotel. As the parent group, it brings the clarity, structure, and long-term vision that shape the way we operate. The group's identity is intentionally minimal and refined, built on trust, consistency, and a quiet confidence that lets each of its ventures shine.
                        </p>
                        <p>
                            Guided by these values, Mahaveer Ventures provides the foundation that allows The Padival Grand to deliver hospitality that feels dependable, warm, and thoughtfully crafted. Every aspect of the hotel is strengthened by the group's commitment to quality, discipline, and purposeful design, ensuring that our guests experience comfort supported by an organisation that believes in doing things with care and intention.
                        </p>
                    </>
                }
                image="/hero-bg.png" // Placeholder (Logo placeholder in screenshot)
                imagePosition="left"
            />

            <WhatToExpectSection />

            <FAQSection />

            <ReservationBar />
            <Footer />
        </main>
    );
}
