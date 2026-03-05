"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = [
  {
    title: "Frontend",
    color: "from-indigo-500 to-violet-500",
    borderColor: "border-indigo-500/20",
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 82 },
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 78 },
      { name: "Material UI (MUI)", level: 72 },
    ],
  },
  {
    title: "Backend & Auth",
    color: "from-violet-500 to-fuchsia-500",
    borderColor: "border-violet-500/20",
    skills: [
      { name: "Node.js / Express", level: 72 },
      { name: "NextAuth.js", level: 75 },
      { name: "Prisma ORM", level: 73 },
      { name: "REST API Design", level: 70 },
      { name: "bcrypt / JWT", level: 70 },
      { name: "Role-based Access Control", level: 74 },
    ],
  },
  {
    title: "Database & Tools",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/20",
    skills: [
      { name: "PostgreSQL (Neon)", level: 72 },
      { name: "MySQL", level: 70 },
      { name: "MongoDB", level: 62 },
      { name: "Git / GitHub", level: 82 },
      { name: "Vercel deployment", level: 78 },
      { name: "Postman / API testing", level: 70 },
    ],
  },
];

const techBadges = [
  "Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3",
  "Tailwind CSS", "MUI", "Framer Motion", "Recharts",
  "Node.js", "Express", "NextAuth.js", "Prisma ORM",
  "PostgreSQL", "MySQL", "MongoDB", "Neon DB",
  "Git", "GitHub", "Vercel", "REST APIs", "bcrypt",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 to-transparent pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-mono text-indigo-400 text-sm tracking-widest uppercase block mb-3">
              Technical Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Skills &amp; <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A decade of hands-on experience across the full development spectrum
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                className={`gradient-border rounded-2xl p-6`}
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${cat.color} mb-6`}>
                  <span className="text-white font-semibold text-sm">{cat.title}</span>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-zinc-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-zinc-500 text-xs font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: idx * 0.1 + 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-center text-zinc-400 font-mono text-sm tracking-widest uppercase mb-6">
              Also Proficient In
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1.5 rounded-lg glass border border-zinc-700/50 hover:border-indigo-500/40 text-zinc-400 hover:text-indigo-300 text-sm font-mono transition-colors duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
