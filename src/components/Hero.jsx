import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="about" className="relative pt-24 md:pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/20 rounded-2xl p-6 md:p-8 shadow-[0_0_60px_-15px_rgba(168,85,247,0.45)]"
          >
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-sky-500/20 border border-white/20 text-fuchsia-400 mb-4">
              AI/ML Engineer • Student at VIT-AP
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Mutyalapati Akhil Kumar
            </h1>
            <TypingHeadline />
            <p className="mt-3 text-sm md:text-base text-neutral-700 dark:text-neutral-300">
              Detail-oriented AI/ML undergraduate skilled in building intelligent systems using Python, TensorFlow, and FastAPI. Strong background in supervised and unsupervised learning, deep learning (CNNs, LSTMs, Transformers), and RAG pipelines. Passionate about deploying reliable, interpretable AI solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 rounded-lg bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30 hover:opacity-90 transition">View Projects</a>
              <a href="#contact" className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition">Get in touch</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative h-[380px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0c] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TypingHeadline() {
  const words = [
    'I build intelligent AI systems.',
    'I design reliable ML pipelines.',
    'I deploy interpretable models.'
  ];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="mt-2 text-lg md:text-2xl font-medium text-fuchsia-400 min-h-[2.5rem]">
      <span className="inline-block animate-[blink_1s_steps(2,start)_infinite] mr-2 align-middle">▍</span>
      <span className="align-middle">{words[index]}</span>
      <style>{`@keyframes blink { to { visibility: hidden; } }`}</style>
    </div>
  );
}
