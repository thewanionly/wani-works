import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import './globals.css';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Chat AI',
  description:
    'An interactive chat interface that allows users to send messages and receive responses from an AI model',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${notoSans.variable} font-primary bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
