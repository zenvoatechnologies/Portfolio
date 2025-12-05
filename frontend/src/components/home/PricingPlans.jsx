import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
    {
        name: "Starter",
        price: "$999",
        desc: "Perfect for small businesses and personal brands.",
        features: ["Custom Website (5 Pages)", "Mobile Responsive", "Contact Form", "Basic SEO", "1 Month Support"]
    },
    {
        name: "Business",
        price: "$2,499",
        desc: "Ideal for growing companies needing more power.",
        features: ["CMS Integration", "E-commerce (10 products)", "Blog / News Section", "Advanced SEO", "Google Analytics", "3 Months Support"],
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        desc: "Full-scale custom solutions for large organizations.",
        features: ["Custom Web App", "User Authentication", "Database Integration", "API Development", "Cloud Hosting", "Priority Support"]
    }
];

export default function PricingPlans() {
    return (
        <section className="py-24 bg-transparent border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-indigo-300 tracking-wide uppercase mb-2">Pricing</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                        Tailored Plans for Every Stage
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${plan.popular
                                ? 'bg-indigo-900/90 text-white border-indigo-500 shadow-2xl scale-105 z-10 backdrop-blur-xl'
                                : 'bg-white/5 text-white border-white/10 backdrop-blur-md hover:bg-white/10'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                            <div className="text-3xl font-extrabold mb-4">{plan.price}</div>
                            <p className={`text-sm mb-8 ${plan.popular ? 'text-indigo-200' : 'text-slate-400'}`}>{plan.desc}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className={`h-5 w-5 mr-3 ${plan.popular ? 'text-indigo-400' : 'text-green-400'}`} />
                                        <span className="text-sm opacity-90">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className={`block w-full text-center py-3 rounded-xl font-bold transition-colors ${plan.popular
                                    ? 'bg-white text-indigo-900 hover:bg-slate-100'
                                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                    }`}
                            >
                                Choose Plan
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
