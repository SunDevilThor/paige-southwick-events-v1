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

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://sundevilthor.github.io/paige-southwick-events/';
const siteUrl = new URL(
  configuredSiteUrl.endsWith('/')
    ? configuredSiteUrl
    : `${configuredSiteUrl}/`,
);
const socialImageUrl = new URL('og.png', siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Paige Southwick Events | Wedding Planning & Design',
  description:
    'Thoughtful wedding planning, design, and coordination with Paige Southwick, so you can stay present for every moment.',
  alternates: {
    canonical: siteUrl.toString(),
  },
  openGraph: {
    type: 'website',
    url: siteUrl.toString(),
    title: 'Paige Southwick Events | Your day, beautifully held.',
    description:
      'Thoughtful wedding planning, design, and coordination with Paige Southwick.',
    images: [
      {
        url: socialImageUrl,
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
    images: [socialImageUrl],
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
