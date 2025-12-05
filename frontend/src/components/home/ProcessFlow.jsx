import { motion } from "framer-motion";
import copy from "../../homepageCopy.json";

export default function ProcessFlow() {
    return (
        <section className="py-24 bg-transparent relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-indigo-300 tracking-wide uppercase mb-2">Workflow</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                        {copy.process.title}
                    </h3>
                </div>

                <div className="relative">
                    {/* Vertical line for desktop (Neon Gradient) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-50"></div>

                    <div className="space-y-12">
                        {copy.process.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="w-full md:w-5/12"></div>

                                <div className="z-10 bg-[#060712] w-10 h-10 rounded-full flex items-center justify-center text-white border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] mb-4 md:mb-0 text-sm font-bold">
                                    {index + 1}
                                </div>

                                <div className="w-full md:w-5/12 text-center md:text-left p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:border-indigo-500/30 transition-colors">
                                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-slate-400 text-sm mb-3">{step.desc}</p>
                                    <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">{step.cta} &rarr;</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
