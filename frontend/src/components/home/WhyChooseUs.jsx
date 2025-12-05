import { motion } from "framer-motion";
import { Zap, Clock, Wallet, Layout, Search, UserCheck } from "lucide-react";
import copy from "../../homepageCopy.json";

const iconMap = [Zap, Clock, Wallet, Layout, Search, UserCheck]; // Order matters as per JSON array? No, JSON doesn't index. Mapping manually.
// Actually, JSON content has changed. I'll map icons based on index or title if possible, or just re-define structure for mapping.
// JSON has 4 items. Let's map them.
const icons = [Zap, Clock, UserCheck, Wallet]; // Matching the 4 new items: Fast, Lifetime, Manager, Pricing

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-indigo-300 tracking-wide uppercase mb-2">{copy.whyChooseUs.title}</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                        {copy.whyChooseUs.subtitle}
                    </h3>
                    <p className="mt-4 text-emerald-400 font-medium bg-emerald-900/20 py-2 px-4 rounded-full inline-block border border-emerald-500/20">
                        {copy.whyChooseUs.guarantee}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {copy.whyChooseUs.items.map((item, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md text-white border border-white/5 group-hover:scale-110 transition-transform">
                                    <Icon className="h-6 w-6 text-indigo-300 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
