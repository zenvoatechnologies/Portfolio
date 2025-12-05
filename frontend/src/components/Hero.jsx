import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Code } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-20 pb-32 lg:pt-32 lg:pb-40">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
        <Code className="w-96 h-96 text-indigo-900 transform rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Digital Success</span>
            </h1>

            <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Zenvoa Technologies crafts premium web applications and digital solutions.
              We turn complex problems into elegant, user-friendly experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
              >
                View Our Work <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border-2 border-white/10 rounded-xl font-bold text-lg hover:border-white/20 hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-md"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
