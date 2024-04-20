import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WizyX',
  description: 'Hello, I am @wizyx, I have been on the path of becoming a developer for 2 years. I live in Yalova, Türkiye.',
  themeColor: '#8B5CF6',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: 'https://cdn.discordapp.com/attachments/1225439296975015936/1231187910946984006/image.png?ex=66360c18&is=66239718&hm=5211c11f8f9eb9e084ddab52dfa8ae6c5859c5b49e361c536f9fd99c9f7bd329&',
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
