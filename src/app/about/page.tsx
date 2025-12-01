import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContentSection from "@/components/sections/ContentSection";
import ReservationBar from "@/components/sections/ReservationBar";
import WhatToExpectSection from "@/components/sections/WhatToExpectSection";
import FAQSection from "@/components/sections/FAQSection";
import HalfHeroSection from "@/components/sections/HalfHeroSection";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col relative  bg-[#F9F5EC]">
            <Header />

            <HalfHeroSection title="Who We Are" />

          <section className="md:px-16 px-6">

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
                            Mahaveer Ventures is the steady presence that anchors The Padival Grand Hotel. As the parent group, it brings the clarity, structure, and long-term vision that shape the way we operate. The group&apos;s identity is intentionally minimal and refined, built on trust, consistency, and a quiet confidence that lets each of its ventures shine.
                        </p>
                        <p>
                            Guided by these values, Mahaveer Ventures provides the foundation that allows The Padival Grand to deliver hospitality that feels dependable, warm, and thoughtfully crafted. Every aspect of the hotel is strengthened by the group&apos;s commitment to quality, discipline, and purposeful design, ensuring that our guests experience comfort supported by an organisation that believes in doing things with care and intention.
                        </p>
                    </>
                }
                image="/mahaveerImg.png" // Placeholder (Logo placeholder in screenshot)
                imagePosition="left"
            />

            <WhatToExpectSection />

            
          </section>
          <FAQSection />
          
          <section className="hidden md:block">
            {/* <ReservationBar /> */}


          </section>

            <Footer />
        </main>
    );
}
