import Head from 'next/head';
import HomePage from './home';
import { Metadata } from 'next';

export default function Home() {
  return (
    <div>
      <Head>
        <title>This page has a title 🤔</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <HomePage />
    </div>
  );
}
