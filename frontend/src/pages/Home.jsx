import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/api/projects")
      .then(res => setProjects(res.data))
      .catch(() => setProjects([]))
  }, [])

  return (
    <>
      <Hero />
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">Our Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {projects.map(p => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </div>
      </section>
    </>
  )
}
