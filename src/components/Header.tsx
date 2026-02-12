"use client";

import { useState, useEffect } from "react";
import { Menu, X, Monitor } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Courses", href: "#courses" },
        { name: "Register", href: "#register" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:scale-105 transition-transform">
                        <Monitor size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-bold text-lg leading-tight ${isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"}`}>
                            PRIYA
                        </span>
                        <span className={`text-xs font-medium ${isScrolled ? "text-slate-600" : "text-slate-700 md:text-blue-100"}`}>
                            COMPUTER EDUCATION
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold hover:text-orange-500 transition-colors ${isScrolled ? "text-slate-700" : "text-white/90"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#register"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-orange-500/30"
                    >
                        Enroll Now
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-800"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? "text-slate-900" : "text-slate-900"} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-700 font-medium py-2 border-b border-slate-50 last:border-0 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
