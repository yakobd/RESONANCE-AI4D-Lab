type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <div className="reveal max-w-2xl">
      <p className="text-sm font-semibold tracking-wider text-brand-600 uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-2 font-serif text-3xl font-bold text-brand-900 sm:text-4xl"
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}
