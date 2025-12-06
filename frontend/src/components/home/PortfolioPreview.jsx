import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PortfolioPreview() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL.replace(/\/$/, "") + "/api/projects")
            .then(res => {
                // Take top 3 projects
                setProjects(res.data.slice(0, 3));
                setLoading(false);
            })
        setLoading(false);
    });
}, []);

// Manual injection of the requested project
const turfProject = {
    _id: "turf-app",
    title: "Turf Booking App",
    description: "A seamless platform for booking sports venues. Real-time slot availability, instant bookings, and owner dashboards.",
    techStack: ["React Native", "Node.js", "MongoDB"],
    images: ["https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop"],
    slug: "turf-booking-app",
    status: "in-progress"
};

// Combine API projects with manual project if not present
const displayProjects = [...projects];
if (!displayProjects.find(p => p.title === "Turf Booking App")) {
    displayProjects.push(turfProject);
}

return (
    <section className="py-24 bg-transparent border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-sm font-bold text-indigo-300 tracking-wide uppercase mb-2">Our Work</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                        Featured Projects
                    </h3>
                </div>
                <Link to="/portfolio" className="hidden md:flex items-center text-indigo-300 font-bold hover:text-white transition-colors">
                    View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/portfolio" className="inline-flex items-center text-indigo-300 font-bold hover:text-white">
                        View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
    </section>
);
}
