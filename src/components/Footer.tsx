import { Link } from "react-router-dom";
import verityLogo from "@/assets/verity-logo.png";
import { useLocale } from "@/contexts/LocaleContext";

const Footer = () => {
  const { locale, dict } = useLocale();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to={locale === "pt" ? "/pt" : "/"} className="flex items-center gap-2">
            <img src={verityLogo} alt="Verity" className="h-6" />
          </Link>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">{dict.footer.privacy}</a>
            <a href="#" className="hover:text-foreground transition-colors">{dict.footer.terms}</a>
            <a href="#" className="hover:text-foreground transition-colors">{dict.footer.contact}</a>
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
