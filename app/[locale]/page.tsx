import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {dict.skipLink}
      </a>
      <Header locale={locale as Locale} dict={dict} />
      <main id="main-content" className="pt-16" tabIndex={-1}>
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
              {dict.hero.tagline}
            </p>
            <p className="text-neutral-400 max-w-xl mx-auto mb-12">
              {dict.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-verity-green text-[#050505] hover:bg-verity-green/90 font-semibold"
                )}
              >
                {dict.hero.getInTouch}
              </a>
              <a
                href="#about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "bg-transparent border-neutral-500 text-white hover:bg-white/10 hover:text-white hover:border-neutral-400"
                )}
              >
                {dict.hero.aboutUs}
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 sm:py-28 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              {dict.about.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {dict.about.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {dict.about.p2}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {dict.about.p3}
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              {dict.origin.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {dict.origin.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {dict.origin.p2}
            </p>
            <p className="font-medium mb-4">{dict.origin.principleTitle}</p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• {dict.origin.li1}</li>
              <li>• {dict.origin.li2}</li>
              <li>• {dict.origin.li3}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              {dict.origin.p3}
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              {dict.impact.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {dict.impact.p1}
            </p>
            <p className="font-medium mb-4">{dict.impact.listTitle}</p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• {dict.impact.li1}</li>
              <li>• {dict.impact.li2}</li>
              <li>• {dict.impact.li3}</li>
              <li>• {dict.impact.li4}</li>
            </ul>
            <p className="text-foreground font-medium border-l-4 border-verity-green pl-4 py-2">
              {dict.impact.thesis}
            </p>
          </div>
        </section>

        <section
          id="why-verity"
          className="py-20 sm:py-28 px-4 bg-muted/30"
        >
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
              {dict.whyVerity.title}
            </h2>
            <div className="space-y-14">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  1. {dict.whyVerity["1_title"]}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {dict.whyVerity["1_p"]}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  2. {dict.whyVerity["2_title"]}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {dict.whyVerity["2_p"]}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  3. {dict.whyVerity["3_title"]}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  {dict.whyVerity["3_intro"]}
                </p>
                <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                  <li>{dict.whyVerity["3_li1"]}</li>
                  <li>{dict.whyVerity["3_li2"]}</li>
                  <li>{dict.whyVerity["3_li3"]}</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  {dict.whyVerity["3_outro"]}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  4. {dict.whyVerity["4_title"]}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {dict.whyVerity["4_p"]}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  5. {dict.whyVerity["5_title"]}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {dict.whyVerity["5_p"]}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-verity-green">
                  6. {dict.whyVerity["6_title"]}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {dict.whyVerity["6_p"]}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-20 sm:py-28 px-4 bg-[#050505] text-white"
        >
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              {dict.contact.title}
            </h2>
            <p className="text-neutral-400 mb-8">{dict.contact.subtitle}</p>
            <a
              href="mailto:contact.verityia@gmail.com"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-verity-green text-[#050505] hover:bg-verity-green/90 font-semibold inline-flex"
              )}
            >
              {dict.contact.button}
            </a>
          </div>
        </section>

        <Footer dict={dict} locale={locale as Locale} />
      </main>
    </>
  );
}
