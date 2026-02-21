import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-7R3Q2D78YT";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://verity.com";

export const metadata: Metadata = {
  title: "Verity — AI that strengthens your business",
  description:
    "We turn AI complexity into real business advantage. Custom solutions, integrated into your operations.",
  icons: {
    icon: "/verity-icon.svg",
  },
  openGraph: {
    title: "Verity — AI that strengthens your business",
    description:
      "We turn AI complexity into real business advantage. Custom solutions, integrated into your operations.",
    url: siteUrl,
    siteName: "Verity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verity — AI that strengthens your business",
    description:
      "We turn AI complexity into real business advantage. Custom solutions, integrated into your operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
