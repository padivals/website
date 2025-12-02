
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HalfHeroSection from "@/components/sections/HalfHeroSection";

export default function TermsConditionsPage() {
    return (
        <main className="min-h-screen flex flex-col relative  bg-[#F9F5EC]">
            <Header />

            <HalfHeroSection title="Terms Of Service" />

            {/* Content Section */}
          <section className="bg-[#F9F2E8] py-16 px-6 md:px-16  md:py-20">
  <div className="w-full max-w-8xl mx-auto px-6 sm:px-6 md:px-8">
    <p className="text-[#4A5568] text-base sm:text-lg font-light leading-relaxed mb-10 sm:mb-12">
      These Terms and Conditions govern your use of this website. By accessing or browsing our site, you acknowledge that you have read, understood, and agreed to comply with the terms outlined below.
    </p>

    <div className="space-y-10 sm:space-y-12">
      
      {/* Use of the Website */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
          Use of the Website
        </h2>
        <p className="text-[#4A5568] text-sm sm:text-base font-light leading-relaxed">
          You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others. Any attempt to disrupt the site’s functionality or access unauthorized areas is strictly prohibited.
        </p>
      </div>

      {/* Intellectual Property */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
          Intellectual Property
        </h2>

        <p className="text-[#4A5568] text-sm sm:text-base font-light leading-relaxed mb-4">
          All content on this website, including text, images, logos, and graphics, is the property of JK Group unless otherwise stated. You may not copy, distribute, or modify any material without prior written permission.
        </p>

        <ul className="list-disc list-inside text-[#4A5568] text-sm sm:text-base font-light leading-relaxed space-y-1 sm:space-y-2 ml-1 sm:ml-2">
          <li>Do not reproduce website content without authorization</li>
          <li>Do not claim ownership of any material provided on the site</li>
          <li>Do not use our branding or assets without written approval</li>
        </ul>

        <p className="text-[#4A5568] text-sm sm:text-base font-light leading-relaxed mt-4">
          Unauthorized use of intellectual property may result in legal action.
        </p>
      </div>

      {/* Limitation of Liability */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
          Limitation of Liability
        </h2>
        <p className="text-[#4A5568] text-sm sm:text-base font-light leading-relaxed">
          While we strive to provide accurate and up-to-date information, we do not guarantee the completeness or reliability of content on this website. JK Group is not responsible for any damages arising from the use or inability to use the website.
        </p>
      </div>

      {/* Changes to Terms */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
          Changes to Terms
        </h2>
        <p className="text-[#4A5568] text-sm sm:text-base font-light leading-relaxed">
          We may update or modify these Terms and Conditions at any time. Continued use of the website after such changes signifies your acceptance of the updated terms. Users are encouraged to review this page periodically.
        </p>
      </div>
    </div>
  </div>
</section>


            <Footer />
        </main>
    );
}
