import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Cash Management Under Uncertainty",
    description:
      "The most critical decision any company makes: 'How long do I survive if things get worse?' We predict when cash tightens, explain why, and show what to do — with scenarios, not orders.",
  },
  {
    number: "02",
    title: "Data Nobody Else Has",
    description:
      "Beyond revenue and expenses, we capture what companies asked, feared, simulated, and did after. This creates behavioral economic intelligence — a dataset nearly impossible to replicate.",
  },
  {
    number: "03",
    title: "Trust Through Transparency",
    description:
      "Conservative by default. Fully explainable. Clear boundaries. We show pessimistic scenarios first, never hide behind 'the AI decided', and always state what we do — and what we don't.",
  },
  {
    number: "04",
    title: "From Software to Infrastructure",
    description:
      "Banks use our scores for credit. Insurers for pricing. Investors for due diligence. We don't sell software — we sell economic truth. In 5 years, replicating this costs billions.",
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Our <span className="text-gradient">Methodology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We're not building an AI product. We're building the financial nervous system of companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-8 card-hover relative overflow-hidden"
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
