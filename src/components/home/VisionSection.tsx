import { Handshake, Lightbulb, Sprout, type LucideIcon } from "lucide-react";
import { pages, vision } from "@/content/site";
import { MoreLink } from "./MoreLink";
import { SectionHeading } from "./SectionHeading";

// Same order as `vision` in the content file.
const icons: LucideIcon[] = [Lightbulb, Sprout, Handshake];

export function VisionSection() {
  return (
    <section aria-labelledby="vision-title" className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          id="vision-title"
          eyebrow="Who we are"
          title="Our Vision"
        />

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {vision.map((item, i) => {
            const Icon = icons[i];
            return (
              <li
                key={item.title}
                className="group reveal rounded-xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-tint text-accent-strong transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-8">
          <MoreLink href={pages.about}>
            Read our mission and objectives
          </MoreLink>
        </div>
      </div>
    </section>
  );
}
