import React from "react";
import Header from "@/components/layout/Header";
import Link from "next/link";
import Image from "next/image";

export default function ThankYouPage() {
    return (
        <main className="min-h-screen flex flex-col relative text-white overflow-hidden">
            <Header />

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/Herosection.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Overlay for better text visibility */}
                {/* <div className="absolute inset-0 bg-black/40"></div> */}
            </div>

            <div className="flex-grow flex flex-col items-center justify-center text-center px-6 relative z-10">
                <h1 className="font-serif font-semibold text-5xl md:text-7xl mb-8 drop-shadow-lg text-[#F9F2E8]">
                    Thank You
                </h1>
                <p className="font-sans font-normal text-lg md:text-xl leading-relaxed max-w-3xl mb-12 opacity-90 text-[#F9F2E8]">
                    Thank you for choosing to stay with us at The Padival Grand Hotel. We look forward to welcoming you and ensuring your time here is comfortable, simple and well cared for. If you need any assistance before your arrival, our team is here to help.
                </p>

                <Link
                    href="/"
                    className="text-white underline underline-offset-8 decoration-1 hover:opacity-80 transition-opacity text-sm tracking-widest uppercase text-[#F9F2E8]"
                >
                    Go Back to Homepage
                </Link>
            </div>
        </main>
    );
}
