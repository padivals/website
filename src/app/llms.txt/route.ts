// src/app/llms.txt/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# llms.txt for thepadivalgrand.com 
 
# Schema Version 
version: 1.0 
 
# Owner 
Owner: Mahaveer Ventures  - The Padival Grand 
Contact: info@padival-grand-hotel.com 
Website: https://thepadivalgrand.com  
 
# The Padival Grand Overview 
The Padival Grand is a welcoming hotel designed for comfortable stays, homely dining, and small to mid-sized celebrations. It offers clean, well-maintained rooms suited for solo travellers, families, and groups, along with essential conveniences that make short and extended stays easy. The hotel also features a pure vegetarian restaurant, Padival’s Palara, known for simple, fresh meals served in a relaxed, family-friendly setting. For gatherings, it provides event and banquet spaces that work well for weddings, functions, and social occasions. With a focus on reliability, cleanliness, and warm service, The Padival Grand creates a practical and comfortable environment where guests can stay, dine, and celebrate without hassle. 
 
## Key Features 
- **Comfortable & Well-Maintained Rooms** designed for solo travelers, families, and groups, ensuring a clean, reliable, and hassle-free stay experience.  
- **Pure Vegetarian Dining Experience** offering fresh, simple, and hygienic meals at Padival’s Palara, ideal for everyday dining and family visits.  
- **Flexible Event & Banquet Spaces** suitable for weddings, family functions, and gatherings with easy coordination and well-organized setups.  
- **Prime Location on Main Road** ensuring easy access to transport, nearby attractions, and smooth connectivity for travelers and guests.  
- **Essential Amenities for a Smooth Stay** including Wi-Fi, parking, housekeeping, and power backup, focused on consistency and convenience.  
- **Simple, Reliable Hospitality Approach** built around cleanliness, comfort, and warm service, creating a stay that feels easy and dependable.   
 
# Important Pages 
- [Home](https://thepadivalgrand.com/): The homepage serves as the gateway to The Padival Grand Hotel, showcasing its luxurious offerings and inviting atmosphere. 
- [Dining](https://thepadivalgrand.com/dining): This page outlines the dining options available, featuring a range of culinary experiences. 
- [Events](https://thepadivalgrand.com/events): Details the various spaces available for hosting celebrations and corporate gatherings. 
- [Rooms](https://thepadivalgrand.com/rooms): Provides an overview of various accommodation options available. 
- [Deluxe Room](https://thepadivalgrand.com/rooms/deluxe-room): Detailed information about deluxe room accommodations. 
- [Family Quad Room](https://thepadivalgrand.com/rooms/family-quad-room): Spacious accommodations designed for families or larger groups. 
- [Standard Room](https://thepadivalgrand.com/rooms/standard-room): Insights into standard room offerings for budget-conscious travelers. 
- [Triple Bed Room](https://thepadivalgrand.com/rooms/triple-bed-room): Accommodations available for groups needing extra sleeping arrangements. 
 
# Resources 
- [About](https://thepadivalgrand.com/about): Information about mission, values, and commitment to service. 
- [Contact](https://thepadivalgrand.com/contact): Essential information for guests wishing to reach out. 
- [Terms & Conditions](https://thepadivalgrand.com/terms-conditions): Outlines terms regarding bookings and cancellations. 
- [Privacy Policy](https://thepadivalgrand.com/privacy-policy): Outlines how guest information is collected and protected.  
 
# Contact 
- **Support Email:** info@padival-grand-hotel.com 
- **Socials:** [Instagram](https://www.instagram.com/thepadivalgrand) | [Facebook](https://www.facebook.com/people/The-Padival-Grand/61583295038368/) | [LinkedIn](https://www.linkedin.com/company/mahaveer-ventures/)  
 
# Licensing & Usage 
- All content, images, and materials are the intellectual property of The Padival Grand.   
- AI models may not use or reproduce exclusive content without explicit written permission.   
 
# Last Updated 
2026-03-22`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}