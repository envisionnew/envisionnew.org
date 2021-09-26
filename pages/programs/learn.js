import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

const events = [
  {
    name: 'Introduction to Python',
    blurb: 'An introductory course into the realm of Python.',
    dates: 'TBA',
    subject: 'CS',
    location: 'Online',
    instructor: 'TBA',
    link: '#'
  },
  {
    name: 'Introduction to C',
    blurb: 'An introductory course into C.',
    dates: 'TBA',
    subject: 'CS',
    location: 'Online',
    instructor: 'TBA',
    link: '#'
  },
  {
    name: 'Introduction to Java',
    blurb: 'An introductory course into Java.',
    dates: 'TBA',
    subject: 'CS',
    location: 'Online',
    instructor: 'TBA',
    link: '#'
  },
  {
    name: 'Introduction to Web Development',
    blurb: 'An introductory course into web development and new technologies.',
    dates: 'TBA',
    subject: 'CS',
    location: 'Online',
    instructor: 'TBA',
    link: '#'
  },
  {
    name: 'Robotics: EV3',
    blurb: 'Learning instructor Lego EV3 robotics and programming.',
    dates: 'TBA',
    subject: 'Robotics',
    location: 'Online',
    instructor: 'TBA',
    link: '#'
  },
  {
    name: 'Introduction to Lincoln Douglas Debate',
    blurb: 'An introductory course into Lincoln Douglas Debate.',
    dates: 'TBA',
    subject: 'Debate',
    location: 'Online',
    instructor: 'TBA',
    link: '#'
  }
];

export default function ProjectLearn() {
  return (
    <div className="max-h-full text-black">
      <NextSeo
        title="Project Learn | Project enVision U.S."
        description="Project Learn consists of a variety of FREE courses and classes taught by high-schoolers and college students."
        canonical="https://envisionnew.org/programs/learn/"
        openGraph={{
          url: 'https://envisionnew.org/programs/chapters/',
          title: 'Project Learn | Project enVision U.S.',
          description:
            'Project Learn consists of a variety of FREE courses and classes taught by high-schoolers and college students.',
          site_name: 'Project enVision U.S.'
        }}
        twitter={{
          handle: '@envisionnew',
          site: '@envisionnew',
          cardType: 'summary_large_image'
        }}
      />
      <Head>
        <title>Project Learn | Project enVision</title>
      </Head>
      <Header />
      <section class="text-gray-600 body-font bg-gradient-to-r from-rose-200 via-violet-100 to-orange-200 animate-gradient-x">
        <div class="max-w-5xl pt-52 pb-40 mx-auto">
          <h1 class="max-w-xl px-4 mx-auto mt-8 text-3xl md:text-6xl font-black text-center leading-tight text-gray-800">
            Learning done
            <div className="relative inline-block">
              <span className="relative z-10">right</span>
              <div className="absolute bottom-0 left-0 right-0 h-4">
                <img
                  className="-mt-0.5 md:-mt-3"
                  src="https://blogody.com/img/marker-pink.png"
                />
              </div>
            </div>
            .
          </h1>
          <h2 class="md:text-2xl max-w-xl mx-auto text-xl mx-4 font-4 title-font mt-12 pb-12 text-gray-700 text-center">
            Project Learn consists of a variety of{' '}
            <span className="font-semibold">free</span> courses and classes
            taught by high-schoolers and college students. Sign up for courses
            in STEM and a variety of other fields with{' '}
            <span className="font-semibold">zero cost</span>!
          </h2>
          <div className="text-center">
            <Link href="#courses">
              <a className="inline-block px-5 py-4 mt-2 mt-16 text-sm font-semibold tracking-wider text-white uppercase bg-gray-800 rounded-md shadow focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-600">
                View courses
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="courses" class="mt-12 mb-12 text-black body-font">
        <div className="container px-5 mx-auto mb-6">
          <div className="mb-8 text-center">
            <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
              Courses
            </span>
            <h2 className="mb-4 text-3xl font-semibold tracking-normal text-black sm:text-5xl sm:leading-none md:leading-tight">
              Offered Courses
            </h2>
            <p className="mx-auto text-base text-xl leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4">
              We teach a variety of different subjects and topics, ranging from
              STEM to speech & debate.
            </p>
            <div className="flex justify-center mt-6">
              <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <br />
        <div className="max-w-2xl mx-auto">
          {events.map((event) => (
            <div className="mb-10 overflow-hidden bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {event.name}
                </h3>
                <p className="max-w-2xl mt-1 text-sm text-gray-500">
                  {event.blurb}
                </p>
              </div>
              <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Date/Time
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {event.dates}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Subject
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {event.subject}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {event.location}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Instructor
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {event.instructor}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Sign Up
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <a href={event.link}>
                        <button
                          aria-label="sign up link"
                          className="px-3 py-3 text-sm font-medium text-purple-500 border border-gray-200 rounded-md hover:text-indigo-500"
                        >
                          Sign Up Link
                        </button>
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="past-classes" class="mt-12 mb-12 text-black body-font">
        <div className="container px-5 mx-auto mb-6">
          <div className="mb-8 text-center">
            <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
              Past Classes
            </span>
            <h2 className="mb-4 text-3xl font-semibold tracking-normal text-black sm:text-5xl sm:leading-none md:leading-tight">
              Our past classes
            </h2>
            <p className="mx-auto text-base text-xl leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4">
              View some of our past classes that took place over Zoom.
            </p>
            <div className="flex justify-center mt-6">
              <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <br />
        <div className="grid gap-8 lg:mx-auto lg:max-w-7xl lg:grid-cols-2">
          <div className="duration-150 bg-white hover:shadow-3xl rounded-xl">
            <div className="relative w-full m-0">
              <Image
                src={`/learn/img/class1.png`}
                width="1920"
                height="1080"
                alt="Introduction to Java Course"
                layout="responsive"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-5 text-2xl font-bold text-center text-black title-font">
                <span
                  className="px-2 py-1 rounded-lg"
                  style={{ backgroundColor: '#0af5f4' }}
                >
                  Introduction to Java
                </span>
              </h3>
              <p className="mb-2 text-lg">
                An image of instructor Parth Paliwal teaching his Java course.
              </p>
            </div>
          </div>
          <div className="duration-150 bg-white hover:shadow-3xl rounded-xl">
            <div className="relative w-full m-0">
              <Image
                src={`/learn/img/class2.png`}
                width="1680"
                height="1010"
                alt="Introduction to C Course"
                layout="responsive"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-5 text-2xl font-bold text-center text-black title-font">
                <span
                  className="px-2 py-1 rounded-lg"
                  style={{ backgroundColor: '#0af5f4' }}
                >
                  Introduction to C
                </span>
              </h3>
              <p className="mb-2 text-lg">
                An image of instructors Garima Upadhya and Praneet Joshi
                teaching their C course.
              </p>
            </div>
          </div>
          <div className="duration-150 bg-white hover:shadow-3xl rounded-xl">
            <div className="relative w-full m-0">
              <Image
                src={`/learn/img/class3.jpg`}
                width="2548"
                height="1373"
                alt="Introduction to Web Development Course"
                layout="responsive"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-5 text-2xl font-bold text-center text-black title-font">
                <span
                  className="px-2 py-1 rounded-lg"
                  style={{ backgroundColor: '#0af5f4' }}
                >
                  Introduction to Web Development
                </span>
              </h3>
              <p className="mb-2 text-lg">
                An image of instructor Saurish Srivastava teaching his Web
                Development course.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
