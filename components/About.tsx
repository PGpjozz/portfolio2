"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Coffee, Award, Users, Zap } from "lucide-react";

const stats = [
  { icon: Award, value: "2", label: "Years Experience", color: "from-indigo-500 to-violet-500" },
  { icon: Zap, value: "15+", label: "Projects Built", color: "from-violet-500 to-fuchsia-500" },
  { icon: Users, value: "4", label: "Certifications", color: "from-cyan-500 to-blue-500" },
  { icon: Coffee, value: "2025", label: "VUT Graduate", color: "from-emerald-500 to-teal-500" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.div variants={itemVariants} className="mb-3">
              <span className="font-mono text-indigo-400 text-sm tracking-widest uppercase">About Me</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Building Ideas Into{" "}
              <span className="text-gradient">Digital Reality</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-zinc-400 text-lg leading-relaxed mb-5">
              I&apos;m Miyelani Mashimbyi, a full-stack developer based in South Africa. I hold a
              <span className="text-indigo-400 font-medium"> Diploma in Information Technology from VUT (2025)</span> and
              have earned certifications in CCNA, Azure Fundamentals, Dynamics 365 CRM and ITIL 4.
              My flagship project is <span className="text-indigo-400 font-medium">EduLink Intelligence</span> —
              a production-ready, multi-tenant school management SaaS platform I independently designed and built
              from scratch, powered by Next.js, Prisma, PostgreSQL and NextAuth.
            </motion.p>

            <motion.p variants={itemVariants} className="text-zinc-400 text-lg leading-relaxed mb-8">
              I care deeply about writing clean, maintainable code and building products people
              actually use. I&apos;m always learning — growing fast across backend architecture,
              database design and cloud deployment.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {["Fast Learner", "Problem Solver", "Team Player", "Detail-Oriented", "Self-Motivated"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-sm font-medium glass border border-indigo-500/20 text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label, color }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03, y: -4 }}
                className="gradient-border rounded-2xl p-6 card-hover cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-sm text-zinc-400 font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
