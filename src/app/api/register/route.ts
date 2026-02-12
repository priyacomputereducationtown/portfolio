import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, course, timing } = body;

        // Basic server-side validation
        if (!name || !phone || !course || !timing) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        // In a real application, you would save this data to a database (e.g., Supabase, MongoDB, Postgres).
        // For this demo, we'll log it to the console (which appears in Vercel logs).
        console.log("New Registration:", { name, phone, course, timing, date: new Date().toISOString() });

        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: "Registration successful! We will contact you shortly." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
