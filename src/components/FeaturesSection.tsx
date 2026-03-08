import { motion } from "framer-motion";
import { ShieldCheck, Brain, TrendingDown, BarChart3, Zap, Lock } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const icons = [TrendingDown, Brain, ShieldCheck, BarChart3, Zap, Lock];

const FeaturesSection = () => {
  const { dict } = useLocale();

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            {dict.features.sectionTitle}{" "}
            <span className="text-gradient">{dict.features.sectionTitleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {dict.features.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.features.items.map((feature, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-8 card-hover group"
              >
                <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold font-display mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
