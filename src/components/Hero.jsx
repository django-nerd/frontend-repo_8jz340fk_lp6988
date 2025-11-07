import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that do not block interactions with the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
      <div className="pointer-events-none absolute -inset-x-10 inset-y-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-wider text-sky-200 backdrop-blur-md"
        >
          Tech • Interactive • Modern
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance bg-gradient-to-br from-white via-sky-100 to-sky-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-7xl"
        >
          Crafting Playful, Modern Interfaces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-slate-300 md:text-lg"
        >
          I design and build interactive web experiences that blend delightful motion with
          solid engineering. Scroll to see selected work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
