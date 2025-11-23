import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Cairo, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kemet.AI",
  description: "Professional landing page built with Next.js 15",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${plusJakartaSans.variable} ${cairo.variable} antialiased ${locale === "ar" ? "font-cairo" : "font-plus-jakarta-sans"}`}>
        <NextIntlClientProvider messages={messages}>
          <NextTopLoader showSpinner={false} color="#208E9A" />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
