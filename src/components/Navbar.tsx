import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

const navLinks = [
  { key: "product" as const, href: "#product" },
  { key: "features" as const, href: "#features" },
  { key: "methodology" as const, href: "#methodology" },
  { key: "pricing" as const, href: "#pricing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, dict } = useLocale();
  const navigate = useNavigate();

  const showComingSoon = () => {
    toast.info(dict.toast.comingSoon);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to={locale === "pt" ? "/pt" : "/"} className="flex items-center gap-2">
          <img src="/logo-default-no-bg.svg" alt="Verity" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {dict.nav[link.key]}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <button
              type="button"
              onClick={() => navigate("/")}
              className={locale === "en" ? "text-foreground font-medium" : "hover:text-foreground transition-colors"}
            >
              EN
            </button>
            <span aria-hidden>|</span>
            <button
              type="button"
              onClick={() => navigate("/pt")}
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
          className="md:hidden text-foreground"
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
            <div className="flex flex-col gap-4 p-6">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <button
                  type="button"
                  onClick={() => { navigate("/"); setMobileOpen(false); }}
                  className={locale === "en" ? "text-foreground font-medium" : ""}
                >
                  EN
                </button>
                <span>|</span>
                <button
                  type="button"
                  onClick={() => { navigate("/pt"); setMobileOpen(false); }}
                  className={locale === "pt" ? "text-foreground font-medium" : ""}
                >
                  PT
                </button>
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {dict.nav[link.key]}
                </a>
              ))}
              <Button variant="hero" className="mt-2" onClick={() => { showComingSoon(); setMobileOpen(false); }}>
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
