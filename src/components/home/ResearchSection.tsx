import { HeartPulse, Scale, Wheat, Zap, type LucideIcon } from "lucide-react";
import {
  focusAreas,
  pages,
  researchIntro,
  type FocusArea,
} from "@/content/site";
import { MoreLink } from "./MoreLink";
import { SectionHeading } from "./SectionHeading";

const icons: Record<FocusArea["id"], LucideIcon> = {
  health: HeartPulse,
  agriculture: Wheat,
  governance: Scale,
  energy: Zap,
};

export function ResearchSection() {
  return (
    <section id="research" aria-labelledby="research-title">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          id="research-title"
          eyebrow="Research"
          title="Key Focus Areas"
          intro={researchIntro}
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {focusAreas.map((area) => {
            const Icon = icons[area.id];
            return (
              <li
                key={area.id}
                className="group reveal flex flex-col rounded-xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-white transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-brand-950">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-brand-900">
                    {area.title}
                  </h3>
                </div>

                <p className="mt-4 leading-relaxed text-muted">
                  {area.description}
                </p>

                <p className="mt-5 text-xs font-semibold tracking-wider text-brand-600 uppercase">
                  Research directions
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-ink">
                  {area.examples.map((example) => (
                    <li key={example} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-400"
                      />
                      {example}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <MoreLink
                    href={pages.research}
                    srContext={`about ${area.title}`}
                  >
                    Learn more
                  </MoreLink>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
