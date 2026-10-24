import { Briefcase, Award, Trophy } from "lucide-react";
import { Heading } from "./Heading";

const COLS = [
  {
    icon: Briefcase,
    title: "Experience & Leadership",
    items: [
      ["Abacus Franchise Owner", "Run daily operations: scheduling, training students, coordinating staff and payroll."],
      ["Pre-primary School Website", "Built and maintain a progress-tracking website for the school."],
    ],
  },
  {
    icon: Award,
    title: "Certifications & Hackathons",
    items: [
      ["ROS Workshop", "Hands-on Robot Operating System and robotic system integration."],
      ["Omron Workshop", "Hands-on industrial automation and robotics."],
      ["Hackathons", "24-Hour National AI Hackathon (Yugma TechFest 2.0) and CodeHer Hackathon."],
    ],
  },
  {
    icon: Trophy,
    title: "Sports & Achievements",
    items: [
      ["Inter-University Cricket", "Represented KLE Tech at the South Zone tournament, Chennai (2025–2026)."],
      ["2nd Place", "Inter-Department Table Tennis and Volleyball."],
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Heading kicker="Experience, certifications & achievements" title="Beyond the lab." />
        <div className="grid gap-5 lg:grid-cols-3">
          {COLS.map(({ icon: Icon, title, items }) => (
            <div key={title} className="card p-6">
              <Icon className="text-(--color-accent)" size={26} />
              <h3 className="mt-3 font-display text-xl font-extrabold">{title}</h3>
              <ul className="mt-5 space-y-5 border-l border-white/10 pl-5">
                {items.map(([a, b]) => (
                  <li key={a} className="relative">
                    <span className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-(--color-accent)" />
                    <p className="font-semibold">{a}</p>
                    <p className="text-sm text-(--color-ink)/65">{b}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
