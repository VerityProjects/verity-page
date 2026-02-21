import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { getHtmlLang, type Locale } from "@/lib/i18n";

const GA_MEASUREMENT_ID = "G-7R3Q2D78YT";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: { default: "Verity", template: "%s" },
  icons: { icon: "/verity-icon.svg" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = (headersList.get("x-next-locale") ?? "en") as Locale;
  const lang = getHtmlLang(locale);

  return (
    <html lang={lang}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
