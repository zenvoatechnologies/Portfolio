import axios from "axios"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FolderOpen, Loader2 } from "lucide-react"
import ProjectCard from "../components/ProjectCard"
import Ballpit from "../components/Ballpit"
import SEO from "../components/SEO"

export default function Portfolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL.replace(/\/$/, "") + "/api/projects")
      .then(res => {
        setProjects(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
        // Mock data fallback if API fails
        setProjects([
          {
            _id: "turf-app",
            title: "Turf Booking App",
            description: "A seamless platform for booking sports venues. Real-time slot availability, instant bookings, and owner dashboards.",
            techStack: ["React Native", "Node.js", "MongoDB"],
            images: ["https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop"],
            slug: "turf-booking-app",
            status: "in-progress"
          },
          {
            _id: "portfolio",
            title: "Zenvoa Portfolio",
            description: "Our own high-performance portfolio website featuring glassmorphism design and 3D animations.",
            techStack: ["React", "Vite", "Tailwind", "Framer Motion"],
            images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"],
            slug: "zenvoa-portfolio"
          }
        ])
      })
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#060712] py-20">
      <SEO
        title="Portfolio"
        description="Explore our latest work and case studies. Zenvoa Technologies delivers exceptional digital experiences."
        url="https://zenvoatechnologies.com/portfolio"
      />
      <Ballpit />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-4 backdrop-blur-md">
            Our Work
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl mb-4">
            Selected Projects
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explore our latest work and case studies. We take pride in delivering exceptional results for our clients.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex h-[30vh] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
          </div>
        ) : projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 bg-white/5 backdrop-blur-md rounded-2xl border border-dashed border-white/10"
          >
            <div className="bg-white/10 p-4 rounded-full mb-6">
              <FolderOpen className="h-10 w-10 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Projects Coming Soon</h2>
            <p className="text-slate-400 text-center max-w-md">
              We are currently compiling our latest success stories. Check back soon to see what we've been building!
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={p._id} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
