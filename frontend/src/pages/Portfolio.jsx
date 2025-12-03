import axios from "axios"
import { useEffect, useState } from "react"
import ProjectCard from "../components/ProjectCard"

export default function Portfolio() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/api/projects")
      .then(res => setProjects(res.data))
  }, [])

  return (
    <section className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </section>
  )
}
