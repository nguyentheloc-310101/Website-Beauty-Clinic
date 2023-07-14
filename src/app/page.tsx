import Head from 'next/head';
import HomePage from './home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aura Beauty Clinic',
  description: 'Chuỗi thẩm mỹ viện quốc tế Aura Beauty Clinic',
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
