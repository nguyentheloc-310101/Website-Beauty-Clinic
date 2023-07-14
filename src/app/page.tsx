import Head from 'next/head';
import HomePage from './home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chuỗi thẩm mỹ viện quốc tế Aura Beauty Clinic',
  description: 'Aura Beauty Clinic',
  icons: '/favicon.ico',
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
