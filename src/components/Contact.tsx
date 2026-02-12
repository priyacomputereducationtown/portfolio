import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { instituteDetails } from "@/lib/data";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Visit our center or get in touch for more information.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Location</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {instituteDetails.address}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                                <p className="text-slate-600 mb-1">Mobile: +91 {instituteDetails.phone}</p>
                                <a
                                    href={`tel:${instituteDetails.phone}`}
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    Call Now
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-lg text-green-600">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                                <p className="text-slate-600 mb-1">Chat available for course enquiries</p>
                                <a
                                    href={`https://wa.me/${instituteDetails.whatsapp}`}
                                    target="_blank"
                                    className="text-green-600 font-medium hover:underline"
                                >
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Opening Hours</h3>
                                <p className="text-slate-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                                <p className="text-slate-600">Sunday: Holiday</p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-lg h-80 md:h-auto relative">
                        <iframe
                            src={instituteDetails.mapsUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
