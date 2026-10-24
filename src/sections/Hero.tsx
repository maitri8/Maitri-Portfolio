import { motion } from "motion/react";
import { Download, Linkedin, MapPin, ArrowDown } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";
import { ME } from "../data";

const LINES = [
  ["$", "ros2 launch mybuddy_dual_arm vision.launch.py"],
  ["›", "urdf loaded · 12 joints · tf tree ok"],
  ["›", "opencv: tracking object @ 30 fps"],
  ["›", "arms synced · assembly task started"],
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40">
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-(--color-accent)/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-60 h-72 w-72 rounded-full bg-(--color-cyan)/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <motion.div className="min-w-0" initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.7 }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-(--color-canvas-raised) px-4 py-1.5 text-sm text-(--color-ink)/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-(--color-cyan)" />
            <MapPin size={14} /> {ME.location}
          </p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] break-words tracking-tight sm:text-5xl md:text-6xl lg:text-6xl">
            Maitri <br className="hidden md:block" /><span className="text-(--color-accent)">Maribasayyanavar</span>
          </h1>
          <p className="mt-5 font-display text-lg font-semibold text-(--color-cyan) md:text-xl">
            Automation &amp; Robotics Engineering Student | Embedded Systems | ROS 2 &amp; Computer Vision Enthusiast
          </p>
          <p className="mt-4 max-w-xl text-lg text-(--color-ink)/75">
            Bridging hardware and software to design intelligent robotic systems, cobot end-effectors, and vision-guided automation.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <MagneticButton
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 rounded-full bg-(--color-accent) px-6 py-3.5 font-display text-sm font-extrabold text-white shadow-[0_8px_30px_-6px] shadow-(--color-accent)/60"
            >
              <ArrowDown size={16} /> View Projects
            </MagneticButton>
            <a href={ME.resume} download data-cursor="grow" className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-display text-sm font-extrabold transition-colors hover:border-(--color-accent) hover:text-(--color-accent)">
              <Download size={16} /> Download Resume
            </a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer" data-cursor="grow" className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-display text-sm font-extrabold transition-colors hover:border-(--color-accent) hover:text-(--color-accent)">
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ y: 30 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative min-w-0">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-(--color-canvas-raised) shadow-2xl shadow-(--color-accent)/20">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 font-mono text-xs text-(--color-ink)/50">robot_terminal</span>
            </div>
            <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
              {LINES.map(([p, t], i) => (
                <motion.p key={t} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.5 }} className={`break-all ${i === 0 ? "text-(--color-ink)" : "text-(--color-ink)/65"}`}>
                  <span className="mr-2 text-(--color-cyan)">{p}</span>
                  {t}
                </motion.p>
              ))}
              <span className="inline-block h-4 w-2 animate-pulse bg-(--color-accent)" />
            </div>
            <div className="grid grid-cols-3 border-t border-white/10 text-center">
              {[["8.15", "CGPA"], ["3", "Projects"], ["2027", "Graduating"]].map(([n, l]) => (
                <div key={l} className="px-2 py-4">
                  <p className="font-display text-2xl font-extrabold text-(--color-accent)">{n}</p>
                  <p className="text-xs text-(--color-ink)/60">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
