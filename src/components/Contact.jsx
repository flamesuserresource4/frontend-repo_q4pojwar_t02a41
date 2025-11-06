import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/0 to-fuchsia-500/0 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold"
        >
          Contact
          <span className="block text-sm md:text-base font-normal text-neutral-600 dark:text-neutral-300 mt-1">
            I’d love to collaborate on AI/ML projects and research.
          </span>
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            href="mailto:makhil.vnk@gmail.com"
            className="rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 p-5 hover:shadow-[0_0_60px_-15px_rgba(236,72,153,0.35)]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-sm">Email</div>
                <div className="text-neutral-700 dark:text-neutral-300 text-sm">makhil.vnk@gmail.com</div>
              </div>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 p-5"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-sm">Phone</div>
                <div className="text-neutral-700 dark:text-neutral-300 text-sm">+91 6302958788</div>
              </div>
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href="https://www.linkedin.com/in/akhil-ml-nlp/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 p-5"
          >
            <div className="text-sm">LinkedIn</div>
            <div className="text-neutral-700 dark:text-neutral-300 text-sm break-all">linkedin.com/in/akhil-ml-nlp/</div>
          </motion.a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="https://github.com/akhilkumar-dot" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10">GitHub</a>
          <a href="/resume.pdf" className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white shadow-lg shadow-fuchsia-500/30">Download Resume</a>
        </div>

        <div className="mt-10 text-xs text-neutral-500">
          B.Tech (CSE) — VIT Amaravati (2023–2027) • CGPA: 8.23/10 • Machine Learning, NLP
        </div>
      </div>
    </section>
  );
}
