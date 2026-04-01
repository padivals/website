import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContentSection from "@/components/sections/ContentSection";
import ReservationBar from "@/components/sections/ReservationBar";
import WhatToExpectSection from "@/components/sections/WhatToExpectSection";
import FAQSection from "@/components/sections/FAQSection";
import { generalFaqs } from "@/data/faqs";
import HalfHeroSection from "@/components/sections/HalfHeroSection";

export const metadata: Metadata = {
    title: "About the Padival Grand | Hotel in Puttur Karnataka",
    description:
        "Learn about The Padival Grand, a hotel in Puttur offering comfortable rooms, pure veg dining and event spaces for families, travellers and celebrations. ",

    openGraph: {
        title: "Learn about The Padival Grand, a hotel in Puttur offering comfortable rooms, pure veg dining and event spaces for families, travellers and celebrations. ",
        description:
            "Learn about The Padival Grand, a hotel in Puttur offering comfortable rooms, pure veg dining and event spaces for families, travellers and celebrations. ",
        url: "https://thepadivalgrand.com/about",
    },
    twitter: {
        card: "summary_large_image",
        title: "About the Padival Grand | Hotel in Puttur  ",
        description:
            "Get to know The Padival Grand, offering reliable stays, pure veg dining and event spaces in Puttur for families, travellers and gatherings.  ",
    },
    alternates: {
        canonical: "https://thepadivalgrand.com/about",
    },
};

import JsonLd from "@/components/seo/JsonLd";

export default function AboutPage() {
    const hotelSchema = {
        "@context": "https://schema.org",

        "@type": "AboutPage",

        "@id": "https://thepadivalgrand.com/about#webpage",

        "url": "https://thepadivalgrand.com/about",

        "name": "About Us | The Padival Grand Hotel",

        "description": "Learn about The Padival Grand Hotel in Puttur, its hospitality approach, and the values of Mahaveer Ventures behind the property.",

        "isPartOf": {

            "@id": "https://thepadivalgrand.com/#website"

        },

        "about": [

            {

                "@id": "https://thepadivalgrand.com/#hotel"

            },

            {

                "@id": "https://thepadivalgrand.com/about#organization"

            }

        ],

        "mainEntity": {

            "@id": "https://thepadivalgrand.com/#hotel"

        },

        "publisher": {

            "@id": "https://thepadivalgrand.com/#hotel"

        },

        "inLanguage": "en"
    };
    const faqSchema = {
        "@context": "https://schema.org",

        "@type": "FAQPage",

        "@id": "https://thepadivalgrand.com/about#faq",

        "mainEntity": [

            {

                "@type": "Question",

                "name": "What is The Padival Grand known for?",

                "acceptedAnswer": {

                    "@type": "Answer",

                    "text": "The Padival Grand is known as a hotel in Puttur offering comfortable rooms, pure vegetarian dining and well-maintained spaces for stays, gatherings and events."

                }

            },

            {

                "@type": "Question",

                "name": "What types of reservations can I make at The Padival Grand?",

                "acceptedAnswer": {

                    "@type": "Answer",

                    "text": "You can book hotel rooms for short or extended stays, reserve dining at the pure vegetarian restaurant, or arrange spaces for small events and family gatherings in Puttur."

                }

            },

            {

                "@type": "Question",

                "name": "How early should I book an event or celebration?",

                "acceptedAnswer": {

                    "@type": "Answer",

                    "text": "It is best to book your event or celebration in advance to ensure availability, especially during weekends and peak seasons in Puttur."

                }

            },

            {

                "@type": "Question",

                "name": "Do you offer on-site parking for guests?",

                "acceptedAnswer": {

                    "@type": "Answer",

                    "text": "Yes, The Padival Grand provides on-site parking for guests visiting for stays, dining or events."

                }

            },

            {

                "@type": "Question",

                "name": "Can I request special arrangements for my stay or event?",

                "acceptedAnswer": {

                    "@type": "Answer",

                    "text": "Yes, guests can request special arrangements for their stay or event, and the team will do its best to accommodate them."

                }

            }

        ]
    }
    return (
        <main className="min-h-screen flex flex-col relative  bg-[#F9F5EC]">
            <JsonLd data={hotelSchema} id="about-schema" />
            <JsonLd data={faqSchema} id="about-schema" />
            <Header />

            <HalfHeroSection title={<>More Than a Hotel in Puttur<br /> A Better Stay </>} />

            <section className="md:px-16 px-6">

                {/* History Section */}
                <ContentSection
                    title={<>Hotel in Puttur Built on <br /> Comfort & Trust</>}
                    description={
                        <>
                            <p className="mb-6">
                                The Padival Grand was created by Mahaveer Ventures as a hotel in Puttur where comfort feels natural and every stay feels easy to trust. Located in the heart of the town, it offers a dependable option among hotels in Puttur Karnataka for travellers, families and visitors looking for a stay that simply works.                             </p>
                            <p className="mb-6 hidden md:block">
                                More than just a place to stay, The Padival Grand focuses on what truly matters to clean, well-maintained hotel rooms, calm surroundings and a sense of familiarity that makes every stay in Puttur comfortable and effortless. Every space is shaped with intention, reflecting a balance of simplicity, thoughtful design, and reliable accommodation.                            </p>
                            <p>
                                Guided by the values of Mahaveer Ventures, the hotel stands for sincerity, consistency, and attentive service. For us, hospitality is not about excess, but about creating a place where people can pause, gather and feel at ease a hotel in Puttur that offers comfort, clarity and a stay you can return to with confidence.                             </p>
                        </>
                    }
                    image="/hero-bg.png" // Placeholder
                    imagePosition="right"
                />

                {/* Ventures Section */}
                <ContentSection
                    title={<>Mahaveer Ventures: The Group Behind Our Hospitality</>}
                    description={
                        <>
                            <p className="mb-6">
                                Mahaveer Ventures is the foundation behind The Padival Grand, bringing the clarity, structure and long-term vision that shape how we deliver hospitality in Puttur. As the parent group, it ensures that every aspect of the hotel from rooms to service reflects consistency, discipline and thoughtful execution.                             </p>
                            <p className="mb-6 hidden md:block">
                                Built on trust and steady growth, Mahaveer Ventures follows a simple philosophy: do things with care and do them right every time. This approach allows The Padival Grand to offer a dependable hotel experience in Puttur Karnataka, where guests can expect reliable accommodation, well-maintained hotel rooms and service that feel natural and reassuring.                             </p>
                            <p>
                                More than just an organization behind the scenes, Mahaveer Ventures plays an active role in maintaining standards that guests can rely on. Its commitment to quality and purposeful design ensures that every stay in Puttur feels supported by a system that values consistency, comfort, and long-term trust.


                            </p>
                        </>
                    }
                    image="/mahaveerImg.png" // Placeholder (Logo placeholder in screenshot)
                    imagePosition="left"
                />

                <WhatToExpectSection />


            </section>
            <FAQSection
                faqs={generalFaqs}
                heading="Reliable Help for Your Inquiries"
            />

            {/* <section className="hidden md:block">
                <ReservationBar />


            </section> */}

            <Footer />
        </main>
    );
}
