import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Aravind Kumar",
        course: "Full Stack Developer",
        review: "The best institute in Tirunelveli! The practical sessions were very helpful, and I got placed in a good company immediately after completing the course.",
        rating: 5,
    },
    {
        name: "Priya Darshini",
        course: "Python Programming",
        review: "Excellent teaching. The staff is very friendly and explains concepts clearly. I highly recommend Priya Computer Education.",
        rating: 5,
    },
    {
        name: "Karthik Raja",
        course: "DCA & Tally",
        review: "I completed my DCA and Tally course here. The fees are affordable and the training quality is top-notch.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
                    <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                            <Quote className="text-orange-400 mb-4 opacity-50" size={40} />
                            <p className="text-blue-100 mb-6 italic">"{t.review}"</p>

                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className={`${i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`} />
                                ))}
                            </div>

                            <div>
                                <h4 className="font-bold text-lg">{t.name}</h4>
                                <span className="text-sm text-blue-200">{t.course} Student</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
