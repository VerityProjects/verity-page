import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const CTASection = () => {
  const { dict } = useLocale();

  return (
    <section id="pricing" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-primary/20 bg-card p-12 md:p-20 text-center overflow-hidden glow-green-subtle"
        >
          <div className="absolute inset-0 hero-gradient pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              {dict.cta.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              {dict.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                className="text-base px-8 py-6"
                asChild
              >
                <a href="mailto:contact.verityia@gmail.com?subject=Verity - Start Free Trial">
                  {dict.cta.startTrial}
                  <ArrowRight className="ml-1" size={18} />
                </a>
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                className="text-base px-8 py-6"
                asChild
              >
                <a href="mailto:contact.verityia@gmail.com?subject=Verity - Talk to Sales">
                  {dict.cta.talkToSales}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
