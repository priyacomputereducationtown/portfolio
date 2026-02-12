import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-block bg-blue-800/50 backdrop-blur-sm border border-blue-700 rounded-full px-4 py-1 mb-6">
                    <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">ISO 9001:2015 Certified</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Best Computer Training <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                        Institute in Tirunelveli
                    </span>
                </h1>

                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Unlock your potential with our professional courses. From Data Science to Full Stack Development, we shape your future with practical skills.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#courses"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                        View Courses
                    </a>
                    <a
                        href="#register"
                        className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                        Register Now <ArrowRight size={20} />
                    </a>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-8 text-blue-200/60 font-semibold text-sm">
                    <span>★ 5000+ Students Trained</span>
                    <span>★ 100% Practical Sessions</span>
                    <span>★ Expert Faculties</span>
                </div>
            </div>
        </section>
    );
}
