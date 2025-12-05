import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col h-full shadow-lg"
    >
      <div className="relative h-48 overflow-hidden bg-black/20">
        {project.images && project.images.length > 0 ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/5 text-indigo-400/50">
            <span className="text-4xl font-bold tracking-tighter">Zenvoa</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060712] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-6 flex flex-col flex-grow relative">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4 flex-grow font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack?.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/portfolio/${project.slug}`}
          className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-white transition-colors uppercase tracking-wide"
        >
          View Case Study <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}
