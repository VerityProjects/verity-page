import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="pt-16" tabIndex={-1}>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center bg-[#050505] text-white px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(57,208,64,0.15),transparent)]" />
          <div className="container mx-auto text-center relative z-10">
            <Image
              src="/logo-default-no-bg.svg"
              alt="Verity"
              width={320}
              height={120}
              className="mx-auto mb-8 w-64 sm:w-80"
              priority
            />
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
              We turn the complexity of AI into practical advantage for real
              businesses.
            </p>
            <p className="text-neutral-400 max-w-xl mx-auto mb-12">
              We don’t sell promises or generic dashboards. We build
              intelligent, custom solutions that solve real problems and deliver
              measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-verity-green text-[#050505] hover:bg-verity-green/90 font-semibold"
                )}
              >
                Get in touch
              </a>
              <a
                href="#about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "bg-transparent border-neutral-500 text-white hover:bg-white/10 hover:text-white hover:border-neutral-400"
                )}
              >
                About us
              </a>
            </div>
          </div>
        </section>

        {/* About us */}
        <section
          id="about"
          className="py-20 sm:py-28 px-4 bg-background"
        >
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Who we are
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Verity is a technology company focused on turning AI complexity
              into practical advantage for real businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We don’t sell promises, flashy dashboards, or “generic AI.” We
              build intelligent solutions tailored to your operations that solve
              concrete problems and deliver measurable impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe AI isn’t about trends — it’s about better decisions,
              more efficient processes, and sustainable growth.
            </p>
          </div>
        </section>

        {/* Origin and principle */}
        <section className="py-20 sm:py-28 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Where our ideas and principles come from
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Verity was born from a simple, uncomfortable observation: the
              talk about AI in the market is far ahead of how it’s actually
              applied inside companies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              On one side, ready-made tools that are superficial and hard to
              adapt. On the other, companies with specific pains, unique
              processes, and no time to “try fads.”
            </p>
            <p className="font-medium mb-4">Our principle is clear:</p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• AI must serve the business, not the other way around</li>
              <li>
                • Every company has its own logic — and technology should
                respect it
              </li>
              <li>
                • Automation only makes sense when it frees people for
                strategic decisions, not when it adds more noise
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              That’s why Verity acts as a strategic partner, not as a generic
              software vendor.
            </p>
          </div>
        </section>

        {/* What we want to achieve */}
        <section className="py-20 sm:py-28 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              What we want to achieve and impact
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We want to be the link between strategy, data, and intelligent
              execution.
            </p>
            <p className="font-medium mb-4">Our impact is in:</p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>
                • Helping companies make better, faster decisions based on real
                data
              </li>
              <li>
                • Cutting operational waste with thoughtful, intelligent
                automation
              </li>
              <li>
                • Turning AI into a competitive asset, not an expensive
                experiment
              </li>
              <li>
                • Raising the technological maturity of the companies we serve
              </li>
            </ul>
            <p className="text-foreground font-medium border-l-4 border-verity-green pl-4 py-2">
              In the long run, Verity exists to prove a simple thesis:
              well-applied AI doesn’t replace businesses — it strengthens them.
            </p>
          </div>
        </section>

        {/* Why Verity is different */}
        <section
          id="why-verity"
          className="py-20 sm:py-28 px-4 bg-muted/30"
        >
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
              Why Verity is different
            </h2>

            <div className="space-y-14">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  1. We don’t sell AI. We sell competitive advantage.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Many companies sell tools. We deliver real operational impact.
                  If it doesn’t improve margin, reduce cost, speed up decisions,
                  or boost commercial performance, it doesn’t deserve to exist.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  2. Nothing generic. Everything tailored.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Off-the-shelf tools solve average problems. Companies aren’t
                  average. Verity builds solutions aligned with your business
                  logic, your data, and your strategy. Technology adapted to the
                  company — not the other way around.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  3. Strategy before technology
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Before we talk about models, algorithms, or automation, we
                  ask:
                </p>
                <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Where is the bottleneck?</li>
                  <li>Where is the waste?</li>
                  <li>Where is the hidden opportunity?</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Only then does AI come in.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  4. Real integration with operations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don’t build parallel systems that become just another
                  open tab. Our solutions integrate into your existing flow,
                  work with your data, and fit the reality of your team.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  5. Focus on tech maturity, not hype
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI isn’t a fad. It isn’t magic either. Our goal is to raise
                  the strategic level of the company, making technology a
                  structural asset, not an experimental bet.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  6. Partnership, not vendor
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don’t deliver and disappear. We grow with the evolution of
                  your business, adjusting, refining, and expanding as needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section
          id="contact"
          className="py-20 sm:py-28 px-4 bg-[#050505] text-white"
        >
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Ready to turn AI into advantage?
            </h2>
            <p className="text-neutral-400 mb-8">
              Get in touch with Verity. No commitment, no hype — just a
              strategic conversation.
            </p>
            <a
              href="mailto:contact.verityia@gmail.com"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-verity-green text-[#050505] hover:bg-verity-green/90 font-semibold inline-flex"
              )}
            >
              Get in touch
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
