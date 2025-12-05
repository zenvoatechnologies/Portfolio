import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Loader2 } from "lucide-react"
import Ballpit from "../components/Ballpit"
import SEO from "../components/SEO"

export default function ProjectDetails() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/api/projects/" + slug)
      .then(res => {
        setProject(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
        // Fallback for demo if API fails/mock mode
        if (slug === "turf-app") {
          setProject({
            title: "Turf Booking App",
            description: "A comprehensive solution for booking sports turfs. Features include real-time availability, secure payments, and user profiles. Built with a focus on speed and usability.",
            createdAt: new Date().toISOString(),
            techStack: ["React Native", "Node.js", "MongoDB", "Stripe"],
            images: ["https://placehold.co/600x400/1e1e2e/FFF?text=Turf+App+Screen+1", "https://placehold.co/600x400/1e1e2e/FFF?text=Turf+App+Screen+2"]
          })
        }
      })
  }, [slug])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#060712]">
        <Ballpit />
        <Loader2 className="h-8 w-8 animate-spin text-indigo-500 relative z-10" />
      </div>
    )
  }

  if (!project) return (
    <div className="min-h-screen bg-[#060712] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
      <SEO title="Project Not Found" />
      <Ballpit />
      <div className="relative z-10 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-2">Project Not Found</h2>
        <p className="text-slate-400 mb-6">The project you are looking for does not exist.</p>
        <Link to="/portfolio" className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-500 transition-colors">Return to Portfolio</Link>
      </div>
    </div>
  )

  return (
    <article className="min-h-screen bg-[#060712] relative overflow-hidden">
      <SEO
        title={project.title}
        description={project.description}
        url={`https://zenvoatechnologies.com/portfolio/${slug}`}
        image={project.images?.[0]}
      />
      <Ballpit />

      {/* Header / Title Section */}
      <div className="relative z-10 border-b border-white/5 bg-white/5 backdrop-blur-xl py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Link to="/portfolio" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg"
          >
            {project.title}
          </motion.h1>

          <div className="flex flex-wrap gap-4 items-center text-sm text-slate-400">
            {project.createdAt && (
              <div className="flex items-center bg-black/20 px-3 py-1 rounded-full border border-white/5">
                <Calendar className="h-4 w-4 mr-2 text-indigo-400" />
                {new Date(project.createdAt).toLocaleDateString()}
              </div>
            )}
            {project.techStack?.map((tech, i) => (
              <span key={i} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-indigo-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg prose-invert max-w-none text-slate-300 mb-16 leading-relaxed bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl"
        >
          <p>{project.description}</p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images?.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 relative group"
            >
              <img
                src={img}
                alt={`Project screenshot ${i + 1}`}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  )
}
