"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Developer",
    company: "Greenrim Training Institute",
    location: "South Africa",
    period: "2023 – 2024",
    type: "Full-time",
    description:
      "Worked as a developer at Greenrim Training Institute for 12 months. Primary achievement was building EduLink Intelligence — a production multi-tenant school management SaaS platform serving Providers, Principals, Teachers, Learners and Parents, deployed live on Vercel.",
    highlights: [
      "Built EduLink Intelligence: a full multi-tenant school SaaS with 5 distinct user roles",
      "Implemented multi-role NextAuth.js authentication (email + SA ID number login for learners)",
      "Designed the full Prisma + PostgreSQL (Neon) schema: schools, users, classes, assessments, grades, attendance, billing, messaging, PTM bookings, AI insights, quizzes and assets",
      "Built role-specific dashboards with MUI v7 and Recharts data visualisations",
      "Integrated tiered billing system (Small / Medium / Large school tiers) with audit logging",
      "Deployed and managed the production app on Vercel with Neon serverless PostgreSQL",
    ],
    tech: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js", "MUI v7", "Recharts", "Vercel"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    role: "Freelance & Personal Projects",
    company: "Self-Directed",
    location: "Remote",
    period: "2022 – 2023",
    type: "Freelance",
    description:
      "Before joining Greenrim, I built a portfolio of personal and freelance projects to sharpen my skills — from landing pages for small businesses to full-stack CRUD applications.",
    highlights: [
      "Built 10+ personal projects spanning frontend and backend",
      "Designed and developed landing pages for local small businesses",
      "Completed freeCodeCamp and The Odin Project curricula",
      "Started learning React and Node.js through self-study",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    color: "from-violet-500 to-fuchsia-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/5 via-transparent to-indigo-950/5 pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-mono text-indigo-400 text-sm tracking-widest uppercase block mb-3">
              Career Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A decade of building products that people love, at scale
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute left-8 top-8 w-3 h-3 rounded-full -translate-x-1/2 hidden md:block"
                    style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                  />

                  <div className="md:ml-20 gradient-border rounded-2xl p-6 lg:p-8 card-hover">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase className="w-4 h-4 text-indigo-400" />
                          <span className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                            {exp.company}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full glass border border-zinc-700/50 text-zinc-400 font-mono">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                      </div>
                      <div className="flex flex-col gap-1.5 lg:items-end shrink-0">
                        <div className="flex items-center gap-1.5 text-zinc-500 text-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="font-mono">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-500 text-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-zinc-400 mb-5 leading-relaxed">{exp.description}</p>

                    <ul className="space-y-2 mb-6">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-zinc-300">
                          <ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-mono glass border border-indigo-500/15 text-indigo-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
