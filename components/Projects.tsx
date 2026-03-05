"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Star, GitFork, KeyRound, Crown } from "lucide-react";

const filters = ["All", "Full-Stack", "Frontend", "Backend", "Open Source"];

const projects = [
  {
    title: "EduLink Intelligence",
    description:
      "A multi-tenant school management SaaS platform I independently designed and built from scratch. Supports 5 user roles — Provider, Principal, Teacher, Learner (SA ID login) and Parent — each with their own dashboard. Features grading, attendance, timetables, billing tiers, messaging, parent-teacher meeting bookings, AI insights, quizzes, asset management and full audit logging.",
    tags: ["Full-Stack"],
    tech: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js", "MUI v7", "Recharts"],
    liveUrl: "https://edulink-app-ten.vercel.app/",
    githubUrl: "https://github.com/PGpjozz/edulink",
    stars: 0,
    forks: 0,
    featured: true,
    flagship: true,
    gradient: "from-indigo-600/20 to-violet-600/20",
    accent: "border-indigo-500/30",
    credentials: [
      { role: "Provider", login: "provider@edulink.co.za", password: "edulink2026", note: "Sign in at /auth/provider-signin" },
      { role: "Principal", login: "principal@westview.edu.za", password: "password123", note: "/auth/signin" },
      { role: "Teacher", login: "jvanzyl@westview.edu.za", password: "password123", note: "/auth/signin" },
      { role: "Learner", login: "ID: 0801015001083", password: "password123", note: "/auth/signin" },
      { role: "Parent", login: "mnkosi@parent.co.za", password: "password123", note: "/auth/signin" },
    ],
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack task management app with user authentication, CRUD operations, drag-and-drop ordering and due date reminders. Built to sharpen React and Node.js skills.",
    tags: ["Full-Stack"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/PGpjozz",
    stars: 6,
    forks: 2,
    featured: false,
    flagship: false,
    gradient: "from-cyan-600/20 to-blue-600/20",
    accent: "border-cyan-500/30",
  },
  {
    title: "Weather Dashboard",
    description:
      "Fetches live data from the OpenWeatherMap API and displays current conditions, 5-day forecast and location search with a clean, responsive UI.",
    tags: ["Frontend"],
    tech: ["React", "JavaScript", "OpenWeatherMap API", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/PGpjozz",
    stars: 5,
    forks: 1,
    featured: false,
    flagship: false,
    gradient: "from-emerald-600/20 to-teal-600/20",
    accent: "border-emerald-500/30",
  },
  {
    title: "User Auth REST API",
    description:
      "A secure authentication API with JWT tokens, bcrypt password hashing, email verification and role-based access control built with Node.js and Express.",
    tags: ["Backend"],
    tech: ["Node.js", "Express", "MySQL", "JWT", "bcrypt"],
    liveUrl: "#",
    githubUrl: "https://github.com/PGpjozz",
    stars: 7,
    forks: 3,
    featured: false,
    flagship: false,
    gradient: "from-amber-600/20 to-orange-600/20",
    accent: "border-amber-500/30",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — built with Next.js 14, Tailwind CSS and Framer Motion. Smooth scroll animations, custom cursor, type animation, dark theme and fully responsive.",
    tags: ["Frontend", "Open Source"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/PGpjozz",
    stars: 2,
    forks: 0,
    featured: false,
    flagship: false,
    gradient: "from-rose-600/20 to-pink-600/20",
    accent: "border-rose-500/30",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function formatCount(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n.toString();
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-indigo-400 text-sm tracking-widest uppercase block mb-3">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Real projects built with modern stacks — from a full SaaS platform to personal apps
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeFilter === filter
                ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25"
                : "glass border border-zinc-700/50 hover:border-indigo-500/30 text-zinc-400 hover:text-zinc-100"
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => {
              const isFlagship = 'flagship' in project && project.flagship;
              return (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  layout
                  className={`relative rounded-2xl overflow-hidden gradient-border card-hover group ${isFlagship ? 'lg:col-span-3 ring-1 ring-amber-500/30' : ''
                    }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />

                  {isFlagship ? (
                    /* ── Flagship: two-column layout ── */
                    <div className="relative p-6 lg:p-8">
                      <div className="grid lg:grid-cols-5 gap-8">
                        {/* Left: info */}
                        <div className="lg:col-span-3">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-semibold">
                              <Crown className="w-3.5 h-3.5 text-amber-400" />
                              Flagship Project
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-zinc-100 mb-2">{project.title}</h3>
                          <p className="text-zinc-400 text-sm leading-relaxed mb-5">{project.description}</p>
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.tech.map((t) => (
                              <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20">{t}</span>
                            ))}
                          </div>
                          <div className="flex items-center gap-3">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-200">
                              <ExternalLink className="w-4 h-4" /> Live App
                            </a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-zinc-700 hover:border-indigo-500/40 text-zinc-300 hover:text-white text-sm font-semibold transition-all duration-200">
                              <Github className="w-4 h-4" /> GitHub
                            </a>
                          </div>
                        </div>

                        {/* Right: credentials */}
                        {'credentials' in project && project.credentials && (
                          <div className="lg:col-span-2">
                            <div className="rounded-xl bg-zinc-900/80 border border-zinc-700/50 overflow-hidden h-full">
                              <div className="px-4 py-2.5 border-b border-zinc-700/50 flex items-center gap-2">
                                <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                                <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Test Login Credentials</span>
                              </div>
                              <div className="px-4 py-3 border-b border-zinc-700/40">
                                <p className="text-xs text-zinc-500 mb-1.5 font-mono"><span className="text-zinc-400 font-semibold">Provider</span> — separate page:</p>
                                <a href="https://edulink-app-ten.vercel.app/auth/provider-signin" target="_blank" rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono hover:bg-indigo-500/25 transition-colors mb-2">
                                  <ExternalLink className="w-3 h-3" /> /auth/provider-signin
                                </a>
                                <table className="w-full text-xs font-mono">
                                  <tbody>
                                    <tr>
                                      <td className="py-1 pr-2 text-violet-400 w-20">Provider</td>
                                      <td className="py-1 pr-2 text-emerald-400/90">provider@edulink.co.za</td>
                                      <td className="py-1 text-zinc-400">edulink2026</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="px-4 py-3">
                                <p className="text-xs text-zinc-500 mb-1.5 font-mono"><span className="text-zinc-400 font-semibold">All other roles</span> — standard page:</p>
                                <a href="https://edulink-app-ten.vercel.app/auth/signin" target="_blank" rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono hover:bg-indigo-500/25 transition-colors mb-2">
                                  <ExternalLink className="w-3 h-3" /> /auth/signin
                                </a>
                                <table className="w-full text-xs font-mono">
                                  <tbody>
                                    {project.credentials.filter((c) => c.role !== 'Provider').map((c) => (
                                      <tr key={c.role} className="border-t border-zinc-800/40 first:border-0">
                                        <td className="py-1.5 pr-2 text-violet-400 w-20">{c.role}</td>
                                        <td className="py-1.5 pr-2 text-emerald-400/90 break-all">{c.login}</td>
                                        <td className="py-1.5 text-zinc-400">{c.password}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* ── Regular card ── */
                    <div className="relative p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white mb-1">{project.title}</h3>
                          <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono">
                            <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400" />{formatCount(project.stars)}</span>
                            <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{formatCount(project.forks)}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="p-2 rounded-lg glass border border-zinc-700/50 hover:border-indigo-500/40 text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
                            <Github className="w-4 h-4" />
                          </a>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="p-2 rounded-lg glass border border-zinc-700/50 hover:border-indigo-500/40 text-zinc-400 hover:text-white transition-colors" aria-label="Live Demo">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-xs font-mono text-indigo-300/80 bg-indigo-500/10 border border-indigo-500/10">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/PGpjozz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-zinc-700 hover:border-indigo-500/50 text-zinc-300 hover:text-white font-medium transition-all duration-200 group"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
