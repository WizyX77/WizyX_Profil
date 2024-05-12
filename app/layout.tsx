import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'S2G Wizyx',
  description: 'Hello, I am @_wizyx, I have been on the path of becoming a developer for 3 years. I live in Yalova, Türkiye.',
  themeColor: '#8B5CF6',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: 'https://cdn.discordapp.com/attachments/972574061320368208/1239277762628288592/DcProfil.gif?ex=664256db&is=6641055b&hm=b69a720706971c18cd394970dfceba6521cd7fc4351406a5cdc5fb9f9e51e866&',
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
