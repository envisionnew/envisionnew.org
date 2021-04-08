import React from "react";
import Head from "next/head";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header className="fixed top-0 z-50 w-full text-gray-900 clearNav body-font">
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
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
      <div className="container flex flex-wrap p-5 mx-auto md:flex-row">
        <a
          className="flex pr-4 mb-4 font-medium text-gray-900 title-font md:mb-0"
          href="/"
        >
          <h1 className="text-2xl">PROJECT ENVISION U.S.</h1>
          {/* <img src="/favicon/brand.svg" alt="Project enVision U.S. Logo"></img> */}
        </a>
        <button
          className="block py-1 pb-3 ml-auto text-xl leading-none text-gray-900 bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer md:hidden focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <nav className="flex flex-wrap items-center justify-center text-base font-semibold md:ml-auto pl-7">
            <a className="mr-6 hover:text-gray-900" href="/">
              Home
            </a>
            <a className="mr-6 hover:text-gray-900" href="/about">
              About
            </a>
            <a className="mr-6 hover:text-gray-900" href="/#programs">
              Programs
            </a>
            <a className="mr-6 hover:text-gray-900" href="/#volunteer">
              Volunteer
            </a>
            <a className="mr-6 hover:text-gray-900" href="/contact">
              Contact
            </a>
          </nav>
          <a href="https://donorbox.org/project-envision">
            <button className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-purple-200 via-pink-300 to-red-300 dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
              Donate
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
