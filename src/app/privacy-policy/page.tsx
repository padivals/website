import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HalfHeroSection from "@/components/sections/HalfHeroSection";
import Typography from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Privacy Policy | The Padival Grand Hotel",
  description:
    "Read The Padival Grand Hotel's Privacy Policy to understand how we collect, use, and protect your information.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col relative bg-[#F9F5EC]">
      <Header />

      <HalfHeroSection title="Privacy Policy" />

      {/* Content Section */}
      <section className="bg-[#F9F2E8] py-16 md:px-16 px-4  md:py-20  ">
        <div className="w-full max-w-8xl mx-auto space-y-10 sm:space-y-12 ">

          {/* Intro */}
          <p className="text-[#4A5568] text-sm lg:text-xl font-normal">
           Mahaveer Ventures (“Hotel”, “Restaurant”, “Hall”, “Catering”, “we”, “us”, or “our”) is committed to protecting the privacy of users (“you”, “your”) who access our website <span className="font-semibold">thepadivalgrand.com</span> and use our services. This Privacy Policy explains how we collect, use, disclose, and protect your personal data in accordance with applicable laws in India, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023, as applicable.
          </p>

          {/* 1. Information We Collect */}
          <div>
            <Typography variant="title2" className="text-xl  md:text-4xl font-serif font-bold text-[#0F2A1D] mb-4">
              1. Information We Collect
            </Typography>

            <Typography variant="description" className="text-[#4A5568] text-sm lg:text-xl mb-4">
              We may collect the following types of information:
            </Typography>

            <div className="space-y-4">
              <div>
                <Typography variant="description" className="font-semibold text-[#0F2A1D] text-sm lg:text-xl">
                  a) Personal Information
                </Typography>
                <ul className="list-disc list-inside text-[#4A5568] text-sm lg:text-lg ml-8">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Mobile number</li>
                  <li>Address</li>
                  <li>Government-issued ID details</li>
                  <li>Payment and billing details</li>
                </ul>
              </div>

              <div>
                <Typography variant="description" className="font-semibold text-[#0F2A1D] text-sm lg:text-xl">
                  b) Booking & Stay Information
                </Typography>
                <ul className="list-disc list-inside text-[#4A5568] text-sm lg:text-lg ml-8">
                  <li>Reservation details</li>
                  <li>Check-in and check-out dates</li>
                  <li>Preferences and special requests</li>
                </ul>
              </div>

              <div>
                <Typography variant="description" className="font-semibold text-[#0F2A1D] text-sm lg:text-xl">
                  c) Technical Information
                </Typography>
                <ul className="list-disc list-inside text-[#4A5568] text-sm lg:text-lg ml-8">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Cookies and usage data</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Purpose of Collection */}
          <div>
            <Typography variant="title2" className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#0F2A1D] mb-4">
              2. Purpose of Collection
            </Typography>
         <Typography variant="description" className="text-[#4A5568] text-sm lg:text-xl mb-3">
             We collect and use your information for:
            </Typography>
            <ul className="list-disc list-inside text-[#4A5568] text-sm lg:text-lg ml-8 space-y-3">
              <li>Processing room reservations and payments</li>
              <li>Providing hotel accommodation and related services</li>
              <li>Customer support and communication</li>
              <li>Legal compliance and regulatory requirements</li>
              <li>Improving our website and services</li>
              <li>Marketing communication (with consent)</li>
            </ul>
          </div>

          {/* 3. Consent */}
          <div>
            <Typography variant="title2" className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#0F2A1D] mb-4">
              3. Consent
            </Typography>
            <Typography variant="description" className="text-[#4A5568] text-sm lg:text-xl">
             Where required under the DPDP Act, personal data shall be processed only upon obtaining free, specific, informed, unconditional, and unambiguous consent of the Data Principal through a clear affirmative action.
The Data Principal may withdraw consent at any time, with the understanding that such withdrawal may affect the availability of certain services.
            </Typography>
          </div>

          {/* 4. Disclosure */}
          <div>
            <Typography variant="title2" className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#0F2A1D] mb-4">
              4. Disclosure of Information
            </Typography>
            <Typography variant="description" className="text-[#4A5568] text-sm lg:text-lg mb-3">
            We do not sell or rent your personal data. However, we may share your information with:
            </Typography>
            <ul className="list-disc list-inside text-[#4A5568] text-sm lg:text-lg ml-8 space-y-3">
              <li>Service providers(payment gateways, booking platforms, IT service providers)</li>
              <li>Government or regulatory authorities when required by law</li>
              <li>Law enforcement agencies pursuant to legal obligations</li>
            </ul>
            <Typography variant="description" className="text-[#4A5568] text-sm lg:text-xl mt-3">
              All such disclosures are made on a need-to-know basis and subject to confidentiality obligations.
            </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm lg:text-lg mt-3">
