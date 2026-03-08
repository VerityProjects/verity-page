import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardImg from "@/assets/verity-dashboard.jpeg";

const HeroSection = () => {
  return (
    <section id="product" className="relative pt-32 pb-20 overflow-hidden hero-gradient">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Introducing Verity AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-[0.95] mb-6"
        >
          The Financial
          <br />
          <span className="text-gradient">Nervous System</span>
          <br />
          for Your Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          AI-powered cash flow intelligence that predicts financial crises before they happen.
          Clarity, not guesswork.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Start Free Trial
            <ArrowRight className="ml-1" size={18} />
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
            Watch Demo
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
              alt="VerityMind Dashboard - Cash flow analytics and financial health monitoring"
              className="w-full"
            />
          </div>
          {/* Gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
