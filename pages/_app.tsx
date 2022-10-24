import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import Code from '../public/code.svg';
import '@fontsource/roboto-slab/400.css';
import '@fontsource/roboto-slab/500.css';
import '@fontsource/roboto-slab/700.css';
import '@fontsource/roboto-slab/900.css';
import '../styles/globals.css';

const codeLocations = [
  { top: 4, left: 24 },
  { top: 24, left: 4 },
  { top: 28, left: 32 },
]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jaden's Portfolio</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <div>
        <div className='absolute bg-background_darker -z-20 opacity-30 w-full min-h-full -rotate-45 -left-1/3 -top-2/3'></div>
        {codeLocations.map((code) => {
          return <Code className={`absolute h-16 -z-10 opacity-5`} style={{ top: `${code.top}rem`, left: `${code.left}rem` }}></Code>;
        })}
      </div>
    </>
  )
}

export default MyApp
