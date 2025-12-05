import { Code2, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#060712]/80 backdrop-blur-lg border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img src="/logo-navbar.png" alt="Zenvoa Technologies" className="h-30 w-auto object-contain" />
                        </Link>
                        <p className="text-slate-500 text-sm max-w-sm">
                            Building the digital future with precision code and premium design.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 opacity-70">
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 opacity-70">
                            Connect
                        </h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/zenvoatechnologies" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://www.linkedin.com/company/zenova-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/zenvoa.technologies/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                    <p className="text-center text-slate-600 text-sm">
                        © {new Date().getFullYear()} Zenvoa Technologies. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
