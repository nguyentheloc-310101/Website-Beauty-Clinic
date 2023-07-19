import { Metadata } from 'next';
import HomePage from './home';

export const metadata: Metadata = {
  title: 'Chuỗi thẩm mỹ viện quốc tế Aura Beauty Clinic',
  description: 'Aura Beauty Clinic',
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
