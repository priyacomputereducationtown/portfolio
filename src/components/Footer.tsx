import { instituteDetails } from "@/lib/data";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">{instituteDetails.name}</h3>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Empowering students with cutting-edge computer education. ISO 9001:2015 Certified Institution.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
                            <li><a href="#register" className="hover:text-white transition-colors">Register</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Connect With Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Facebook size={20} /></a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-all"><Instagram size={20} /></a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-sky-500 hover:text-white transition-all"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} {instituteDetails.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
