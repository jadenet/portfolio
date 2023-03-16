import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import Code from "../public/code.svg";
import "@fontsource/roboto-slab/400.css";
import "@fontsource/roboto-slab/500.css";
import "@fontsource/roboto-slab/700.css";
import "@fontsource/roboto-slab/900.css";
import "../styles/globals.css";

const codeLocations = [
  { top: 4, left: 24 },
  { top: 24, left: 4 },
  { top: 32, left: 36 },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jaden Edwards | Portfolio</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="hidden md:inline font-bold hover:scale-105 active:scale-95 transition text-sm bg-blue-400 px-6 py-5 rounded-full fixed bottom-8 right-8"
      >
        /\
      </button>

      <div>
        <div className="absolute bg-gray-900 -z-20 opacity-30 w-full min-h-full -rotate-[35deg] -left-[28%] -top-2/3"></div>
        <div className="grid grid-rows-[20]">
          {codeLocations.map((code) => {
            return (
              <Code
                className="absolute h-16 -z-10 opacity-5"
                style={{ top: `${code.top}rem`, left: `${code.left}rem` }}
              ></Code>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyApp;
