import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import copy from "../../homepageCopy.json";

export default function Testimonials() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-indigo-300 tracking-wide uppercase mb-2">Success Stories</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                        Trusted by Innovators
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {copy.testimonials.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors relative"
                        >
                            <Quote className="absolute top-6 right-6 h-8 w-8 text-white/5 rotate-180" />

                            <div className="flex mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-pink-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-200 leading-relaxed mb-8 italic relative z-10 opacity-90">"{review.quote}"</p>

                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold text-sm">{review.name}</h4>
                                    <p className="text-indigo-300 text-xs">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
