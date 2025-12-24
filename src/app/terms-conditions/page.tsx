import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HalfHeroSection from "@/components/sections/HalfHeroSection";
import Typography from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Padival Grand Hotel",
  description:
    "Read The Padival Grand Hotel's Terms and Conditions to understand the policies governing your use of our website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen flex flex-col relative  bg-[#F9F5EC]">
      <Header />

      <HalfHeroSection title="Terms Of Service" />

      {/* Content Section */}
    <section className="bg-[#F9F2E8] py-16 md:px-16 px-4 padding-left md:py-20 container">
        <div className="w-full max-w-8xl mx-auto ">
          <Typography variant="description" className="text-[#4A5568] text-base sm:text-lg font-normal leading-relaxed mb-10 sm:mb-12">
            These Terms and Conditions govern your use of this website. By accessing or browsing our site, you acknowledge that you have read, understood, and agreed to comply with the terms outlined below.
          </Typography>

          <div className="space-y-10 sm:space-y-12">

            {/* Use of the Website */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Use of the Website
              </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others. Any attempt to disrupt the site’s functionality or access unauthorized areas is strictly prohibited.
              </Typography>
            </div>

            {/* Intellectual Property */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Intellectual Property
              </Typography>

              <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed mb-4">
                All content on this website, including text, images, logos, and graphics, is the property of JK Group unless otherwise stated. You may not copy, distribute, or modify any material without prior written permission.
              </Typography>
              <ul className="list-disc list-inside text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed space-y-1 sm:space-y-2 ml-1 sm:ml-2">
                <li>Do not reproduce website content without authorization</li>
                <li>Do not claim ownership of any material provided on the site</li>
                <li>Do not use our branding or assets without written approval</li>
              </ul>

              <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed mt-4">
                Unauthorized use of intellectual property may result in legal action.
              </Typography>
            </div>

            {/* Limitation of Liability */}
            <div>
              <Typography variant="title2" className="font-semibold text-xl sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Limitation of Liability
              </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                While we strive to provide accurate and up-to-date information, we do not guarantee the completeness or reliability of content on this website. JK Group is not responsible for any damages arising from the use or inability to use the website.
              </Typography>
            </div>

            {/* Changes to Terms */}
            <div>
              <Typography variant="title2" className="text-xl sm:text-2xl  md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Changes to Terms
              </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                We may update or modify these Terms and Conditions at any time. Continued use of the website after such changes signifies your acceptance of the updated terms. Users are encouraged to review this page periodically.
              </Typography>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
