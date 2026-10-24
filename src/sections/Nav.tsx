import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const LINKS = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-(--color-canvas)/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" data-cursor="grow" className="font-display text-lg font-extrabold tracking-tight">
          Maitri<span className="text-(--color-accent)">.M</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map(([l, id]) => (
            <a key={id} href={`#${id}`} data-cursor="grow" className="text-sm font-medium text-(--color-ink)/75 transition-colors hover:text-(--color-accent)">
              {l}
            </a>
          ))}
        </nav>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/5 px-6 py-5 md:hidden">
          {LINKS.map(([l, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-base font-medium">
              {l}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
}
