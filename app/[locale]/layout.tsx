import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://verity.com";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isPt = locale === "pt";
  const title = isPt
    ? "Verity — IA que fortalece seu negócio"
    : "Verity — AI that strengthens your business";
  const description = isPt
    ? "Transformamos a complexidade da IA em vantagem prática para negócios reais. Soluções sob medida, integradas à operação."
    : "We turn AI complexity into real business advantage. Custom solutions, integrated into your operations.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: "Verity",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
