import { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getDictionary, getLocaleFromPath, type Locale } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  dict: ReturnType<typeof getDictionary>;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const value = useMemo(
    () => ({ locale, dict: getDictionary(locale) }),
    [locale]
  );
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
