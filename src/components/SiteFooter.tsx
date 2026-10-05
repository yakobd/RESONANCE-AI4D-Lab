import { Mail, MapPin } from "lucide-react";
import { contact, getInvolvedLink, lab, navLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer data-surface="dark" className="bg-brand-950 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-bold text-white">{lab.name}</p>
          <p className="mt-2 text-sm leading-relaxed">{lab.fullName}</p>
          <p className="mt-4 text-sm text-brand-200 italic">
            &ldquo;{lab.motto}&rdquo;
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <Mail
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-gold-400"
              />
              <a
                href={`mailto:${contact.email}`}
                className="underline underline-offset-4 hover:text-white"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-gold-400"
              />
              <address className="leading-relaxed not-italic">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {[...navLinks, getInvolvedLink].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-white hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-brand-200 sm:px-6">
          {lab.name} · {lab.college}, {lab.university}
        </p>
      </div>
    </footer>
  );
}
