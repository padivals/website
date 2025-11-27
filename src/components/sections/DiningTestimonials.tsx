"use client";

import React from "react";
import TestimonialsSection from "./TestimonialsSection";

const DiningTestimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: "A/c section was very good with neat and clean interiors. Staff were very curtious and attentive. Hygiene is given utmost priority with all servers and cleaning staff wearing gloves and caps all time! Service was quick and food delicious... Highly recommend and will definitely visit again.",
            author: "Karthikeya Sharma",
            location: "Puttur",
        },
        {
            id: 2,
            text: "I was impressed with the restaurant for a very long time. One of its kind in the city, particularly for Indian and Chinese cuisine. On my recent dine in, found the Sev Puri and lemon coriander soup to be mediocre, whereas ghee roast curry were pretty good...",
            author: "Kaushik",
            location: "Mangalore",
        },
        {
            id: 3,
            text: "The pure vegetarian food here is simply outstanding. It feels like a home-cooked meal but with the finesse of a fine dining restaurant. The ambiance is calm and perfect for family dinners.",
            author: "Ananya Rao",
            location: "Puttur",
        },
        {
            id: 4,
            text: "Padival's Palara never disappoints. The consistency in taste and quality is remarkable. It's our go-to place for any celebration or just a quiet dinner.",
            author: "Vikram Shetty",
            location: "Bangalore",
        },
    ];

    return (
        <TestimonialsSection
            label="REVIEWS"
            title="What Our Diners Often Share"
            testimonials={testimonials}
            rating={4.3}
            ratingLabel="Average Rating by Past Guests"
        />
    );
};

export default DiningTestimonials;
