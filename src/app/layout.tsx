import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { Actions } from './components/Actions';
import { Footer } from './components/Footer';
import { UpArrow } from './components/UpArrow';

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

const RootLayout = ({ children }: Readonly<Props>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Actions />
        <Header />
        <main>{children}</main>
        <Footer />
        <UpArrow />
      </body>
    </html>
  );
};

export default RootLayout;
