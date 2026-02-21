import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type en from "@/messages/en.json";

const INSTAGRAM_URL = "https://www.instagram.com/verity.ia/";

type Dict = typeof en;

type Props = { dict: Dict; locale: Locale };

export function Footer({ dict, locale }: Props) {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link href={`/${locale}`} className="flex items-center gap-2" aria-label="Verity">
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
              aria-label={dict.footer.instagram}
            >
              <Instagram className="size-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center sm:text-right max-w-md">
            {dict.footer.tagline}
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Verity. {dict.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
