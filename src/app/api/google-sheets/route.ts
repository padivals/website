import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            name,
            email,
            phone,
            guests,
            reservationType,
            roomType,
            preferredFrom,
            preferredTo,
            description,
            source, // "ContactSection" or "BookingModal"
        } = body;

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL?.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });
        const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;

        if (!spreadsheetId) {
            throw new Error("GOOGLE_SHEET_ID is not configured");
        }

        const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

        // Append data to the sheet
        // Columns: Timestamp, Source, Name, Email, Phone, Guests, Res Type, Room Type, From, To, Description
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "Sheet1!A:K",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        timestamp,
                        source || "Unknown",
                        name,
                        email,
                        phone,
                        guests,
                        reservationType,
                        roomType || "N/A",
                        preferredFrom,
                        preferredTo,
                        description || "N/A",
                    ],
                ],
            },
        });

        return NextResponse.json({ success: true, message: "Data stored successfully" });
    } catch (error: any) {
        console.error("Google Sheets Error:", error);
        return NextResponse.json(
            { success: false, error: error.message || "Failed to store data" },
            { status: 500 }
        );
    }
}
