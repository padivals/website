export const rooms = [
    {
        id: 1,
        slug: "standard-room",
        title: "The Standard Room (Non-A/C) ",
        subtitle: "Standard Room in Puttur That Feels Clean and Reliable",
        description:
            "A simple and clean option for budget-friendly stays and short visits. Best suited for solo travellers or couples looking for a comfortable, no-fuss experience.  ",
        pagedescription:"Choosing the right stay in Puttur shouldn’t feel uncertain. Our standard room in Puttur is designed for guests who value a simple, comfortable, and practical stay. Well-maintained and thoughtfully arranged, it offers a calm and reliable space for short stays, families and budget-conscious travelers. Experience a hotel room in Puttur that delivers consistency and comfort. Book your stay at The Padival Grand today.",
        imageColor: "bg-gray-300",
        heroImage: "/roomsImg/bgImg1.png", // Placeholder, using existing image
        cardImg:"/roomsImg/card1.png",
        details: {
            size: "250 sq ft",
            occupancy: "2 Adults",
            bed: "Queen Size Bed",
            amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Tea/Coffee Maker", "Room Service"]
        },
        features: [
            "King size bed",
            "Fresh linens and neatly prepared bedding",
            "In room tea and coffee setup",
            "Complimentary slippers",
            "Private sit out area",
            "Comfort driven furnishings",
            "Smart television with streaming",
            "High speed Wi Fi",
            "Calm, well ventilated interiors",
            "Round the clock front desk support",
            "Daily housekeeping",
            "Essential bath amenities",
            "Early check in subject to availability"
        ],
        images: ["/roomsImg/comf1.png", "/roomsImg/comf2.png","/roomsImg/comf3.png"], // Placeholders for side-by-side images
        seo: {
            metaTitle: "Standard Room in Puttur | AC, Clean & Affordable Stay",
            metaDescription: "Book a standard room in Puttur for a clean, comfortable and affordable stay. Ideal for families and travelers. Reserve your room at The Padival Grand today.",
            openGraphTitle: "Standard Room in Puttur That Feels Clean, Comfortable & Reliable ",
            openGraphDescription: "Looking for a clean and affordable standard room in Puttur? Enjoy AC rooms, WiFi, parking and a comfortable stay ideal for families, travelers and short visits. ",
            twitterTitle: "Affordable Standard Room in Puttur with AC & WiFi ",
            twitterDescription: "Clean, comfortable standard room in Puttur with essential amenities. Ideal for short stays, family visits, and travelers. Book your stay today. "
        },
        schema: {
              "@context": "https://schema.org", 

  "@graph": [ 

    { 

      "@type": "WebPage", 

      "@id": "https://thepadivalgrand.com/rooms/standard-room#webpage", 

      "url": "https://thepadivalgrand.com/rooms/standard-room", 

      "name": "Standard Room in Puttur | The Padival Grand", 

      "description": "Standard Room at The Padival Grand in Puttur designed for short stays and budget-friendly travel, offering essential amenities and a comfortable stay experience.", 

      "isPartOf": { 

        "@id": "https://thepadivalgrand.com/#website" 

      }, 

      "about": { 

        "@id": "https://thepadivalgrand.com/rooms/standard-room#room" 

      }, 

      "inLanguage": "en" 

    }, 

    { 

      "@type": "HotelRoom", 

      "@id": "https://thepadivalgrand.com/rooms/standard-room#room", 

      "name": "Standard Room", 

      "url": "https://thepadivalgrand.com/rooms/standard-room", 

      "description": "A comfortable and well-maintained room suitable for short stays and budget-friendly travel, offering essential amenities for a convenient stay in Puttur.", 

      "bed": { 

        "@type": "BedDetails", 

        "typeOfBed": "Queen Bed" 

      }, 

      "occupancy": { 

        "@type": "QuantitativeValue", 

        "minValue": 1, 

        "maxValue": 2 

      }, 

      "floorSize": { 

        "@type": "QuantitativeValue", 

        "value": 150, 

        "unitCode": "FTK" 

      }, 

      "amenityFeature": [ 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Wi-Fi", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Air Conditioning", 

          "value": false 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Room Service", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Housekeeping", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Mineral Water", 

          "value": true 

        } 

      ], 

      "photo": [ 

        "https://thepadivalgrand.com/images/standard-room-1.jpg" 

      ], 

      "containedInPlace": { 

        "@id": "https://thepadivalgrand.com/#hotel" 

      } 

    } 

  ] 
        }
    },
    {
        id: 2,
        slug: "deluxe-room",
        title: "The Deluxe A/C Room",
        subtitle: "Deluxe Room in Puttur for a Comfortable & Reliable Stay ",
        description:
            "A more comfortable option with added space and air-conditioning for a relaxed stay. Ideal for families and business travellers who prefer extra ease. ",
        pagedescription:"Our deluxe room in Puttur at The Padival Grand is designed for guests who value a comfortable and well-managed stay. Thoughtfully planned with a spacious layout and relaxed ambience, it is ideal for travellers and families seeking dependable hotel rooms in Puttur. As a preferred choice for a smooth and reliable stay in Puttur, this deluxe room delivers consistency you can trust. Book your deluxe room in Puttur today for a seamless stay experience.  ",
        imageColor: "bg-gray-400",
        heroImage: "/roomsImg/bgImg2.png", // Placeholder, using existing image
        cardImg:"/roomsImg/card2.png",
        details: {
            size: "350 sq ft",
            occupancy: "2 Adults, 1 Child",
            bed: "King Size Bed",
            amenities: ["Free Wi-Fi", "Air Conditioning", "Smart TV", "Mini Bar", "Work Desk", "Premium Toiletries"]
        },
        images: ["/roomsImg/del1.png", "/roomsImg/del2.png","/roomsImg/del3.png"],
        seo: {
            metaTitle: "Deluxe Room in Puttur | Book Your Stay - Padival Grand ",
            metaDescription: "Looking for a deluxe room in Puttur? Book your stay at The Padival Grand for a comfortable, well-managed experience ideal for travellers and families. ",
            openGraphTitle: "Deluxe Room in Puttur for Comfortable & Reliable Stay",
            openGraphDescription: "Experience a thoughtfully designed deluxe room in Puttur, ideal for travellers and families seeking a comfortable and dependable stay. Book your room today.",
            twitterTitle: "Deluxe Room in Puttur | Comfortable Stay",
            twitterDescription: "Book a deluxe room in Puttur for a comfortable and well-managed stay. Ideal for travellers and families looking for a reliable place to stay. "
        },
        schema: {
             "@context": "https://schema.org", 

  "@graph": [ 

    { 

      "@type": "WebPage", 

      "@id": "https://thepadivalgrand.com/rooms/deluxe-room#webpage", 

      "url": "https://thepadivalgrand.com/rooms/deluxe-room", 

      "name": "The Deluxe A/C Room | The Padival Grand", 

      "description": "The Deluxe A/C Room at The Padival Grand in Puttur offers a spacious and comfortable stay with air conditioning, free Wi-Fi, Smart TV, mini bar, work desk and premium toiletries.", 

      "isPartOf": { 

        "@id": "https://thepadivalgrand.com/#website" 

      }, 

      "about": { 

        "@id": "https://thepadivalgrand.com/rooms/deluxe-room#room" 

      }, 

      "inLanguage": "en" 

    }, 

    { 

      "@type": "HotelRoom", 

      "@id": "https://thepadivalgrand.com/rooms/deluxe-room#room", 

      "name": "The Deluxe A/C Room", 

      "url": "https://thepadivalgrand.com/rooms/deluxe-room", 

      "description": "The Deluxe A/C Room offers enhanced comfort with air conditioning, a spacious layout and a relaxed ambience for business and leisure stays in Puttur.", 

      "amenityFeature": [ 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Free Wi-Fi", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Air Conditioning", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Smart TV", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Mini Bar", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Work Desk", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Premium Toiletries", 

          "value": true 

        } 

      ], 

      "photo": [ 

        "https://thepadivalgrand.com/images/deluxe-room-1.jpg" 

      ], 

      "occupancy": { 

        "@type": "QuantitativeValue", 

        "minValue": 1, 

        "maxValue": 2 

      }, 

      "containedInPlace": { 

        "@id": "https://thepadivalgrand.com/#hotel" 

      } 

    } 

  ] 
        }
    },
    {
        id: 3,
        slug: "triple-bed-room",
        title: "The Triple Bedroom",
        subtitle: "Triple Room in Puttur Designed for Family & Group Stays ",
        description:
            "Designed for three guests, this room offers enough space to stay together comfortably. A practical choice for small families or groups.  ",
        pagedescription:"Our triple bedroom in Puttur is designed for families and groups who value comfort, space and simplicity. With a balanced layout and a well-maintained setting, it offers a practical stay for three guests without feeling crowded. Ideal for small families or friends travelling together, the space is clean, reliable and easy to settle into. Book your triple room in Puttur today for a stay that feels comfortable and effortless.",
        imageColor: "bg-gray-500",
        heroImage: "/roomsImg/bgImg3.png", // Placeholder, using existing image
        cardImg:"/roomsImg/card3.png",
        details: {
            size: "500 sq ft",
            occupancy: "4 Adults",
            bed: "2 Queen Size Beds",
            amenities: ["Free Wi-Fi", "Air Conditioning", "2 Flat-screen TVs", "Living Area", "Dining Table", "Bathtub"]
        },
        images: ["/roomsImg/tri1.png", "/roomsImg/tri2.png","/roomsImg/tri3.png"],
        seo: {
            metaTitle: "Triple Room in Puttur for Family Stay | Book Now Today ",
            metaDescription: "Find the right triple room in Puttur for families or groups. Enjoy comfortable rooms, a convenient stay and easy booking. Reserve your stay in Puttur now. ",
            openGraphTitle: "Triple Bedroom in Puttur for Family Stay | Book Now",
            openGraphDescription: "Comfortable triple room in Puttur for families and groups. Enjoy a convenient stay with easy booking. Reserve now. ",
            twitterTitle: "Triple Room in Puttur for Family Stay | Book Now ",
            twitterDescription: " Find the right triple room in Puttur for families or groups. Comfortable stay, easy booking and reliable choice. "
        },
        schema: {
            "@context": "https://schema.org", 

  "@graph": [ 

    { 

      "@type": "WebPage", 

      "@id": "https://thepadivalgrand.com/rooms/triple-bed-room#webpage", 

      "url": "https://thepadivalgrand.com/rooms/triple-bed-room", 

      "name": "The Triple Bedroom | The Padival Grand", 

      "description": "The Triple Bedroom at The Padival Grand in Puttur is designed for three guests, offering a balanced layout with comfortable amenities for families and group stays.", 

      "isPartOf": { 

        "@id": "https://thepadivalgrand.com/#website" 

      }, 

      "about": { 

        "@id": "https://thepadivalgrand.com/rooms/triple-bed-room#room" 

      }, 

      "inLanguage": "en" 

    }, 

    { 

      "@type": "HotelRoom", 

      "@id": "https://thepadivalgrand.com/rooms/triple-bed-room#room", 

      "name": "The Triple Bedroom", 

      "url": "https://thepadivalgrand.com/rooms/triple-bed-room", 

      "description": "The Triple Bedroom is designed to comfortably accommodate three guests, with adequate space and a balanced layout suited for small families or groups travelling together.", 

      "amenityFeature": [ 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Free Wi-Fi", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Air Conditioning", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "2 Flat-screen TVs", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Living Area", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Dining Table", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Bathtub", 

          "value": true 

        } 

      ], 

      "photo": [ 

        "https://thepadivalgrand.com/images/triple-bedroom-1.jpg" 

      ], 

      "occupancy": { 

        "@type": "QuantitativeValue", 

        "minValue": 1, 

        "maxValue": 3 

      }, 

      "containedInPlace": { 

        "@id": "https://thepadivalgrand.com/#hotel" 

      } 

    } 

  ] 
        }
    },
    {
        id: 4,
        slug: "family-quad-room",
        title: "The Family Quad Room",
        subtitle: "Family Room in Puttur for Comfortable Family Stay ",
        description:
            "Spacious and well-suited for families or group stays. A good fit for longer visits where space and convenience matter. ",
        pagedescription:"Our Family Quad Rooms are spacious and thoughtfully planned to cater to families and larger groups. With ample sleeping space and a comfortable setting, these rooms are ideal for extended stays and shared travel experiences.",
        imageColor: "bg-gray-600",
        heroImage: "/roomsImg/bgImg4.png", // Placeholder, using existing image
        cardImg:"/roomsImg/card4.png",
        details: {
            size: "450 sq ft",
            occupancy: "2 Adults",
            bed: "King Size Bed",
            amenities: ["High-speed Wi-Fi", "Air Conditioning", "Smart TV", "Executive Desk", "Lounge Area", "Complimentary Breakfast", "Priority Service"]
        },
        images: ["/roomsImg/fam1.png", "/roomsImg/fam2.png","/roomsImg/fam3.png"],
        seo: {
            metaTitle: "Family Room in Puttur for Comfortable Stay | Book Now ",
            metaDescription: "Find the right family room in Puttur for a comfortable stay. Ideal for families and groups, with easy booking and a reliable stay experience. Reserve now.",
            openGraphTitle: "Family Room in Puttur for Comfortable Family Stay ",
            openGraphDescription: "Looking for a family room near you? Stay comfortably in Puttur with spacious rooms designed for families and groups. Easy booking and a dependable stay. ",
            twitterTitle: "Family Room in Puttur for Comfortable Stay ",
            twitterDescription: "Book a family room in Puttur designed for groups and families. Comfortable stay, convenient location and smooth booking experience. "
        },
        schema: {
            "@context": "https://schema.org", 

  "@graph": [ 

    { 

      "@type": "WebPage", 

      "@id": "https://thepadivalgrand.com/rooms/family-quad-room#webpage", 

      "url": "https://thepadivalgrand.com/rooms/family-quad-room", 

      "name": "The Family Quad Room | The Padival Grand", 

      "description": "The Family Quad Room at The Padival Grand in Puttur is designed for families and larger groups, offering a spacious layout and a comfortable stay experience.", 

      "isPartOf": { 

        "@id": "https://thepadivalgrand.com/#website" 

      }, 

      "about": { 

        "@id": "https://thepadivalgrand.com/rooms/family-quad-room#room" 

      }, 

      "inLanguage": "en" 

    }, 

    { 

      "@type": "HotelRoom", 

      "@id": "https://thepadivalgrand.com/rooms/family-quad-room#room", 

      "name": "The Family Quad Room", 

      "url": "https://thepadivalgrand.com/rooms/family-quad-room", 

      "description": "The Family Quad Room is a spacious accommodation option at The Padival Grand, planned for families and larger groups who need extra comfort and shared stay convenience in Puttur.", 

      "amenityFeature": [ 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "High-speed Wi-Fi", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Air Conditioning", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Smart TV", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Executive Desk", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Lounge Area", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Complimentary Breakfast", 

          "value": true 

        }, 

        { 

          "@type": "LocationFeatureSpecification", 

          "name": "Priority Service", 

          "value": true 

        } 

      ], 

      "photo": [ 

        "https://thepadivalgrand.com/images/family-quad-room-1.jpg" 

      ], 

      "occupancy": { 

        "@type": "QuantitativeValue", 

        "minValue": 1, 

        "maxValue": 4 

      }, 

      "containedInPlace": { 

        "@id": "https://thepadivalgrand.com/#hotel" 

      } 

    } 

  ] 
        }
    }
];
