import en from "@/messages/en.json";
import ptBR from "@/messages/pt-BR.json";

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];

const messages: Record<Locale, typeof en> = {
  en,
  pt: ptBR,
};

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/pt")) return "pt";
  return "en";
}

export function getDictionary(locale: Locale) {
  return messages[locale];
}

export function getHtmlLang(locale: Locale): string {
  return locale === "pt" ? "pt-BR" : "en";
}
