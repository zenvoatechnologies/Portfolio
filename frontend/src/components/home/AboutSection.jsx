import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                            Innovating for the Future
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
                            Zenvoa Technologies is more than just a dev shop. We are a forward-thinking
                            digital agency dedicated to transforming businesses through innovation.
                            We combine world-class engineering with creative design to build solutions
                            that are not just functional, but future-ready. Our mission is to empower
                            brands with the technology they need to scale, compete, and lead in their industries.
                        </p>

                        <Link
                            to="/contact"
                            className="inline-flex items-center text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
                        >
                            Start building with us <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
}
