import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="author" content="Project enVision U.S." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`/favicon/send.png`} />
          <meta property="twitter:image" content={`/favicon/send.png`} />
          <meta
            name="google-site-verification"
            content="SIjCpAkrChhv5gxAW9PcjzHvnOvnK0ttzzCpq4u1qx0"
          />
          <link rel="icon" href="/favicon/favicon.ico" />
          <meta
            name="description"
            content="Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere."
          />
          <script
            async
            defer
            src="https://aurora.saurish.com/aurora.js"
            aurora-id="b2bdf183e5e261183102101eaab050b2"
          ></script>
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
