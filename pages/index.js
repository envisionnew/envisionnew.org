import Head from 'next/head';
import Header from '../components/Header';
import Typing from '../components/Typing';
import Mission from '../components/Mission';
import Testimony from '../components/Testimony';
import Programs from '../components/Programs';
import Sponsors from '../components/Sponsors';
import Subscribe from '../components/Subscribe';
import Volunteer from '../components/Volunteer';
import Footer from '../components/Footer';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';

const Border = styled.span`
  border-left: 0.1rem solid black;
  height: 1.25rem;
  margin-left: 1rem;
  @media (max-width: 768px) {
    border-left: 0.1rem black;
  }
`;

export default function Home() {
  return (
    <div className="text-black bg-white">
      <NextSeo
        title="Project enVision U.S."
        description="Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere."
        canonical="https://envisionnew.org/"
        openGraph={{
          url: 'https://envisionnew.org/',
          title: 'Project enVision U.S.',
          description:
            'Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere.',
          site_name: 'Project enVision U.S.'
        }}
        twitter={{
          handle: '@envisionnew',
          site: '@envisionnew',
          cardType: 'summary_large_image'
        }}
      />
      <Head>
        <title>Project enVision U.S.</title>
      </Head>
      <Header />
      <section className="text-black body-font lg:pt-20">
        <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
          <div className="flex flex-col w-full mb-2 text-center">
            <h1 className="mt-6 mb-2 text-5xl font-bold leading-tight tracking-tighter text-black lg:text-8xl md:text-6xl sm:text-5xl">
              <span>
                We help{' '}
                <span className="px-3 md:pl-3 md:pr-4 rounded-2xl bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 animate-gradient-x">
                  students
                </span>{' '}
              </span>
              <br />
              <Typing />
            </h1>
            <br />
            <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg ">
              <img
                className="object-cover object-center w-4/5 mb-10 rounded-lg lg:w-1/4"
                alt="Conversations"
                src="/images/conversation.svg"
              ></img>
            </div>
            <p className="mx-auto text-2xl font-normal leading-relaxed text-center text-gray-600 lg:text-3xl lg:text-center lg:w-2/3">
              Project enVision is a nonprofit accelerator focused on providing
              volunteer and educational services to young people everywhere.
            </p>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto mt-5">
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="w-1/3 p-4">
                    <h2 className="text-4xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={2000} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </h2>
                    <p className="leading-relaxed">Students Helped</p>
                  </div>
                  <div className="w-1/3 p-4">
                    <h2 className="text-4xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={25} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </h2>
                    <p className="leading-relaxed">Volunteers</p>
                  </div>
                  <div className="w-1/3 p-4">
                    <h2 className="text-4xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={25} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </h2>
                    <p className="leading-relaxed">Courses Taught</p>
                  </div>
                </div>
              </div>
            </section>
            <div className="mt-6 ml-6 text-center">
              <Link href="/about">
                <a
                  className="inline-flex items-center py-3 mb-8 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent rounded px-7 bg-gradient-to-r from-blue-500 to-blue-800 text-md md:mt-0 focus:shadow-outline"
                  aria-label="learn more"
                >
                  <div className="flex text-lg">
                    <span className="justify-center">Learn More</span>
                  </div>
                </a>
              </Link>
              <br className="sm:hidden" />
              <a
                className="inline-flex items-center py-3 font-semibold text-white transition duration-500 ease-in-out transform bg-transparent bg-black rounded px-7 lg:ml-11 md:ml-11 text-md md:mt-0 hover:text-white hover:bg-black focus:shadow-outline"
                aria-label="donate"
                href="https://donorbox.org/project-envision"
              >
                <div className="flex text-lg">
                  <span className="justify-center">Donate</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="w-1/2 lg:w-1/3 h-0.5 rounded-full bg-black inline-flex"></div>
        </div>
        <Mission />
        <Testimony />
        <Programs />
        <Sponsors />
        <Subscribe />
        <section id="volunteer" className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="text-center">
              <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
                Volunteer
              </span>
              <h2 className="mb-4 text-3xl font-medium text-black md:text-5xl lg:text-5xl">
                Interested in Volunteering?
              </h2>
              <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
                Project enVision is looking for committed and talented students
                willing to devote their time towards helping us make a
                difference. Students can earn volunteer hours for their time and
                efforts.
              </p>
              <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 mb-5 bg-black rounded-full"></div>
              </div>
            </div>
            <Volunteer />
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
