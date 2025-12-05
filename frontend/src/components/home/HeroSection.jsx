import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import copy from "../../homepageCopy.json";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent pt-20">
      <div className="container mx-auto px-4 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-md">
            🚀 Elevate Your Digital Presence
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            {copy.hero.headline}
          </h1>

          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-light drop-shadow-md bg-black/20 backdrop-blur-sm rounded-lg py-2 px-4 inline-block">
            {copy.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/50 flex items-center justify-center gap-2 group"
            >
              {copy.hero.ctaPrimary}
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-full font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              {copy.hero.ctaSecondary}
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-slate-300 text-sm font-medium bg-black/30 backdrop-blur-md py-4 rounded-full mx-auto max-w-3xl border border-white/5">
            {copy.hero.badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" /> {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Grid Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-50"></div>
    </section>
  );
}
