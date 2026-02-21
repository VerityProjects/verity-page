import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/verity.ia/";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Verity">
              <Image
                src="/verity-icon.svg"
                alt=""
                width={28}
                height={28}
                className="dark:invert"
              />
              <span className="font-semibold">Verity</span>
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded"
              aria-label="Verity on Instagram"
            >
              <Instagram className="size-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center sm:text-right max-w-md">
            Well-applied AI doesn’t replace businesses — it strengthens them.
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Verity. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
