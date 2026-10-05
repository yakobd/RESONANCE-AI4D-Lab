import Image from "next/image";
import { partners } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function PartnersSection() {
  return (
    <section aria-labelledby="partners-title">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 lg:pt-20 lg:pb-24">
        <SectionHeading
          id="partners-title"
          eyebrow="Working together"
          title="Our Partners"
        />

        <ul className="mt-10 grid items-center gap-6 sm:grid-cols-3">
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
