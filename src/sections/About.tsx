import { motion } from "motion/react";
import { Heading } from "./Heading";

const FACTS = [
  ["B.E. Automation & Robotics", "KLE Technological University · 2027"],
  ["8.15 / 10", "Current CGPA"],
  ["ICCIS 2026", "Technical paper submitted"],
];

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Heading kicker="About me" title="Hardware meets software." />
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
          <motion.div initial={{ y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true }} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-(--color-accent)/25 blur-2xl" />
            <img src={`${import.meta.env.BASE_URL}img/maitri.jpg`} alt="Portrait of Maitri Maribasayyanavar" className="relative aspect-[4/5] w-full rounded-3xl border border-white/15 object-cover object-top" />
          </motion.div>
          <div className="space-y-8">
          <motion.p initial={{ y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true }} className="text-lg leading-relaxed text-(--color-ink)/80">
            I&rsquo;m an Automation &amp; Robotics Engineering student at KLE Technological University (CGPA 8.15/10, expected 2027) with hands-on experience in embedded systems, sensor and actuator interfacing, robotics hardware integration, and troubleshooting. I love building real-time embedded solutions, electronics for robotics, and end-effector designs that actually work on the shop floor.
          </motion.p>
          <div className="space-y-4">
            {FACTS.map(([a, b]) => (
              <div key={a} className="card p-5">
                <p className="font-display text-xl font-extrabold text-(--color-accent)">{a}</p>
                <p className="text-sm text-(--color-ink)/65">{b}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
