"use client";

import { motion } from "framer-motion";

const techs = [
  "Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3",
  "Tailwind CSS", "Material UI", "Framer Motion", "Recharts",
  "Node.js", "Express", "Prisma ORM", "NextAuth.js",
  "PostgreSQL", "Neon DB", "MySQL", "MongoDB",
  "Python", "Django", "PHP", "Java",
  "Git", "GitHub", "Vercel", "REST APIs", "bcrypt", "JWT",
];

const Row = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
  <div className="flex overflow-hidden select-none">
    <motion.div
      className="flex shrink-0 gap-4 pr-4"
      animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
      transition={{ duration: 25, ease: "linear", repeat: Infinity }}
    >
      {[...items, ...items].map((tech, i) => (
        <span
          key={`${tech}-${i}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-zinc-800/60 text-zinc-500 font-mono text-sm whitespace-nowrap hover:border-indigo-500/30 hover:text-indigo-400 transition-colors duration-200"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
          {tech}
        </span>
      ))}
    </motion.div>
  </div>
);

export default function TechMarquee() {
  const half = Math.ceil(techs.length / 2);
  const row1 = techs.slice(0, half);
  const row2 = techs.slice(half);

  return (
    <div className="relative py-10 overflow-hidden border-y border-zinc-800/40">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="space-y-3">
        <Row items={row1} />
        <Row items={row2} reverse />
      </div>
    </div>
  );
}
