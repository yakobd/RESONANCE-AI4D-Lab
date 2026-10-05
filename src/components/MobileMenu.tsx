"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { getInvolvedLink, navLinks } from "@/content/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  // Close on Escape and return focus to the menu button.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Framer Motion is used only here: CSS can't animate an element out
  // as it is removed, which AnimatePresence handles. Visitors who prefer
  // reduced motion get an instant open/close.
  const hidden = reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 };

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="flex size-11 items-center justify-center rounded-md text-brand-900 hover:bg-brand-50"
      >
        {open ? (
          <X aria-hidden="true" className="size-6" />
        ) : (
          <Menu aria-hidden="true" className="size-6" />
        )}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            initial={hidden}
            animate={{ opacity: 1, y: 0 }}
            exit={hidden}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-b border-line bg-white shadow-lg"
          >
            <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={hidden}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.2,
                    delay: reduceMotion ? 0 : 0.03 * i,
                  }}
                >
                  <a
                    href={link.href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href={getInvolvedLink.href}
                  className="block rounded-md bg-brand-700 px-3 py-3 text-center text-base font-semibold text-white hover:bg-brand-800"
                >
                  {getInvolvedLink.label}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
