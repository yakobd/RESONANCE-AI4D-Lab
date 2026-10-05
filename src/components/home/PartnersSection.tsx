import Image from "next/image";
import { partners } from "@/content/site";

export function PartnersSection() {
  return (
    <section aria-labelledby="partners-title">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2
          id="partners-title"
          className="text-center text-sm font-semibold tracking-wider text-accent uppercase"
        >
          Our Partners
        </h2>

        <ul className="mt-8 grid items-center gap-6 sm:grid-cols-3">
          {partners.map((partner) => (
            <li key={partner.name} className="reveal">
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-32 items-center justify-center rounded-lg p-4 grayscale-[35%] transition duration-300 hover:bg-paper hover:grayscale-0 dark:bg-white dark:hover:bg-white"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  sizes="(min-width: 640px) 300px, 80vw"
                  className="max-h-24 w-auto object-contain"
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
