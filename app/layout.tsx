import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import Header from './components/header';
import type { Metadata } from 'next';
import { Providers } from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fast Links',
  description: 'Fast Links app allow to create a links, comments and notes',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: '100%' }} suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Rye&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nixie+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body style={{ height: '100%' }} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
