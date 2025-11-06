import React, { useEffect, useState } from 'react';
import { Moon, Sun, Download, Github, Linkedin } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certs', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-lg">
          <span className="text-fuchsia-500">Akhil</span>
          <span className="text-neutral-700 dark:text-neutral-300">.AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-fuchsia-400 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/akhil-ml-nlp/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/akhilkumar-dot"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="/resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white text-sm shadow-lg shadow-fuchsia-500/25 hover:opacity-90"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
