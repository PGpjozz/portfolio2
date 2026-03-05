"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Diploma in Information Technology",
    company: "Vaal University of Technology (VUT)",
    location: "South Africa",
    period: "2022 – 2025",
    type: "Education",
    description:
      "Completed a Diploma in Information Technology at VUT, graduating in 2025. Built a strong academic foundation in software development, networking, systems analysis, databases and IT project management.",
    highlights: [
      "Studied software development, databases, networking and systems analysis",
      "Completed practical modules in web development and application design",
      "Graduated 2025",
    ],
    tech: ["Software Development", "Networking", "Databases", "Systems Analysis", "IT Project Management"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    role: "Professional Certifications",
    company: "Cisco · Microsoft · AXELOS",
    location: "Online / Accredited Centres",
    period: "2023 – 2025",
    type: "Certifications",
    description:
      "Earned four industry-recognised certifications spanning networking, cloud, CRM and IT service management.",
    highlights: [
      "CCNA — Cisco Certified Network Associate (Networking fundamentals, routing & switching)",
      "Azure Fundamentals (AZ-900) — Microsoft Azure cloud concepts and services",
      "Dynamics 365 Fundamentals CRM — Microsoft customer engagement and CRM platform",
      "ITIL 4 Foundation — IT service management best practices",
    ],
    tech: ["CCNA", "Azure Fundamentals", "Dynamics 365 CRM", "ITIL 4"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance & Personal Projects",
    location: "South Africa (Remote)",
    period: "2024 – Present",
    type: "Freelance",
    description:
      "Building production-grade applications independently, including EduLink Intelligence — a multi-tenant school management SaaS platform with 5 user roles, full auth, billing, and real-time dashboards. Delivering web solutions for clients while continuously expanding my stack.",
    highlights: [
      "Independently designed and built EduLink Intelligence from scratch — deployed live on Vercel",
      "Implemented multi-role NextAuth.js auth, Prisma ORM, and PostgreSQL (Neon) on EduLink",
      "Built role-specific dashboards with MUI v7 and Recharts data visualisations",
      "Delivered responsive landing pages and web apps for freelance clients",
      "Managed full project lifecycle: architecture, development, deployment and maintenance",
    ],
    tech: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js", "MUI v7", "Recharts", "Vercel"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    role: "Self-Taught Developer",
    company: "Personal Projects",
    location: "South Africa",
    period: "2022 – 2024",
    type: "Self-Directed",
    description:
      "Grew from the fundamentals to full-stack development through structured self-study, online curricula and hands-on building. Focused on mastering the modern JavaScript ecosystem.",
    highlights: [
      "Completed freeCodeCamp and The Odin Project full-stack curricula",
      "Built 10+ projects across frontend, backend and databases",
      "Mastered HTML, CSS, JavaScript, then progressed to React, Node.js and SQL",
      "Designed and shipped landing pages for local small businesses",
      "Established strong Git/GitHub workflow and deployment practices",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MySQL", "MongoDB"],
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
              Experience <span className="text-gradient">&amp; Education</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Diploma in IT (VUT, 2025) · 4 certifications · 2 years building real projects
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
