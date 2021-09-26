import React from 'react';
import Link from 'next/link';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header className="fixed top-0 z-50 w-full text-gray-900 clearNav body-font">
      <div className="container flex flex-wrap p-4 mx-auto md:flex-row">
        <a
          className="flex pr-4 font-medium text-gray-900 title-font"
          aria-label="logo"
          href="/"
        >
          <h1 className="text-2xl">PROJECT ENVISION U.S.</h1>
          {/* <img src="/favicon/brand.svg" alt="Project enVision U.S. Logo"></img> */}
        </a>
        <button
          aria-label="navigation"
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
            'md:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <nav className="flex flex-wrap items-center justify-center font-semibold text-md md:ml-auto pl-7">
            <Link href="/about">
              <a className="mr-1 hover:text-gray-500">About</a>
            </Link>
            <div className="relative">
              <button
                type="button"
                className="flex items-center px-5 py-3 font-semibold transition duration-150 ease-in-out hover:text-gray-500'
                  "
                onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
              >
                <Link href="/#programs">
                  <a className="hover:text-gray-500">Programs</a>
                </Link>
                <svg
                  className={
                    flyer === true
                      ? 'transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200'
                      : 'ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? 'opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-44 max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
                    : 'hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-36 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
                }
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-white ring-opacity-5">
                  <div className="relative grid gap-6 px-2 py-6 bg-white sm:gap-8 ">
                    <Link href="/programs/learn">
                      <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-200 tr04">
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Learn
                          </p>
                        </div>
                      </a>
                    </Link>
                    <Link href="/programs/tutor">
                      <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-200 tr04">
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Tutor
                          </p>
                        </div>
                      </a>
                    </Link>
                    <Link href="/programs/lotus">
                      <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-200 tr04">
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Lotus
                          </p>
                        </div>
                      </a>
                    </Link>
                    <Link href="/programs/carbon">
                      <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-200 tr04">
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Carbon
                          </p>
                        </div>
                      </a>
                    </Link>
                    <Link href="/programs/chapters">
                      <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-200 tr04">
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Chapters
                          </p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/events">
              <a className="mr-6 hover:text-gray-500">Events</a>
            </Link>
            <Link href="/#volunteer">
              <a className="mr-6 hover:text-gray-500">Volunteer</a>
            </Link>
            <Link href="/contact">
              <a className="mt-4 mr-6 md:mt-0 hover:text-gray-500">Contact</a>
            </Link>
            <Link href="/blog">
              <a className="mt-4 mr-6 md:mt-0 hover:text-gray-500">Blog</a>
            </Link>
          </nav>
          <a href="https://donorbox.org/project-envision">
            <button
              aria-label="donate"
              className="px-4 py-2 mt-2 font-semibold text-gray-900 transition duration-500 ease-in-out transform rounded-lg text-md bg-gradient-to-r from-purple-200 via-pink-300 to-red-300 md:mt-0 md:ml-4 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Donate
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
