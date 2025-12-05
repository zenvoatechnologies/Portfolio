import { motion } from "framer-motion";
import { Monitor, Smartphone, Code, ShoppingCart, PenTool, Cpu, Cloud, ArrowRight } from "lucide-react";
import copy from "../../homepageCopy.json";

// Map icons roughly to the new default JSON services
const icons = [Monitor, Smartphone, Code, PenTool, Cpu, Cloud];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-transparent text-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-indigo-300 tracking-wide uppercase mb-2">Our Capabilities</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                        Comprehensive Digital Services
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {copy.services.map((service, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all group hover:-translate-y-1"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-white/10 p-3 rounded-lg text-indigo-300 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                                <p className="text-slate-400 text-sm mb-6 h-10">{service.desc}</p>

                                <div className="flex flex-wrap gap-2">
                                    {service.microFeatures.map((feat, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/10">
                                            {feat}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
