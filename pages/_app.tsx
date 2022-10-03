import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jaden's Portfolio</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
