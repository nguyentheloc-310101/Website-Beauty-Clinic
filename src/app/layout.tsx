"use client";
import FooterAura from "@/components/footer/FooterAura";
import HeaderAura from "@/components/navbar/HeaderAura";
import NavigationAura from "@/components/navbar/NavigationAura";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const serviceCardFont = localFont({
  src: "../../public/fonts/SVN-Ameyallinda Signature.otf",
  variable: "--font-service-card",
  style: "normal",
});

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
      <body className={`${inter.className} ${serviceCardFont.variable}`}>
        <HeaderAura />
        <NavigationAura />
        <div className="flex-1 mb-[5rem]">{children}</div>
        <FooterAura />
      </body>
    </html>
  );
}
