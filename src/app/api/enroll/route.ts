import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, course, timing } = body;

        // Server-side validation
        if (!name || !phone || !course || !timing) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        const scriptUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

        if (!scriptUrl) {
            console.error("GOOGLE_SHEETS_WEBHOOK_URL is not defined");
            return NextResponse.json(
                { error: "Server configuration error." },
                { status: 500 }
            );
        }

        // Google Apps Script expects form-urlencoded or JSON. 
        // Usually, for fetch to Web App, sending JSON stringified in body is fine if the script handles it,
        // or standard form data.
        // Let's assume the script accepts JSON or we send it as such.
        // If the script is a standard "doPost(e)", we might need to send standard URL encoded params
        // or ensure the script parses JSON. 
        // Safest standard for generic GAS Web Apps is usually URLSearchParams or JSON if written to support it.
        // user didn't specify script internals, but commonly they parse JSON `JSON.parse(e.postData.contents)`.
        // We will send JSON.

        // Note: 'no-cors' mode is for client-side to avoid CORS errors, but here we are server-side.
        // We can just standard fetch.
        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, phone, course, timing, date: new Date().toISOString() }),
        });

        if (!response.ok) {
            console.error("Google Sheets API returned error:", response.status, response.statusText);
            // continue to return success to user if we want to "fail open" or return error?
            // Let's return error to be safe.
            return NextResponse.json(
                { error: "Failed to save data." },
                { status: 502 }
            );
        }

        // Attempt to parse response if possible, though GAS often redirects. 
        // We just assume success if status is OK.

        return NextResponse.json(
            { message: "Registration successful!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Enrollment error:", error);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
