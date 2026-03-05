"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Mail, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "miyelanicliamte@gmail.com",
    href: "mailto:miyelanicliamte@gmail.com",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "South Africa",
    href: null,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Clock,
    label: "Phone",
    value: "078 610 1360",
    href: "tel:+27786101360",
    color: "from-emerald-500 to-teal-500",
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

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 text-sm";

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-mono text-indigo-400 text-sm tracking-widest uppercase block mb-3">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let&apos;s <span className="text-gradient">Work Together</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? My inbox is always open.
              I typically respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="gradient-border rounded-2xl p-5 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-zinc-200 font-medium hover:text-indigo-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-zinc-200 font-medium">{value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="gradient-border rounded-2xl p-6 mt-6">
                <h3 className="text-zinc-200 font-semibold mb-3">What I&apos;m looking for</h3>
                <ul className="space-y-2">
                  {[
                    "Junior / Mid-level developer roles",
                    "Internship or learnership opportunities",
                    "Remote or hybrid positions in South Africa",
                    "Open source collaboration & mentorship",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="gradient-border rounded-2xl p-6 lg:p-8">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Message Sent!</h3>
                    <p className="text-zinc-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry / Job Opportunity"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        rows={6}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                      whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
