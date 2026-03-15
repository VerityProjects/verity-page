import { Link } from "react-router-dom";
import { useLocale } from "@/contexts/LocaleContext";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const { locale, dict } = useLocale();
  const { theme } = useTheme();
  const logoSrc = theme === "light" ? "/logo-default-no-bg.svg" : "/logo-white-no-bg.svg";

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to={locale === "pt" ? "/pt" : "/"} className="flex items-center gap-2 shrink-0">
            <img src={logoSrc} alt="Verity" className="h-8 w-auto" />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
            <a href="#" className="py-2 min-h-[44px] flex items-center hover:text-foreground transition-colors">{dict.footer.privacy}</a>
            <a href="#" className="py-2 min-h-[44px] flex items-center hover:text-foreground transition-colors">{dict.footer.terms}</a>
            <a href="#" className="py-2 min-h-[44px] flex items-center hover:text-foreground transition-colors">{dict.footer.contact}</a>
          </div>
          <p className="text-sm text-muted-foreground">
            {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
