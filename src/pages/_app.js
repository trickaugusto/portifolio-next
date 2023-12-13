import { Roboto } from 'next/font/google';
import '@/styles/globals.css';
import Head from 'next/head';

const roboto = Roboto({
  weight: ['100', '400', '500', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Patrick Augusto',
  description: 'Portfolio by @trickaugusto',
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{metadata.title || 'Next.js App'}</title>
        <meta
          name='description'
          content={metadata.description || 'Next.js App Description'}
        />
      </Head>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
