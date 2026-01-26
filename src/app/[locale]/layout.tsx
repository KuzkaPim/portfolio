import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import {
  getTranslations,
  setRequestLocale,
  getMessages,
} from 'next-intl/server';
import { ThemeProvider } from '../providers';
import { Suspense } from 'react';
import { DesktopHeader, MobileHeader, Footer, UpArrow } from './blocks';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL('https://kuzmadev.vercel.app'),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/',
      languages: { ru: '/', en: '/en' },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      images: [
        {
          url: '/assets/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/assets/opengraph-image.jpg'],
    },
  };
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const RootLayout = async ({ children, params }: Readonly<Props>) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense>
              <DesktopHeader />
              <MobileHeader />
            </Suspense>
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
            <UpArrow />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
