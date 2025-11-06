import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'PDF Question-Answering Chatbot (RAG System)',
    desc: 'Document-intelligence chatbot using Retrieval-Augmented Generation integrated with Telegram via n8n orchestration.',
    tech: ['FastAPI', 'LangChain', 'FAISS', 'Cohere', 'n8n', 'Telegram API'],
    link: 'https://github.com/akhilkumar-dot/Rag-Pipeline',
    outcome: 'Reduced document reading time by 70%'
  },
  {
    title: 'Brain MRI Disease Classification',
    desc: 'CNN-based deep learning model to classify MRI scans (Tumor, Cancer, Aneurysm, Normal) with 85.8% accuracy.',
    tech: ['TensorFlow', 'Keras', 'MLflow', 'DVC', 'NumPy'],
    link: 'https://github.com/akhilkumar-dot/Brain-Tumor',
  },
  {
    title: 'Traffic Sign Recognition System',
    desc: 'Real-time traffic sign recognition with FastAPI backend and WebSocket webcam streaming (>92% accuracy).',
    tech: ['TensorFlow', 'OpenCV', 'FastAPI', 'WebSockets'],
    link: '#',
  },
  {
    title: 'AI Mental Health Assistant Chatbot',
    desc: 'Conversational AI with emotion detection, symptom checker, and meditation guidance.',
    tech: ['Transformers', 'FastAPI', 'Streamlit'],
    link: '#',
  },
];

const skills = {
  Languages: ['Python', 'SQL'],
  Libraries: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy'],
  Tools: ['FastAPI', 'Streamlit', 'LangChain', 'FAISS', 'n8n', 'Git', 'Render'],
  Visualization: ['Matplotlib', 'Seaborn'],
  'Soft Skills': ['Analytical Thinking', 'Problem Solving', 'Collaboration'],
};

const certs = [
  'Certified AI Engineer — OneRoadmap',
  'Machine Learning Course — Krish Naik',
  'Deep Learning Specialization — Coursera',
  'NLP with Transformers — HuggingFace',
];

export default function Sections() {
  return (
    <>
      <Projects />
      <Skills />
      <Certifications />
    </>
  );
}

function SectionShell({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/0 to-fuchsia-500/0 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold"
        >
          {title}
          {subtitle && (
            <span className="block text-sm md:text-base font-normal text-neutral-600 dark:text-neutral-300 mt-1">
              {subtitle}
            </span>
          )}
        </motion.h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <SectionShell id="projects" title="Projects" subtitle="Selected work with real-world impact">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            target={p.link?.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur hover:shadow-[0_0_60px_-15px_rgba(56,189,248,0.35)] overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition" />
              </div>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.desc}</p>
              {p.outcome && (
                <div className="mt-2 inline-flex items-center gap-1 text-emerald-400 text-xs">
                  <Star className="h-4 w-4" /> {p.outcome}
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-fuchsia-500 via-sky-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition" />
          </motion.a>
        ))}
      </div>

      <div className="mt-8 text-sm text-neutral-400">
        What I’m learning now: LangGraph, advanced RAG systems, MCP.
      </div>
      <div className="mt-4 text-sm text-neutral-400">
        Achievements: Hackathon participation and continuous community learning.
      </div>
    </SectionShell>
  );
}

function Skills() {
  const bars = [
    { name: 'TensorFlow', level: 85 },
    { name: 'FastAPI', level: 80 },
    { name: 'LangChain', level: 75 },
    { name: 'Transformers', level: 70 },
  ];
  return (
    <SectionShell id="skills" title="Skills" subtitle="Technologies I use to craft AI products">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {bars.map((b, idx) => (
            <motion.div key={b.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
              <div className="flex justify-between text-sm mb-1">
                <span>{b.name}</span>
                <span>{b.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-fuchsia-500 to-sky-500" style={{ width: `${b.level}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(skills).map(([cat, items]) => (
            <motion.div key={cat} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 p-4">
              <div className="text-sm font-semibold mb-2">{cat}</div>
              <div className="flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10">{i}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Certifications() {
  return (
    <SectionShell id="certs" title="Certifications" subtitle="Selected certifications and courses">
      <div className="relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c, idx) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 p-4 text-sm"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
