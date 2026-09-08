import type { Metadata, Viewport } from 'next';
import { Arima, Libre_Baskerville } from 'next/font/google';
import './globals.css';

const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const arima = Arima({
  variable: '--font-arima',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      'https://paige-southwick-events.thorkeane.chatgpt.site',
  ),
  title: 'Paige Southwick Events | Wedding Planning & Design',
  description:
    'Thoughtful wedding planning, design, and coordination with Paige Southwick, so you can stay present for every moment.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: 'Paige Southwick Events | Your day, beautifully held.',
    description:
      'Thoughtful wedding planning, design, and coordination with Paige Southwick.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Paige Southwick Events, Your day, beautifully held.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paige Southwick Events | Your day, beautifully held.',
    description:
      'Thoughtful wedding planning, design, and coordination with Paige Southwick.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fff6ed',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} ${arima.variable}`}>
        {children}
      </body>
    </html>
  );
}
