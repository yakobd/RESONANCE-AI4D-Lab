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
                className="rounded-xl border border-line bg-white p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-900">
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
