import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-200">
            <Sparkles className="h-3.5 w-3.5" />
            About
          </div>
          <h3 className="text-2xl font-semibold text-white">Designer-Engineer Hybrid</h3>
          <p className="mt-3 leading-relaxed text-slate-300">
            I focus on crafting human-centered interfaces with a strong technical backbone. My work
            lives at the intersection of design systems, motion, and performance.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" /> Rapid prototyping with React and Tailwind</li>
            <li className="flex items-center gap-2"><span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" /> 3D and motion for product storytelling</li>
            <li className="flex items-center gap-2"><span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" /> Accessible, scalable component architectures</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
              <Rocket className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">What I bring</h4>
              <p className="text-sm text-slate-300">A mix of product thinking and pragmatic engineering.</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">UX Strategy</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">Design Systems</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">Frontend Dev</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">3D & Motion</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
