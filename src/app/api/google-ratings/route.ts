import { NextResponse } from "next/server";

export async function GET() {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ChIJS_Gv9R28vzsR_kY0_X9K-8E";

    if (!apiKey) {
        return NextResponse.json(
            { error: "Google Maps API key is not configured" },
            { status: 500 }
        );
    }

    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`;

        const response = await fetch(url, {
            next: { revalidate: 43200 }, // Cache for 12 hours (43200 seconds)
        });

        if (!response.ok) {
            throw new Error(`Google API responded with status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status !== "OK") {
            throw new Error(`Google API error: ${data.status} ${data.error_message || ""}`);
        }

        return NextResponse.json({
            rating: data.result.rating || 0,
            user_ratings_total: data.result.user_ratings_total || 0,
        });
    } catch (error) {
        console.error("Error fetching Google Place data:", error);
        return NextResponse.json(
            { error: "Failed to fetch Google Place data" },
            { status: 500 }
        );
    }
}
