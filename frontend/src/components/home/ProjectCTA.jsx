import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import copy from "../../homepageCopy.json";
import SubtleButton from "../ui/SubtleButton";

export default function ProjectCTA() {
    const navigate = useNavigate();

    return (
        <section className="py-32 bg-transparent relative overflow-hidden flex items-center justify-center min-h-[50vh]">
            <div className="container mx-auto px-4 z-10 text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-md">
                        ✨ Let's Create Magic
                    </span>

                    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 tracking-tight leading-tight drop-shadow-2xl">
                        {copy.projectCTA.headline}
                    </h2>

                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light">
                        We don't just write code; we architect digital experiences that define brands. Ready to start your journey?
                    </p>

                    <div className="flex justify-center">
                        <SubtleButton
                            text={copy.projectCTA.cta}
                            onClick={() => navigate('/contact')}
                        />
                    </div>

                </motion.div>
            </div>

            {/* Subtle glow behind the text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
}