Personal data may be processed without consent for legitimate uses as permitted under Section 7 of the DPDP Act, including:               </Typography>
         
             <ul className="list-disc list-inside text-[#4A5568] text-sm lg:text-lg ml-8 space-y-3 mt-3">
              <li>Performance of services requested by the Data Principal</li>
              <li>Compliance with applicable laws and judicial or regulatory orders</li>
              <li>Ensuring safety, security, and prevention of fraud</li>
            </ul>
          </div>

          {/* 5. Data Security */}
          <div>
            <Typography variant="title2" className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#0F2A1D] mb-4">
              5. Data Security
            </Typography>
            <Typography variant="description" className="text-[#4A5568] text-sm lg:text-xl">
We implement reasonable security practices and procedures to protect your personal data from unauthorized access, misuse, loss, or disclosure. Despite our efforts, no method of transmission over the internet is completely secure.            </Typography>
          </div>
             <Typography variant="description" className="text-[#4A5568] text-sm lg:text-xl"> </Typography>

          {/* 6–11 */}
          {[
            ["6. Cookies Policy", "Our website may use cookies to enhance user experience, analyze website traffic, and improve services. You may choose to disable cookies through your browser settings; however, some features of the website may not function properly."],
            ["7. Data Retention", "We retain personal data only for as long as necessary to fulfill the purposes for which it was collected or as required under applicable laws and regulations."],
            ["8. Your Rights", "Subject to applicable law, you may have the right to:"],
            ["9. Third-Party Links", "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites."],
            ["10. Children’s Privacy", "Our services are not intended for persons under the age of 18. We do not knowingly collect personal data from minors."],
            ["11. Changes to This Privacy Policy", "We reserve the right to update or modify this Privacy Policy at any time. Changes will be effective upon posting on the website."]
          ].map(([title, desc]) => (
            <div key={title}>
              <Typography variant="title2" className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#0F2A1D] mb-4">
                {title}
              </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm lg:text-xl">
                {desc}
              </Typography>
            </div>
          ))}

          {/* 12. Contact */}
          <div>
            <Typography variant="title2" className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#0F2A1D] mb-4">
              12. Contact Information
            </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm lg:text-xl mb-4">
               In accordance with Chapter III of the DPDP Act, the Data Principal has the right to:
              </Typography>

                <Typography variant="description" className="text-[#4A5568] text-sm lg:text-lg ml-8 space-y-3">
                <ul className="list-disc list-inside text-[#4A5568] text-sm lg:text-lg ml-2 space-y-1">
                <li>Access information about personal data processed</li>
              <li>Request correction, completion, or updating of personal data</li>
              <li>Request erasure of personal data, subject to legal obligations</li>
              <li>Nominate another individual to exercise rights in the event of death or incapacity</li>
              <li>Grievance redressal</li>
              </ul>
            </Typography>

                          <Typography variant="description" className="text-[#4A5568] text-sm lg:text-xl py-4">
               For any questions or concerns regarding this Privacy Policy, please contact:
              </Typography>



            <Typography variant="description" className="text-[#4A5568] text-sm lg:text-xl space-y-1">
              <p>Mahaveer Ventures</p>
              <p> Address:<a href="https://maps.app.goo.gl/t6pdJoL1R8tTRo8f9" className="border-b hover:text-[#aa8616] transition-all duration-200"> Mahaveer Mall, Near Mahaveer Medical Centre, Bolwar, Puttur, Dakshina Kannada 574201, Karnataka, India </a></p>
              <p>Email:  <a
                  href="mailto:info@padival-grand-hotel.com"
                  className="border-b hover:text-[#aa8616] transition-all duration-200"
                >
                  info@padival-grand-hotel.com
                </a></p>
              <p>Phone: <a className="border-b hover:text-[#aa8616] transition-all duration-200"
                target="_blank"
                href="tel:+919686804784"
              >
                +91 96868 04784
              </a></p>
            </Typography>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
