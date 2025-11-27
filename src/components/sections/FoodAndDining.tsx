import React from "react";
import Image from "next/image";
import Link from "next/link";

const FoodAndDining = () => {
    return (
        <section className="bg-[#F9F5EC] py-20 border-t border-[#A3B19C]/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Spacer/Label (Empty to match alignment of previous sections if needed, or just full width) */}
                    {/* Looking at the screenshot, it seems to be indented similarly to the previous section's content, 
                         but the title "Food and Dining" is large. Let's try to match the previous section's alignment 
                         where the content started after the label. 
                         However, the screenshot shows "Food and Dining" as a main header. 
                         Let's align it with the content of the Common Amenities section (lg:w-3/4) or make it a full width block 
                         that aligns with the right side. 
                         
                         Actually, looking at the previous screenshot (Common Amenities), it had a left label "COMMON AMENITIES".
                         This new screenshot shows "Food and Dining" as a large serif heading. 
                         It seems to be a distinct section. 
                         Let's use a similar layout structure: Left column empty or small label, Right column content.
                         OR, it might be a full width section within the container.
                         
                         Let's assume it aligns with the content part of the previous section for visual consistency.
                         The previous section had `lg:w-1/4` for label and `lg:w-3/4` for content.
                         Let's put this entire block inside the `lg:w-3/4` area to maintain that vertical alignment line,
                         OR just make it a standard container block. 
                         
                         The screenshot shows the text "Food and Dining" aligned with the image. 
                         Let's try to align it with the "Common Amenities" content block (the right side).
                     */}

                    <div className="lg:w-1/4 hidden lg:block">
                        {/* Empty left column to maintain alignment with Common Amenities label if desired, 
                            or we can just make this section full width if it's meant to stand out.
                            The screenshot doesn't show the left margin context clearly.
                            But usually, these sections align.
                        */}
                    </div>

                    <div className="lg:w-3/4">
                        <div className="flex justify-between items-end mb-8">
                            <h2 className="text-4xl font-serif text-[#0F2A1D]">
                                Food and Dining
                            </h2>
                            <Link
                                href="/dining"
                                className="inline-block border-b border-[#0F2A1D] pb-1 text-sm uppercase tracking-wider text-[#0F2A1D] hover:text-gray-600 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>

                        <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden">
                            <Image
                                src="/hero-bg.png" // Placeholder
                                alt="Dining at Padival Grand"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-[#0F2A1D] text-lg font-light leading-relaxed">
                            At The Padival Grand, every meal is thoughtfully served through Padival's Palara, our pure vegetarian sister brand located within the same building. Guests enjoy familiar, homely flavours prepared with care, offering a calm, satisfying dining experience that feels dependable whether you choose a light snack or a complete meal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodAndDining;
