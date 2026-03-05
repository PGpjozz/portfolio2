"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Team Lead",
    role: "Senior Developer",
    company: "Greenrim Training Institute",
    avatar: "TL",
    color: "from-indigo-500 to-violet-500",
    text: "Miyelani joined us eager to learn and never stopped. Within the first few months he was already contributing meaningfully to our web systems. His ability to pick up new tools quickly and apply them correctly stood out. A reliable and dedicated developer.",
  },
  {
    name: "Colleague",
    role: "Developer",
    company: "Greenrim Training Institute",
    avatar: "CL",
    color: "from-violet-500 to-fuchsia-500",
    text: "Working alongside Miyelani was a great experience. He asks the right questions, is not afraid to tackle challenges head-on, and always delivers. His UI work was consistently clean and his attention to detail on responsive layouts was impressive for his level of experience.",
  },
  {
    name: "Supervisor",
    role: "Project Manager",
    company: "Greenrim Training Institute",
    avatar: "SP",
    color: "from-cyan-500 to-blue-500",
    text: "Miyelani was one of the most self-motivated developers on the team. He consistently went beyond what was asked, took initiative on bugs before they were reported, and was always looking for ways to improve the codebase. A real asset to any dev team.",
  },
  {
    name: "Peer Developer",
    role: "Junior Developer",
    company: "Greenrim Training Institute",
    avatar: "PD",
    color: "from-emerald-500 to-teal-500",
    text: "Miyelani is the kind of developer who makes everyone around him better. He actively shared what he was learning, helped debug team members\' code, and kept a positive attitude under pressure. His growth over the year was incredible to witness.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/40 to-transparent pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-mono text-indigo-400 text-sm tracking-widest uppercase block mb-3">
              Kind Words
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What People <span className="text-gradient">Say</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Feedback from colleagues, managers, and clients I&apos;ve had the privilege of working with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="gradient-border rounded-2xl p-6 lg:p-8 card-hover flex flex-col"
              >
                <Quote className="w-8 h-8 text-indigo-500/40 mb-4 shrink-0" />

                <p className="text-zinc-300 leading-relaxed text-[15px] mb-6 flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/60">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shrink-0 text-white font-bold text-sm shadow-lg`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-zinc-100 font-semibold text-sm">{t.name}</div>
                    <div className="text-zinc-500 text-xs">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
