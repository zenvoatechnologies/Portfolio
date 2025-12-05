import copy from "../../homepageCopy.json";
import LogoLoop from "./LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiFlutter, SiPostgresql, SiDocker, SiFirebase, SiGraphql, SiFigma, SiVercel, SiPrisma, SiSupabase, SiSvelte, SiGithub } from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function TechStack() {
    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
        { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
        { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
        { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
        { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
        { node: <SiSvelte />, title: "Svelte", href: "https://svelte.dev" },
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
        { node: <FaAws />, title: "AWS", href: "https://aws.amazon.com" },
        { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" }
    ];

    return (
        <section className="py-20 relative overflow-hidden">

            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                    Tech Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">We Love</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Leveraging modern, scalable technologies to build future-proof solutions.
                </p>
            </div>

            {/* LogoLoop */}
            <div className="w-full relative z-10 mt-6">
                <LogoLoop
                    logos={techLogos}
                    speed={50} // Slower speed for better visibility
                    direction="left"
                    logoHeight={150}
                    gap={80}
                    hoverSpeed={0}
                    scaleOnHover={true}
                    ariaLabel="Technology stack used by Zenvoa"
                />
            </div>

        </section>
    );
}

