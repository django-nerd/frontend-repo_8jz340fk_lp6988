import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A playful 3D product hero built with Spline and React for an immersive first impression.',
    tags: ['React', 'Spline', 'Framer Motion'],
    links: { github: '#', live: '#' },
  },
  {
    title: 'Design System Starter',
    description:
      'A utility-first UI kit using Tailwind and Radix primitives for rapid prototyping.',
    tags: ['Tailwind', 'Radix', 'Vite'],
    links: { github: '#', live: '#' },
  },
  {
    title: 'Realtime Collab Notes',
    description:
      'Lightweight collaborative notes app with presence and delightful micro-interactions.',
    tags: ['React', 'WebSocket', 'Motion'],
    links: { github: '#', live: '#' },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Selected Work</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          A snapshot of projects that blend thoughtful UX with interactive, modern aesthetics.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <div className="flex items-center gap-2">
                <a
                  href={p.links.github}
                  aria-label={`GitHub - ${p.title}`}
                  className="rounded-md p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={p.links.live}
                  aria-label={`Live - ${p.title}`}
                  className="rounded-md p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <p className="mb-4 text-sm text-slate-300">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 to-cyan-300/10" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
