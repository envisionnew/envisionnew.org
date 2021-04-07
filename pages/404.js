import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Unavailable() {
  return (
    <div className="text-black bg-white">
      <Head>
        <title>404 – Unavailable</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />

      <div className="flex flex-col justify-center mx-auto mt-32 mb-16 text-center max-w-2x1">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
          404 – Unavailable
        </h1>
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4 hover:text-white hover:bg-black"
          href="/"
        >
          Return Home
        </a>
      </div>
      <Footer link="https://github.com/minor/envisionweb/edit/main/pages/404.js" />
    </div>
  );
}
