import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

const MethodologySection = () => {
  const { dict } = useLocale();

  return (
    <section id="methodology" className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            {dict.methodology.sectionTitle}{" "}
            <span className="text-gradient">{dict.methodology.sectionTitleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {dict.methodology.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dict.methodology.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 md:p-8 card-hover relative overflow-hidden"
            >
              <span className="absolute top-6 right-6 text-6xl font-bold font-display text-primary/10">
                {pillar.number}
              </span>
              <h3 className="text-xl font-semibold font-display mb-3 pr-16">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
