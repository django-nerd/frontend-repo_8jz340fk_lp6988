import React from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Flames</span>
          .Portfolio
        </a>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="rounded-md p-2 text-slate-200 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/80 p-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-200 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
