import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Heading } from "./Heading";
import { PROJECTS } from "../data";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Heading kicker="Key projects" title="Things I've built." />
        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <motion.article key={p.title} initial={{ y: 40 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.2 }} className="card grid gap-6 p-7 md:grid-cols-[auto_1fr] md:p-9">
              <span className="font-display text-5xl font-extrabold text-(--color-accent)/40 md:text-7xl">0{i + 1}</span>
              <div>
                <span className="rounded-full bg-(--color-cyan)/15 px-3 py-1 text-xs font-bold text-(--color-cyan)">{p.status}</span>
                <h3 className="mt-3 font-display text-2xl font-extrabold md:text-3xl">{p.title}</h3>
                <p className="mt-2 text-(--color-ink)/75">{p.summary}</p>
                <ul className="mt-4 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-(--color-ink)/80">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-(--color-accent)" /> {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-(--color-cyan)">{p.impact.replace("Impact: ", "")}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-(--color-ink)/70">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
