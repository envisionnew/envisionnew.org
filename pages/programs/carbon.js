import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React from 'react';
import { NextSeo } from 'next-seo';

export default function Tutoring() {
  return (
    <div className="max-h-full text-black bg-white">
      <NextSeo
        title="Tutoring | Project enVision U.S."
        description="Get free tutoring by successful high school students."
        canonical="https://envisionnew.org/programs/tutoring/"
        openGraph={{
          url: 'https://envisionnew.org/programs/tutoring',
          title: 'Tutoring | Project enVision U.S.',
          description: 'Get free tutoring by successful high school students.',
          site_name: 'Project enVision U.S.'
        }}
        twitter={{
          handle: '@envisionnew',
          site: '@envisionnew',
          cardType: 'summary_large_image'
        }}
      />
      <Head>
        <title>Project Carbon | Project enVision</title>
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto mt-32 mb-16 text-center max-w-2x1">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
          This page is still in development.
        </h1>
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4 hover:text-white hover:bg-black"
          aria-label="home"
          href="/"
        >
          Return Home
        </a>
      </div>
      {/* <section className="relative text-gray-600 body-font">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-6 text-6xl font-semibold text-black title-font">
              Free tutoring. Done <span className="underline">right</span>.
            </h1>
            <br className="hidden lg:block"></br>
            <p className="mx-auto text-base text-xl font-semibold leading-relaxed text-left text-gray-900 lg:w-1/2">
              We teach a variety of different courses, ranging from mathematics
              to computer science to history. Check out a few of our most recent
              classes.
            </p>
            <div className="max-w-6xl pt-32 pb-32 mx-auto fsac4">
              <div class="ktq4">
                <img src="/learn/img/class1.png"></img>
                <h3 class="pt-3 font-semibold text-lg text-white">
                  Instructor Parth Paliwal with his Java Class
                </h3>
                <p class="pt-2 value-text text-md text-gray-200 fkrr1"></p>
              </div>
              <div class="ktq4">
                <img src="/learn/img/class2.png"></img>
                <h3 class="pt-3 font-semibold text-lg text-white">
                  Instructors Garima Upadhya and Praneet Joshi teaching their C
                  class
                </h3>
                <p class="pt-2 value-text text-md text-gray-200 fkrr1"></p>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-2 text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="mb-20 text-center">
              <span className="px-3 pb-2.5 mb-3 rounded-10 badge badge-success-soft">
                <p className="mt-2">Courses</p>
              </span>
              <h2 className="mb-4 font-medium text-black sm:text-5xl title-font">
                View our offered courses.
              </h2>
              <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
                Project enVision U.S. offers the following courses.
              </p>
              <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
              </div>

              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="Python photo"
                        class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="/learn/img/python.png"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          Python
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          We teach both the introductory levels as well as
                          advanced (grades 7+).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="Web Development photo"
                        class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="/learn/img/webdev.png"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          Web Development
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          We teach both the introductory levels as well as
                          advanced (grades 7+).{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="C photo"
                        class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="/learn/img/c.png"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          C
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          We teach both the introductory levels as well as
                          advanced (grades 7+).{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="Java photo"
                        class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="/learn/img/java.png"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          Java
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          We teach both the introductory levels as well as
                          advanced (grades 7+).{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-full md:w-full">
                    <div className="flex flex-col items-center h-full text-center">
                      <div className="lg:w-1/4 sm:w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          Debate
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          We teach the basics of debate as well as different
                          techniques that have worked for our qualified
                          instructors (Tournaments of Champions level debaters).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section> */}
      <br />
      <Footer />
    </div>
  );
}
