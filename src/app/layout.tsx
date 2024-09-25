import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Glow Arabia Trading Est.',
  description:
    'Glow Arabia Trading Est Our company specializes in supply of industrial and building materials We have a full range of products that include mechanical,construction, safety, electrical etc.',
  icons: {
    icon: '/assets/logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-tertiary text-black`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
