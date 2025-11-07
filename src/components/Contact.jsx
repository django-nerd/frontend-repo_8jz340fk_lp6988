import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Let’s build something</h2>
        <p className="mt-2 text-slate-300">Have a project in mind? I’d love to hear about it.</p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto grid w-full max-w-2xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-200">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none ring-sky-500/30 focus:ring"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-200">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none ring-sky-500/30 focus:ring"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-200">Message</label>
          <textarea
            rows={5}
            required
            className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none ring-sky-500/30 focus:ring"
            placeholder="Tell me about your idea..."
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
        >
          <Mail className="h-4 w-4" /> Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
