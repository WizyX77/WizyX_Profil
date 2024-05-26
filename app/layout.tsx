import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wizyx Portfolio 🌙',
  description: 'Hello, I am @_wizyx, I have been on the path of becoming a developer for 3 years. I live in Yalova, Türkiye.',
  themeColor: '#8B5CF6',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: 'https://cdn.discordapp.com/avatars/972557059860099082/9a1186c90d74bec3fc18b51ab3ff757f.gif?size=1024',
  openGraph: {
    images: 'https://share.creavite.co/6623972a9368fc5de79329e5.gif',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
