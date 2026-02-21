"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About us" },
  { href: "#why-verity", label: "Why Verity" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
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
        <Link href="/" className="flex items-center gap-2" aria-label="Verity - Home">
          <Image
            src="/verity-icon.svg"
            alt=""
            width={36}
            height={36}
            className="dark:invert"
          />
          <span className="font-semibold text-lg">Verity</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-verity-green text-[#050505] hover:bg-verity-green/90 font-medium"
            )}
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="sm:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        className={cn(
          "sm:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg",
          "overflow-hidden transition-[height] duration-200 ease-out",
          mobileOpen ? "h-[calc(100vh-4rem)]" : "h-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-1 text-muted-foreground">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMobile}
              className="py-3 px-3 rounded-md hover:bg-muted hover:text-foreground transition-colors text-base font-medium"
            >
              {label}
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
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
