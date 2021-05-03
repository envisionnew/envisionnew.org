import '../styles/globals.css';
// import "flickity/css/flickity.css";
import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';
import { Parallax } from 'react-parallax';
import Head from 'next/head';
import posthog from 'posthog-js';

posthog.init('UF08LDA5dDLrvNzJXX5JxT-zmIK1TTH14b-rG8v63fQ', {
  api_host: 'https://app.posthog.com'
});

export default function MyApp({ Component, pageProps }) {
  return (
    <Parallax>
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Component {...pageProps} />
      </MDXProvider>
    </Parallax>
  );
}
