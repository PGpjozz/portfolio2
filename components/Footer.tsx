"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Heart, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/PGpjozz", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:miyelanicliamte@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-zinc-800/60 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-mono text-sm font-semibold text-white">
                miyelani<span className="text-indigo-400">.dev</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Full-Stack Developer from South Africa building modern web applications with 2 years of hands-on experience.
            </p>
          </div>

          <div>
            <h3 className="text-zinc-400 font-mono text-xs uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-zinc-500 hover:text-indigo-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-400 font-mono text-xs uppercase tracking-widest mb-4">Connect</h3>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-lg glass border border-zinc-800 hover:border-indigo-500/40 text-zinc-500 hover:text-indigo-400 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-zinc-600 text-xs mt-4 font-mono">
              Open to new opportunities
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Miyelani Mashimbyi. Built with
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            using Next.js &amp; Tailwind CSS
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-zinc-500 hover:text-indigo-400 text-sm font-medium transition-colors duration-200 group"
          >
            Back to top
            <div className="p-1.5 rounded-lg glass border border-zinc-800 group-hover:border-indigo-500/40">
              <ArrowUp className="w-3 h-3" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
