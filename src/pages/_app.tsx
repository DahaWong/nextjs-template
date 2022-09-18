import '../styles/globals.css';

import Head from 'next/head';

import PageLayout from '../components/layout/page';

import type {AppProps} from "next/app";
const NAME = "Website Name";
const DESCRIPTION = "An website for ...";
const URL = "https://somedomain.app";
const IMAGE = "https://somedomain.app/social-image.png";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>{NAME}</title>
        {/* <meta name="application-name" content={NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={NAME} />
        <meta name="description" content={DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#fafafa" />
        <meta name="twitter:url" content={URL} />
        <meta name="twitter:title" content={NAME} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@tldraw" />
        <meta name="twitter:site" content="@tldraw" />
        <meta name="twitter:image" content={IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={NAME} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:site_name" content={NAME} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={IMAGE} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        /> */}
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}

export default App;
