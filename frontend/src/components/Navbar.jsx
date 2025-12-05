import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SubtleButton from "./ui/SubtleButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#060712]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-10 sm:px-12 lg:px-16">
                <div className="flex items-center justify-between h-24">
                    <Link to="/" className="flex items-center gap-1 group">
                        <img src="/logo-navbar.png" alt="Zenvoa Technologies" className="h-40 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-2xl" />
                    </Link>

                    <div className="hidden md:block">
                        <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
                            {links.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                            ? "text-white shadow-md"
                                            : "text-slate-400 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -z-10"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <SubtleButton
                            text="Get a Free Quote"
                            onClick={() => navigate('/contact')}
                        />
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-slate-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#060712] border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium ${location.pathname === link.path
                                        ? "text-white bg-indigo-600"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex justify-center">
                                <SubtleButton
                                    text="Get a Free Quote"
                                    onClick={() => {
                                        setIsOpen(false);
                                        navigate('/contact');
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
