"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const socials = [
  { icon: Github, href: "https://github.com/PGpjozz", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:miyelaniclimate@gmail.com", label: "Email" },
];

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const codeLines = [
  { tokens: [{ text: "const", color: "text-violet-400" }, { text: " developer", color: "text-cyan-300" }, { text: " = {", color: "text-zinc-300" }] },
  { tokens: [{ text: "  name", color: "text-indigo-300" }, { text: ":", color: "text-zinc-400" }, { text: ' "Miyelani Mashimbyi"', color: "text-emerald-400" }, { text: ",", color: "text-zinc-400" }] },
  { tokens: [{ text: "  experience", color: "text-indigo-300" }, { text: ":", color: "text-zinc-400" }, { text: ' "2 years"', color: "text-emerald-400" }, { text: ",", color: "text-zinc-400" }] },
  { tokens: [{ text: "  stack", color: "text-indigo-300" }, { text: ":", color: "text-zinc-400" }, { text: " [", color: "text-zinc-300" }] },
  { tokens: [{ text: '    "Next.js"', color: "text-emerald-400" }, { text: ", ", color: "text-zinc-400" }, { text: '"TypeScript"', color: "text-emerald-400" }, { text: ",", color: "text-zinc-400" }] },
  { tokens: [{ text: '    "Prisma"', color: "text-emerald-400" }, { text: ", ", color: "text-zinc-400" }, { text: '"PostgreSQL"', color: "text-emerald-400" }, { text: ",", color: "text-zinc-400" }] },
  { tokens: [{ text: '    "NextAuth.js"', color: "text-emerald-400" }, { text: ", ", color: "text-zinc-400" }, { text: '"MUI"', color: "text-emerald-400" }] },
  { tokens: [{ text: "  ]", color: "text-zinc-300" }, { text: ",", color: "text-zinc-400" }] },
  { tokens: [{ text: "  available", color: "text-indigo-300" }, { text: ":", color: "text-zinc-400" }, { text: " true", color: "text-orange-400" }] },
  { tokens: [{ text: "}", color: "text-zinc-300" }] },
];

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-radial from-indigo-950/30 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container-custom section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-sm text-indigo-300 mb-8 font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="text-zinc-100">Hi, I&apos;m </span>
              <span className="text-gradient">Miyelani Mashimbyi</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-zinc-400 mb-6 h-10"
            >
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Frontend Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                  "Web App Builder",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-mono"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base text-zinc-400 max-w-lg mb-10 leading-relaxed"
            >
              A driven developer with <span className="text-indigo-400 font-semibold">2 years</span> of hands-on experience building
              modern web applications through freelance work and personal projects. Passionate about
              clean code, great UX, and growing every day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
            >
              <motion.button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 transition-all duration-200"
              >
                View My Work
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl glass border border-zinc-700 hover:border-indigo-500/50 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl glass border border-zinc-800 hover:border-indigo-500/40 text-zinc-500 hover:text-indigo-400 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            variants={floatVariants}
            whileInView="animate"
            viewport={{ once: false }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-2xl rounded-3xl" />

              {/* Code card */}
              <div className="relative gradient-border rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                {/* Terminal title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs text-zinc-500 font-mono">developer.ts</span>
                </div>

                {/* Code body */}
                <div className="p-6 bg-zinc-950/80 font-mono text-sm leading-7">
                  {codeLines.map((line, lineIdx) => (
                    <motion.div
                      key={lineIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + lineIdx * 0.07, duration: 0.3 }}
                      className="flex"
                    >
                      <span className="w-6 text-zinc-700 select-none shrink-0 text-right mr-4 text-xs leading-7">
                        {lineIdx + 1}
                      </span>
                      <span>
                        {line.tokens.map((token, tokenIdx) => (
                          <span key={tokenIdx} className={token.color}>
                            {token.text}
                          </span>
                        ))}
                      </span>
                    </motion.div>
                  ))}
                  {/* Blinking cursor */}
                  <div className="flex mt-1">
                    <span className="w-6 mr-4" />
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-5 bg-indigo-400 rounded-sm inline-block"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge: commits today */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 glass border border-emerald-500/30 rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-base">🎓</div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">VUT Diploma</div>
                  <div className="text-sm font-bold text-white">IT Graduate 2025</div>
                </div>
              </motion.div>

              {/* Floating badge: open to work */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="absolute -top-4 -right-4 glass border border-indigo-500/30 rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-xl"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="text-xs font-mono text-zinc-400">Status</div>
                  <div className="text-sm font-bold text-emerald-300">Open to Work</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            variants={floatVariants}
            animate="animate"
            className="flex flex-col items-center gap-2 text-zinc-600 hover:text-indigo-400 transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
