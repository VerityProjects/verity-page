"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import type en from "@/messages/en.json";

type Dict = typeof en;

const navKeys = [
  { href: "#about", key: "about" as const },
  { href: "#why-verity", key: "whyVerity" as const },
  { href: "#contact", key: "contact" as const },
] as const;

type Props = { locale: Locale; dict: Dict };

export function Header({ locale, dict }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors",
        "bg-background/80 backdrop-blur-md border-b border-border/50"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2"
          aria-label="Verity - Home"
        >
          <Image
            src="/verity-icon.svg"
            alt=""
            width={36}
            height={36}
            className="dark:invert"
          />
          <span className="font-semibold text-lg">Verity</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          {navKeys.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              className="hover:text-foreground transition-colors"
            >
              {dict.nav[key]}
            </a>
          ))}
          <span className="flex items-center gap-2">
            <span
              className="flex rounded-lg border border-border bg-muted/50 p-0.5 text-sm"
              role="group"
              aria-label="Language"
            >
              <Link
                href="/en"
                scroll={false}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors",
                  locale === "en"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="English"
                aria-current={locale === "en" ? "true" : undefined}
              >
                <span className="text-base leading-none" aria-hidden>🇺🇸</span>
                <span>EN</span>
              </Link>
              <Link
                href="/pt"
                scroll={false}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors",
                  locale === "pt"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Português"
                aria-current={locale === "pt" ? "true" : undefined}
              >
                <span className="text-base leading-none" aria-hidden>🇧🇷</span>
                <span>PT</span>
              </Link>
            </span>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-verity-green text-[#050505] hover:bg-verity-green/90 font-medium"
              )}
            >
              {dict.nav.getInTouch}
            </a>
          </span>
        </nav>

        <div className="sm:hidden flex items-center gap-2">
          <span
            className="flex rounded-lg border border-border bg-muted/50 p-0.5 text-sm"
            role="group"
            aria-label="Language"
          >
            <Link
              href="/en"
              scroll={false}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors",
                locale === "en"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="English"
            >
              <span className="text-base leading-none" aria-hidden>🇺🇸</span>
              <span>EN</span>
            </Link>
            <Link
              href="/pt"
              scroll={false}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors",
                locale === "pt"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="Português"
            >
              <span className="text-base leading-none" aria-hidden>🇧🇷</span>
              <span>PT</span>
            </Link>
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 text-foreground hover:bg-muted rounded-md transition-colors"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? dict.nav.closeMenu : dict.nav.openMenu}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "sm:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg",
          "overflow-hidden transition-[height] duration-200 ease-out",
          mobileOpen ? "h-[calc(100vh-4rem)]" : "h-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-1 text-muted-foreground">
          {navKeys.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              onClick={closeMobile}
              className="py-3 px-3 rounded-md hover:bg-muted hover:text-foreground transition-colors text-base font-medium"
            >
              {dict.nav[key]}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobile}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-4 bg-verity-green text-[#050505] hover:bg-verity-green/90 font-medium justify-center"
            )}
          >
            {dict.nav.getInTouch}
          </a>
        </nav>
      </div>
    </header>
  );
}
