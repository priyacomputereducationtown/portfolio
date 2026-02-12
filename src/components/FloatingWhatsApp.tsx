import { MessageCircle } from "lucide-react";
import { instituteDetails } from "@/lib/data";

export default function FloatingWhatsApp() {
    return (
        <a
            href={`https://wa.me/${instituteDetails.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all animate-bounce-slow"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} fill="currentColor" className="text-white" />
        </a>
    );
}
