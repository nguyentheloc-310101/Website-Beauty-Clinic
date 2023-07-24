'use client';
import HeaderAura from '@/components/navbar/HeaderAura';
import NavigationAura from '@/components/navbar/NavigationAura';
import FooterAura from '@/components/footer/FooterAura';
import PanelContact from '@/components/panel-contact/PanelContact';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9JMMHFKQ0X" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-9JMMHFKQ0X');
        `}
        </Script>
      </head>
      <body className={inter.className}>
        <HeaderAura />
        <NavigationAura />
        <div className="flex-1 mb-[5rem]">
          <PanelContact />
          {children}
        </div>

        <FooterAura />
      </body>
    </html>
  );
}
