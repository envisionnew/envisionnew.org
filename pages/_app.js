import '../styles/globals.css';
// import "flickity/css/flickity.css";
import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';
import { Parallax } from 'react-parallax';
import Head from 'next/head';

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
