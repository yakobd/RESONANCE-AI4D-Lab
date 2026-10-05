import { ArrowRight } from "lucide-react";

type MoreLinkProps = {
  href: string;
  children: React.ReactNode;
  /** Extra context for screen readers when the visible text is short. */
  srContext?: string;
};

export function MoreLink({ href, children, srContext }: MoreLinkProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-1.5 font-semibold text-accent-strong underline-offset-4 hover:underline"
    >
      {children}
      {srContext && <span className="sr-only"> {srContext}</span>}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}
