import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard, Sparkles, BookOpen, CreditCard, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useTransition } from "@/contexts/TransitionContext";

const iconSize = 16;

const navLinks = [
  { key: "product" as const, href: "#product", icon: LayoutDashboard },
  { key: "features" as const, href: "#features", icon: Sparkles },
  { key: "methodology" as const, href: "#methodology", icon: BookOpen },
  { key: "pricing" as const, href: "#pricing", icon: CreditCard },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, dict } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const { runTransition } = useTransition();
  const navigate = useNavigate();
  const isLightTheme = theme === "light";
  const themeLabel = isLightTheme ? dict.theme.switchToDark : dict.theme.switchToLight;
  const logoSrc = isLightTheme ? "/logo-white-no-bg.svg" : "/logo-default-no-bg.svg";

  const showComingSoon = () => {
    toast.info(dict.toast.comingSoon);
  };

  const scrollToSection = (href: string, closeMobileMenu = false) => {
    runTransition(() => {
      const section = document.querySelector(href);
      if (section instanceof HTMLElement) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (closeMobileMenu) {
        setMobileOpen(false);
      }
    });
  };

  const handleThemeToggle = () => {
    runTransition(() => {
      toggleTheme();
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to={locale === "pt" ? "/pt" : "/"} className="flex items-center gap-2">
          <img src={logoSrc} alt="Verity" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.key}
                href={link.href}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                <Icon size={iconSize} strokeWidth={1.5} className="shrink-0" />
                {dict.nav[link.key]}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleThemeToggle}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {isLightTheme ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <button
              type="button"
              onClick={() => {
                localStorage.setItem("user-locale", "en");
                navigate("/");
              }}
              className={locale === "en" ? "text-foreground font-medium" : "hover:text-foreground transition-colors"}
            >
              EN
            </button>
            <span aria-hidden>|</span>
            <button
              type="button"
              onClick={() => {
                localStorage.setItem("user-locale", "pt");
                navigate("/pt");
              }}
              className={locale === "pt" ? "text-foreground font-medium" : "hover:text-foreground transition-colors"}
            >
              PT
            </button>
          </span>
          <Button variant="ghost" size="sm" onClick={showComingSoon}>
            {dict.nav.login}
          </Button>
          <Button variant="hero" size="sm" onClick={showComingSoon}>
            {dict.nav.getStarted}
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? dict.nav.menuClose : dict.nav.menuOpen}
          className="md:hidden text-foreground p-3 -m-3 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="flex flex-col gap-1 p-6">
              <Button
                variant="ghost"
                className="justify-start min-h-[44px] touch-manipulation"
                onClick={handleThemeToggle}
              >
                {isLightTheme ? <Moon size={18} /> : <Sun size={18} />}
                {themeLabel}
              </Button>
              <span className="flex items-center gap-2 text-sm text-muted-foreground min-h-[44px]">
                <button
                  type="button"
                  onClick={() => { localStorage.setItem("user-locale", "en"); navigate("/"); setMobileOpen(false); }}
                  className={`min-h-[44px] min-w-[44px] flex items-center touch-manipulation ${locale === "en" ? "text-foreground font-medium" : ""}`}
                >
                  EN
                </button>
                <span aria-hidden>|</span>
                <button
                  type="button"
                  onClick={() => { localStorage.setItem("user-locale", "pt"); navigate("/pt"); setMobileOpen(false); }}
                  className={`min-h-[44px] min-w-[44px] flex items-center touch-manipulation ${locale === "pt" ? "text-foreground font-medium" : ""}`}
                >
                  PT
                </button>
              </span>
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    className="flex items-center gap-3 min-h-[44px] py-3 text-muted-foreground hover:text-foreground transition-colors touch-manipulation"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href, true);
                    }}
                  >
                    <Icon size={iconSize} strokeWidth={1.5} className="shrink-0" />
                    {dict.nav[link.key]}
                  </a>
                );
              })}
              <Button variant="hero" className="mt-4 min-h-[44px] touch-manipulation" onClick={() => { showComingSoon(); setMobileOpen(false); }}>
                {dict.nav.getStarted}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
