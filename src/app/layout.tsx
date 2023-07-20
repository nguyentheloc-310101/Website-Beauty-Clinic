'use client';
import FooterAura from '@/components/FooterAura';
import HeaderAura from '@/components/HeaderAura';
import NavigationAura from '@/components/NavigationAura';
import PanelContact from '@/components/panel-contact/PanelContact';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

interface BreakCrumbProps {
  icon?: React.ForwardRefExoticComponent<any>;
  title: string;
  linkTo?: string;
}
//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width) {
      if (windowSize.width < 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, [windowSize]);

  return (
    <html lang="vi">
      <body className={inter.className}>
        <HeaderAura isMobile={isMobile} />
        <NavigationAura isMobile={isMobile} />

        <div className="flex-1 mb-[5rem]">
          <PanelContact />
          {children}
        </div>

        <FooterAura isMobile={isMobile} />
      </body>
    </html>
  );
}
