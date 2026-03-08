import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LOCALE_STORAGE_KEY = "user-locale";

/**
 * On first visit (no saved preference), redirects to /pt if the device
 * language is Portuguese, otherwise keeps / and stores the preference.
 * Does not run when the user has already chosen a locale (EN/PT).
 */
const LocaleRedirect = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved) return;

    if (pathname === "/") {
      const browserLang = (navigator.language || navigator.languages?.[0] || "").toLowerCase();
      if (browserLang.startsWith("pt")) {
        localStorage.setItem(LOCALE_STORAGE_KEY, "pt");
        navigate("/pt", { replace: true });
      } else {
        localStorage.setItem(LOCALE_STORAGE_KEY, "en");
      }
    }
  }, [pathname, navigate]);

  return null;
};

export default LocaleRedirect;
export { LOCALE_STORAGE_KEY };
