import HeaderAura from '@/components/HeaderAura';
import './globals.css';
import { Inter } from 'next/font/google';
import NavigationAura from '@/components/NavigationAura';
import FooterAura from '@/components/FooterAura';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chuỗi thẩm mỹ viện quốc tế Aura Beauty Clinic',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="stylesheet" href="https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/livesaas-client/pc/byteplus/css/index.1.1.2-beta.2.css" />
      </head>
      <body className={inter.className}>
        <HeaderAura/>
        <NavigationAura/>

        <div className="flex-1 mb-[5rem]">
          {children}
        </div>

        <FooterAura/>
        <script src="https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/livesaas-client/pc/byteplus/js/index.1.1.2-beta.2.js"/>
      </body>
    </html>
  );
}
