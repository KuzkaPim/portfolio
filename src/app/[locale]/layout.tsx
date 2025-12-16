import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { Footer } from './blocks/Footer';
import { UpArrow } from './blocks/UpArrow';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Кузьма | Frontend-разработчик | Next.js, Nest.js',
  description:
    'Frontend-разработчик, создающий архитектурно чистые приложения на Next.js, с опытом работы с Fullstack-стеком (Nest.js, TypeScript)',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: Readonly<Props>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-secondary min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider>
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <UpArrow />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
