
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HalfHeroSection from "@/components/sections/HalfHeroSection";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen flex flex-col relative pb-24 bg-[#F9F5EC]">
            <Header />

            <HalfHeroSection title="Privacy Policy" />

            {/* Content Section */}
            <section className="bg-[#F9F2E8] py-20">
                <div className="container mx-auto px-6 max-w-full mx-6  lg:mx-12 xl:mx-24">
                    <p className="text-[#4A5568] text-lg font-light leading-relaxed mb-12">
                        This Privacy Policy outlines how JK Group collects, uses, and protects the information you provide when using this website. By accessing or using our site, you agree to the terms described below.
                    </p>

                    <div className="space-y-12">
                        {/* Information We Collect */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-4">
                                Information We Collect
                            </h2>
                            <p className="text-[#4A5568] font-light leading-relaxed">
                                We may collect basic information such as your name, email address, phone number, and any details you submit through forms or inquiries on the website. We may also gather non-personal data including browser type, device information, and website usage patterns.
                            </p>
                        </div>

                        {/* How We Use Your Information */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-4">
                                How We Use Your Information
                            </h2>
                            <p className="text-[#4A5568] font-light leading-relaxed mb-4">
                                The information collected is used to:
                            </p>
                            <ul className="list-disc list-inside text-[#4A5568] font-light leading-relaxed space-y-2 ml-2">
                                <li>Respond to your inquiries</li>
                                <li>Improve website performance and user experience</li>
                                <li>Share relevant updates or information, if you choose to receive them</li>
                            </ul>
                            <p className="text-[#4A5568] font-light leading-relaxed mt-4">
                                We do not sell or share your personal information with third parties unless required by law.
                            </p>
                        </div>

                        {/* Cookies */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-4">
                                Cookies
                            </h2>
                            <p className="text-[#4A5568] font-light leading-relaxed">
                                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings, though some features may not function as intended.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
