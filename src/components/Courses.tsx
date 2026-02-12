"use client";

import { useState } from "react";
import Link from "next/link";
import { courses } from "@/lib/data";
import { Search, BookOpen, CheckCircle } from "lucide-react";

export default function Courses() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="courses" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Courses</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Choose from a wide range of industry-standard computer courses designed to boost your career.
                    </p>
                </div>

                {/* Search */}
                <div className="max-w-md mx-auto mb-12 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all shadow-sm"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCourses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-blue-100"></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <BookOpen size={24} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2">{course.name}</h3>
                                <p className="text-slate-500 text-sm mb-4">{course.description}</p>

                                <div className="flex items-center gap-2 mb-6">
                                    <CheckCircle size={14} className="text-green-500" />
                                    <span className="text-xs font-medium text-slate-400">Certified Course</span>
                                </div>

                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-2xl font-bold text-blue-900">₹{course.fee}</span>
                                    <Link
                                        href={{
                                            pathname: "/",
                                            query: { course: course.name },
                                            hash: "register",
                                        }}
                                        className="text-sm font-bold text-orange-500 hover:text-orange-600"
                                    >
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-10 text-slate-500">
                        No courses found matching "{searchTerm}"
                    </div>
                )}
            </div>
        </section >
    );
}
