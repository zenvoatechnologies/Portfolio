import { Link } from "react-router-dom"

export default function ProjectCard({ project }) {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white">
      <div className="h-44 bg-gray-100 flex items-center justify-center">
        {project.images?.[0] ? (
          <img src={project.images[0]} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500">No Image</span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        <p className="mt-2 text-sm">
          {project.description?.slice(0, 120)}...
        </p>

        <Link to={`/portfolio/${project.slug}`} className="text-indigo-600 mt-2 block">
          See Details →
        </Link>
      </div>
    </div>
  )
}
