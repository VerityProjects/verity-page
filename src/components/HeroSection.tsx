import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardImg from "@/assets/verity-dashboard.jpeg";
import { useLocale } from "@/contexts/LocaleContext";

const HeroSection = () => {
  const { dict } = useLocale();

  return (
    <section id="product" className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden hero-gradient">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          {dict.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-[0.95] mb-6"
        >
          {dict.hero.title1}
          <br />
          <span className="text-gradient">{dict.hero.title2}</span>
          <br />
          {dict.hero.title3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {dict.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
            <a href="mailto:contact.verityia@gmail.com?subject=Verity - Start Free Trial">
              {dict.hero.startTrial}
              <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6" asChild>
            <a href="mailto:contact.verityia@gmail.com?subject=Verity - Watch Demo">
              {dict.hero.watchDemo}
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="rounded-xl border border-border overflow-hidden glow-green-subtle">
            <img
              src={dashboardImg}
              alt={dict.hero.dashboardAlt}
              className="w-full"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
