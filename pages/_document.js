import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="author" content="Project enVision U.S." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`/favicon/brand_og.png`} />
          <meta property="twitter:image" content={`/favicon/brand_og.png`} />
          <meta
            name="google-site-verification"
            content="SIjCpAkrChhv5gxAW9PcjzHvnOvnK0ttzzCpq4u1qx0"
          />
          <link rel="icon" href="/favicon/favicon.ico" />
          <meta
            name="description"
            content="Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
