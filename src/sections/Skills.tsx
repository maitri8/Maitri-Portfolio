import { motion } from "motion/react";
import { Bot, ScanEye, Cpu, Factory, Code2, Box } from "lucide-react";
import { Heading } from "./Heading";
import { SKILLS } from "../data";

const ICONS: Record<string, typeof Bot> = { Bot, ScanEye, Cpu, Factory, Code2, Box };

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Heading kicker="Core skills" title="The toolkit." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div key={s.title} initial={{ y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -6 }} className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--color-accent)/15 text-(--color-accent)">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-extrabold">{s.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-(--color-ink)/80">{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
