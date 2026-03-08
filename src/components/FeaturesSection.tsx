import { motion } from "framer-motion";
import { ShieldCheck, Brain, TrendingDown, BarChart3, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: TrendingDown,
    title: "Cash Crisis Prediction",
    description: "Know when cash tightens before it happens. Our AI analyzes patterns that precede financial crises by up to 60 days.",
  },
  {
    icon: Brain,
    title: "Behavioral Intelligence",
    description: "We don't just track numbers — we learn how companies react to them. Unique behavioral economic data no one else has.",
  },
  {
    icon: ShieldCheck,
    title: "Radical Conservatism",
    description: "Always pessimistic scenarios first. We never sell dreams — we show what happens if everything goes wrong.",
  },
  {
    icon: BarChart3,
    title: "Full Explainability",
    description: "No black boxes. Every insight is traceable and auditable. You see exactly why the AI reached its conclusion.",
  },
  {
    icon: Zap,
    title: "Scenario Simulation",
    description: "Explore what-if scenarios instantly. Make informed decisions with clear paths, not orders.",
  },
  {
    icon: Lock,
    title: "Deep Integration",
    description: "Connect accounting, payroll, payments, CRM, and operations. Switching becomes impossible — we become infrastructure.",
  },
];

const FeaturesSection = () => {
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
            Built for <span className="text-gradient">Financial Clarity</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every decision powered by data, explained in full, and designed to protect your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-8 card-hover group"
            >
              <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold font-display mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
