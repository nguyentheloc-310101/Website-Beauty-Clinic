'use client';
import HeaderAura from '@/components/navbar/HeaderAura';
import NavigationAura from '@/components/navbar/NavigationAura';
import FooterAura from '@/components/footer/FooterAura';
import PanelContact from '@/components/panel-contact/PanelContact';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
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
