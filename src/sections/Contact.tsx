import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Heading } from "./Heading";
import { ME } from "../data";

export function Contact() {
  const links = [
    [Mail, "Email", ME.email, `mailto:${ME.email}`],
    [Phone, "Phone", ME.phone, `tel:${ME.phone.replace(/\s/g, "")}`],
    [Linkedin, "LinkedIn", "maitri-maribasayyanavar", ME.linkedin],
  ] as const;

  return (
    <section id="contact" className="px-6 pt-20 pb-10">
      <div className="mx-auto max-w-6xl">
        <Heading kicker="Contact" title="Let's build something." />
        <div className="grid gap-8 max-w-xl">
          <div className="space-y-4">
            <p className="text-lg text-(--color-ink)/75">Internship, project or just a robotics chat? Reach out — I reply fast.</p>
            {links.map(([Icon, l, v, href]) => (
              <a key={l} href={href} target={l === "LinkedIn" ? "_blank" : undefined} rel="noreferrer" data-cursor="grow" className="card flex items-center gap-4 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--color-accent)/15 text-(--color-accent)"><Icon size={20} /></span>
                <span className="min-w-0">
                  <span className="block text-xs text-(--color-ink)/55">{l}</span>
                  <span className="block truncate text-sm font-semibold">{v}</span>
                </span>
              </a>
            ))}
            <p className="flex items-center gap-2 text-sm text-(--color-ink)/60"><MapPin size={14} /> {ME.location}</p>
          </div>

        </div>
        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-(--color-ink)/50">© 2026 Maitri Maribasayyanavar · Hubli, India</footer>
      </div>
    </section>
  );
}
