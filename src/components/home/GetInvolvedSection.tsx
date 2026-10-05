import { CalendarDays, GraduationCap, Handshake } from "lucide-react";
import {
  applicationCall,
  futureCallsNote,
  getInvolved,
  isCallOpen,
  pages,
} from "@/content/site";
import { MoreLink } from "./MoreLink";
import { SectionHeading } from "./SectionHeading";

export function GetInvolvedSection() {
  const open = isCallOpen();

  return (
    <section
      id="get-involved"
      aria-labelledby="get-involved-title"
      className="bg-paper"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          id="get-involved-title"
          eyebrow="Opportunities"
          title="Get Involved with RESONANCE AI4D Lab"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-xl border border-line bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <GraduationCap aria-hidden="true" className="size-6" />
              </span>
              <h3 className="text-lg font-semibold text-brand-900">
                {getInvolved.students.title}
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-muted">
              {getInvolved.students.description}
            </p>

            <div className="mt-6 rounded-lg border border-line bg-paper p-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <CalendarDays
                  aria-hidden="true"
                  className="size-5 text-brand-700"
                />
                <p className="font-semibold text-ink">
                  {applicationCall.title}
                </p>
                <span
                  className={
                    open
                      ? "rounded-full bg-brand-700 px-2.5 py-0.5 text-xs font-semibold text-white"
                      : "rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-800"
                  }
                >
                  {open ? "Open" : "Closed"}
                </span>
              </div>

              {open ? (
                <ol className="mt-3 space-y-1 text-sm text-muted">
                  {applicationCall.timeline.map((step) => (
                    <li key={step.label}>
                      <span className="font-medium text-ink">{step.date}</span>{" "}
                      · {step.label}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-2 text-sm text-muted">{futureCallsNote}</p>
              )}
            </div>

            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-6">
              <MoreLink href={pages.getInvolved} srContext="for students">
                See student opportunities
              </MoreLink>
              <MoreLink href={open ? pages.application : pages.news}>
                {open ? "Apply now" : "News & Events"}
              </MoreLink>
            </div>
          </article>

          <article className="flex flex-col rounded-xl border border-line bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Handshake aria-hidden="true" className="size-6" />
              </span>
              <h3 className="text-lg font-semibold text-brand-900">
                {getInvolved.partners.title}
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-muted">
              {getInvolved.partners.description}
            </p>

            <div className="mt-auto pt-6">
              <MoreLink href={pages.getInvolved} srContext="as a partner">
                Explore collaboration
              </MoreLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
