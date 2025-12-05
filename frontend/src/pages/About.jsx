import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Eye, Target, Zap, Heart, Shield, PenTool, Users, Clock, CheckCircle } from "lucide-react";
import Ballpit from "../components/Ballpit";
import SEO from "../components/SEO";
import SubtleButton from "../components/ui/SubtleButton";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const values = [
        { icon: Trophy, title: "Quality as a Mindset", desc: "We don't ship 'good enough'. We ship world-class." },
        { icon: Shield, title: "Transparency", desc: "Clear communication. No hidden fees. Honest timelines." },
        { icon: Heart, title: "Lifelong Partnership", desc: "We are in it for the long haul. Your success is ours." },
        { icon: PenTool, title: "Design with Purpose", desc: "Every pixel serves a function. Beauty meets utility." },
        { icon: Code, title: "Engineering Excellence", desc: "Robust, secure, and scalable codebases." },
        { icon: Users, title: "Customer-First", desc: "We build what you need, not just what's easy." }
    ];

    /* Correction: Code icon was not imported above, fix import or use Zap/Cpu */
    // Fix: Add Code to imports or swap icon. I'll swap to Zap for engineering or add Code.
    // Let's add Code to imports. 

    return (
        <div className="bg-[#060712] relative min-h-screen text-white selection:bg-indigo-500 selection:text-white">
            <SEO
                title="About Us"
                description="Zenvoa Technologies is a digital product engineering studio defining the future of web and mobile interactions."
                url="https://zenvoatechnologies.com/about"
            />
            <Ballpit />

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="container mx-auto px-4 z-10 relative">
                    <motion.div
                        {...fadeIn}
                        className="text-center max-w-4xl mx-auto bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Zenvoa Technologies</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 font-light leading-relaxed">
                            We are a digital product engineering studio defining the future of web and mobile interactions.
                        </p>
                        <div className="flex justify-center">
                            <SubtleButton text="Start Your Project" onClick={() => navigate('/contact')} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. WHO WE ARE */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeIn}>
                            <h2 className="text-sm font-bold text-indigo-400 tracking-wide uppercase mb-2">Who We Are</h2>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Builders of the Digital Tomorrow.</h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                Zenvoa is a specialized agency focused on high-performance web applications, mobile platforms, and AI-driven solutions. We don't just write code; we architect systems that scale.
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                We partner with visionary founders and enterprises who value speed, quality, and lifetime reliability. Our work is crafted to stand the test of time.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/10 flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                            <div className="relative z-10 p-8 text-center">
                                <div className="text-5xl font-bold text-white mb-2">100+</div>
                                <div className="text-indigo-300 font-medium">Projects Delivered</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. OUR STORY */}
            <section className="py-24 relative z-10 bg-white/5 backdrop-blur-sm border-y border-white/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Born from a Passion for <span className="text-indigo-400">Perfection</span>.</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Zenvoa started with a simple belief: software should be beautiful inside and out. In an industry of quick fixes, we chose to focus on engineering excellence and premium UI/UX. We saw a gap where businesses needed not just developers, but long-term technical partners who care about the product as much as they do.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 4. MISSION + VISION */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-white/5 to-white/0 p-10 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-colors"
                        >
                            <div className="bg-indigo-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-slate-400 text-lg">To empower brands with future-ready technology that scales effortlessly and engages users instantly.</p>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-purple-900/10 to-transparent p-10 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors"
                        >
                            <div className="bg-purple-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-slate-400 text-lg">To become the global standard for digital product quality, where design and engineering merge seamlessly.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. CORE VALUES */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-indigo-400 tracking-wide uppercase mb-2">Our DNA</h2>
                        <h3 className="text-3xl md:text-4xl font-bold">Core Values</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
                            >
                                <div className="mb-6 text-indigo-400 group-hover:text-white transition-colors">
                                    <val.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. WHAT MAKES US DIFFERENT */}
            <section className="py-24 relative z-10 bg-white/5 backdrop-blur-sm border-y border-white/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeIn}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Visionaries Choose Zenvoa</h2>
                            <div className="space-y-4">
                                {[
                                    "Fast agile delivery without compromising quality.",
                                    "Premium UI/UX that captures attention.",
                                    "Lifetime Maintenance Support included.",
                                    "Dedicated Project Manager for every client.",
                                    "AI-powered workflows for efficiency.",
                                    "100% Tailored, scratch-built solutions."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-3 text-lg text-slate-300">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="relative h-[400px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl border border-white/10 p-8 flex items-center justify-center">
                            {/* Abstract Visual */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_70%)]"></div>
                            <Trophy className="w-32 h-32 text-white/20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. PROCESS */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -translate-y-1/2 z-0"></div>

                        {[
                            { title: "Discovery", desc: "We dive deep into your goals." },
                            { title: "Planning & UI/UX", desc: "Blueprinting the perfect user journey." },
                            { title: "Development", desc: "Clean code, delivered in sprints." },
                            { title: "Launch", desc: "Deploying with confidence." },
                            { title: "Lifetime Support", desc: "We stay by your side forever." }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative z-10 flex flex-col items-center text-center max-w-[200px]"
                            >
                                <div className="w-12 h-12 bg-[#060712] border-2 border-indigo-500 rounded-full flex items-center justify-center font-bold text-indigo-400 mb-4 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                    {i + 1}
                                </div>
                                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                                <p className="text-xs text-slate-400">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. CTA */}
            <section className="py-32 relative z-10 text-center">
                <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeIn}>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Let’s Build Something <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Extraordinary.</span></h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                            Ready to transform your idea into reality?
                        </p>
                        <div className="flex justify-center">
                            <SubtleButton text="Get a Free Quote" onClick={() => navigate('/contact')} />
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

// Helper icon import fix
import { Code } from "lucide-react"; 
