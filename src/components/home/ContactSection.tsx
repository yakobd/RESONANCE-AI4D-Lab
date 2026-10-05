import { Mail } from "lucide-react";
import { contact, contactIntro, pages } from "@/content/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-surface="dark"
      aria-labelledby="contact-title"
      className="bg-brand-800 text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="contact-title" className="font-serif text-3xl font-bold">
            Contact Us
          </h2>
          <p className="mt-3 leading-relaxed text-brand-100">{contactIntro}</p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold-400 px-5 py-3 font-semibold text-brand-950 transition-colors hover:bg-gold-300"
          >
            <Mail aria-hidden="true" className="size-4" />
            {contact.email}
          </a>
          <a
            href={pages.contact}
            className="inline-flex items-center justify-center rounded-md border border-white/40 px-5 py-3 font-semibold transition-colors hover:bg-white/10"
          >
            Contact details
          </a>
        </div>
      </div>
    </section>
  );
}
