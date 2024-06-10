import ProgressBarProvider from "@/app/components/Providers/ProgressBar";
import cn from "@/lib/cn";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wizyx",
  description: "𓆩♡𓆪 Merhaba Ben Efe, 17 Yaşındayım Ve 3 Yıldır Yazılım İle İlgileniyorum. Bu Kadar Yeter :D\n Hakkımda ki Diğer Bilgileri de Siteye Göz Atarak Öğrenebilirsin. (Ücretli Bot/Website Yapılır.) ",
  themeColor: "#8B5CF6",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: "https://cdn.discordapp.com/avatars/972557059860099082/9a1186c90d74bec3fc18b51ab3ff757f.gif?size=1024",
  openGraph: {
    images: "https://cdn.discordapp.com/avatars/972557059860099082/9a1186c90d74bec3fc18b51ab3ff757f.gif?size=1024",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("flex flex-col", GeistSans.className, GeistSans.variable)}>
        <ProgressBarProvider>
          {children}
        </ProgressBarProvider>
      </body>
    </html>
  );
}
