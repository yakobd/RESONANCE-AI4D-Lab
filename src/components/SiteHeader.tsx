import Image from "next/image";
import Link from "next/link";
import { getInvolvedLink, lab, navLinks } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-18">
        <Link href="/" className="flex min-w-0 items-center gap-3 rounded-md">
          <Image
            src="/aau-logo.png"
            alt=""
            width={44}
            height={44}
            preload
            className="size-10 shrink-0 lg:size-11"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-serif text-lg font-bold text-brand-900">
              {lab.name}
            </span>
            <span className="block truncate text-xs text-muted">
              {lab.university} · {lab.collegeShort}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="ml-2">
              <a
                href={getInvolvedLink.href}
                className="rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
              >
                {getInvolvedLink.label}
              </a>
            </li>
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
