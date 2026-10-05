import { ArrowRight } from "lucide-react";
import { lab, pages } from "@/content/site";

export function Hero() {
  return (
    <section
      data-surface="dark"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-brand-900 text-white"
    >
      <ResonanceRings />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        <p className="text-sm font-semibold tracking-wider text-gold-300 uppercase">
          {lab.university} · {lab.college}
        </p>

        <h1
          id="hero-title"
          className="mt-4 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl"
        >
          {lab.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg font-medium text-balance text-brand-100 sm:text-xl">
          {lab.fullName}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
          {lab.missionLead}
        </p>

        <p className="mt-6 border-l-2 border-gold-400 pl-4 font-serif text-lg text-white italic">
          &ldquo;{lab.motto}&rdquo;
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#research"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold-400 px-5 py-3 font-semibold text-brand-950 transition-colors hover:bg-gold-300"
          >
            Explore our research
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
          <a
            href={pages.about}
            className="inline-flex items-center justify-center rounded-md border border-white/40 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            About the lab
          </a>
        </div>
      </div>
    </section>
  );
}

/** Decorative concentric rings, a visual nod to "resonance". Hidden from assistive tech. */
function ResonanceRings() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className="absolute top-1/2 -right-48 -z-10 size-168 -translate-y-1/2 opacity-25 sm:-right-32 sm:opacity-40 lg:-right-16"
    >
      {[60, 120, 180, 240, 290].map((r, i) => (
        <circle
          key={r}
          cx="300"
          cy="300"
          r={r}
          fill="none"
          stroke={i % 2 === 0 ? "#f2c230" : "#a9d3c0"}
          strokeOpacity={0.55 - i * 0.08}
          strokeWidth={i === 0 ? 2 : 1.25}
        />
      ))}
      {/* Expanding waves, staggered so one is always travelling outward. */}
      {[0, 2.33, 4.66].map((delay) => (
        <circle
          key={delay}
          className="ripple"
          style={{ animationDelay: `${delay}s` }}
          cx="300"
          cy="300"
          r="60"
          fill="none"
          stroke="#f2c230"
          strokeOpacity={0.6}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
          opacity={0}
        />
      ))}
      <circle cx="300" cy="300" r="8" fill="#f2c230" />
    </svg>
  );
}
