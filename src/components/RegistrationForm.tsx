"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { courses } from "@/lib/data";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function RegistrationForm() {
    const searchParams = useSearchParams();
    const preSelectedCourse = searchParams.get("course");

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        course: "",
        timing: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (preSelectedCourse) {
            setFormData((prev) => ({ ...prev, course: preSelectedCourse }));
        }
    }, [preSelectedCourse]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/enroll", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
            setFormData({ name: "", phone: "", course: "", timing: "" });
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <section id="register" className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
                    {/* Left Side - Image/Info */}
                    <div className="md:w-5/12 bg-blue-900 p-8 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Join Us Today!</h3>
                            <p className="text-blue-200 text-sm mb-6">
                                Start your journey towards a successful career in technology. Limited seats available for the upcoming batch.
                            </p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Expert Guidance</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Practical Labs</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Job Assistance</li>
                            </ul>
                        </div>

                        <div className="relative z-10 mt-8 text-xs text-blue-300">
                            * Terms & Conditions Apply
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="md:w-7/12 p-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Student Registration</h2>

                        {status === "success" ? (
                            <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center">
                                <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
                                <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
                                <p>Thank you for registering. Our team will contact you shortly.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 text-sm font-bold text-green-700 hover:underline"
                                >
                                    Register Another Student
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Enter student name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        pattern="[0-9]{10}"
                                        title="Please enter a valid 10-digit phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="10-digit mobile number"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="course" className="block text-sm font-medium text-slate-700 mb-1">Select Course</label>
                                    <select
                                        id="course"
                                        name="course"
                                        required
                                        value={formData.course}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                    >
                                        <option value="">-- Choose a Course --</option>
                                        {courses.map((c) => (
                                            <option key={c.name} value={c.name}>
                                                {c.name} - ₹{c.fee}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="timing" className="block text-sm font-medium text-slate-700 mb-1">Preferred Timing</label>
                                    <select
                                        id="timing"
                                        name="timing"
                                        required
                                        value={formData.timing}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                    >
                                        <option value="">-- Choose Timing --</option>
                                        <option value="9:30 AM - 11:30 AM">9:30 AM - 11:30 AM</option>
                                        <option value="11:30 AM - 1:30 PM">11:30 AM - 1:30 PM</option>
                                        <option value="1:30 PM - 3:30 PM">1:30 PM - 3:30 PM</option>
                                        <option value="3:30 PM - 5:30 PM">3:30 PM - 5:30 PM</option>
                                        <option value="5:30 PM - 7:30 PM">5:30 PM - 7:30 PM</option>
                                        <option value="Weekend">Weekend Batch</option>
                                    </select>
                                </div>

                                {status === "error" && (
                                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                                        <AlertCircle size={16} />
                                        {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> Processing...
                                        </>
                                    ) : (
                                        "Register Now"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
