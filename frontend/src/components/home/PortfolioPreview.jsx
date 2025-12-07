import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PortfolioPreview() {
    // 🚀 INSTANT LOAD: Initialize with the Manual/Mock Project immediately
    const manualProject = {
        _id: "turf-app",
        title: "Turf Booking App",
        description: "🚧 Under Construction — A comprehensive sports venue booking platform built for high performance.",
        techStack: ["React Native (Expo)", "Android Studio", "Node.js", "MongoDB"],
        images: ["https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop"],
        slug: "turf-booking-app",
        status: "in-progress"
    };

    const [projects, setProjects] = useState([manualProject]); // Start with data!
    const [loading, setLoading] = useState(false); // No spinner!

    useEffect(() => {
        // Fetch fresh data in background
        axios.get(import.meta.env.VITE_API_URL.replace(/\/$/, "") + "/api/projects")
            .then(res => {
                if (Array.isArray(res.data) && res.data.length > 0) {
                    // Check if manual project is already in API response to avoid duplicate
                    const apiHasTurf = res.data.find(p => p.title === "Turf Booking App");
                    if (!apiHasTurf) {
                        setProjects([manualProject, ...res.data].slice(0, 3));
                    } else {
                        setProjects(res.data.slice(0, 3));
                    }
                }
            })
            .catch(err => console.error("Background fetch failed (ignoring):", err));
    }, []);

    const displayProjects = projects;

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
                </div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <div className="animate-spin h-8 w-8 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayProjects.length > 0 ? (
                            displayProjects.slice(0, 3).map((p, i) => <ProjectCard key={p._id} project={p} index={i} />)
                        ) : (
                            <div className="col-span-3 text-center py-10 bg-white/5 backdrop-blur-sm rounded-xl border border-dashed border-white/20">
                                <p className="text-slate-400">Checking for projects...</p>
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-8 text-center md:hidden">
                    <Link to="/portfolio" className="inline-flex items-center text-indigo-300 font-bold hover:text-white">
                        View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
