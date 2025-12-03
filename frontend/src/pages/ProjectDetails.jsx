import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function ProjectDetails() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/api/projects/" + slug)
      .then(res => setProject(res.data))
  }, [])

  if (!project) return <p className="p-6">Loading...</p>

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {project.images?.map((img, i) => (
          <img key={i} src={img} className="w-full h-64 object-cover" />
        ))}
      </div>
    </div>
  )
}
