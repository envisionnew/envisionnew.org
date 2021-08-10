import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const people = [
  {
    name: 'Saurish Srivastava',
    state: 'California',
    region: 'San Jose',
    status: true,
    role: 'Lead',
    email: 'saurish@envisionnew.org',
    apply: false,
    link: '#',
    image: '/images/saurish_profile.JPG'
  },
  {
    name: 'Aditi Umapathy',
    state: 'Georgia',
    region: 'Augusta',
    status: true,
    role: 'Lead',
    email: 'aditi.umapathy@envisionnew.org',
    apply: false,
    link: '/programs/chapters/augusta',
    image: '/images/aditi_profile.jpeg'
  },
  {
    name: 'Want to see your name here? ',
    state: 'Your State',
    region: 'Your City',
    status: false,
    role: 'Lead',
    email: 'your.name@envisionnew.org',
    apply: true,
    link: 'https://psyw68ikrb1.typeform.com/to/mJjeHhlq',
    image:
      'data:image/png;base64,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'
  }
];

const advisors = [
  {
    name: '',
    website: '',
    image: '',
    bio: ''
  }
];

const events = [
  {
    name: 'Name of Event',
    blurb: 'Short one-two line blurb of event.',
    dates: 'Dates/Time',
    subject: 'Subject (i.e. parent outreach, student meeting, etc.)',
    location: 'Location (online)',
    about: 'About the event.',
    link: 'signuplink'
  },
  {
    name: 'Name of Event',
    blurb: 'Short one-two line blurb of event.',
    dates: 'Dates/Time',
    subject: 'Subject (i.e. parent outreach, student meeting, etc.)',
    location: 'Location (online)',
    about: 'About the event.',
    link: 'signuplink'
  }
];

const volunteers = [
  {
    name: 'Alessia Seroff',
    position: 'Director of Project Lotus',
    website: 'https://www.linkedin.com/in/alessia-seroff-a15bb7177/',
    image: 'alessia.jpeg',
    bio: 'Senior at New York University'
  },
  {
    name: 'Saurish Srivastava',
    position: 'Volunteer',
    website: 'https://saurish.com',
    image: 'saurish.JPG',
    bio: 'Junior at Evergreen Valley High School'
  }
];

export default function ProjectLotus() {
  return (
    <div className="max-h-full text-black">
      <NextSeo
        title="Project Lotus | Project enVision U.S."
        description="Project Lotus is a support group for individuals who have experienced trauma."
        canonical="https://envisionnew.org/programs/chapters/"
        openGraph={{
          url: 'https://envisionnew.org/programs/chapters/',
          title: 'Project Lotus | Project enVision U.S.',
          description:
            'Project Lotus is a support group for individuals who have experienced trauma.',
          site_name: 'Project enVision U.S.'
        }}
        twitter={{
          handle: '@envisionnew',
          site: '@envisionnew',
          cardType: 'summary_large_image'
        }}
      />
      <Head>
        <title>Project Lotus | Project enVision</title>
      </Head>
      <Header />
      <section class="text-gray-600 body-font bg-gradient-to-r from-rose-200 via-violet-100 to-orange-200 animate-gradient-x">
        <div class="max-w-5xl pt-52 pb-40 mx-auto">
          <h1 class="max-w-xl px-4 mx-auto mt-8 text-3xl md:text-6xl font-black text-center leading-tight text-gray-800">
            A{' '}
            <div className="relative inline-block">
              <span className="relative z-10">support</span>
              <div className="absolute bottom-0 left-0 right-0 h-4 md:left-7">
                <img
                  className="-mt-0.5 md:-mt-3"
                  src="https://blogody.com/img/marker-pink.png"
                />
              </div>
            </div>{' '}
            group for individuals with trauma.
          </h1>
          <h2 class="md:text-2xl text-xl mx-4 font-4 title-font mt-12 pb-12 text-gray-700 text-center">
            Project Lotus is a targeted at creating a{' '}
            <br className="hidden md:block" />
            <span className="underline">national support group</span> for
            teenagers with
            <br className="hidden md:block" />
            traumatic experiences, while striving
            <br className="hidden md:block" />
            to <span className="underline">educate</span> the general public.
          </h2>
          <div className="text-center">
            <Link href="#learn-more">
              <a className="inline-block px-5 py-4 mt-2 mt-16 text-sm font-semibold tracking-wider text-white uppercase bg-gray-800 rounded-md shadow focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-600">
                Find out more
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="learn-more" class="mt-12 mb-12 text-black body-font">
        <div className="container px-5 mx-auto mb-6">
          <div className="mb-8 text-center">
            <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
              Vision
            </span>
            <h2 className="mb-4 text-3xl font-semibold tracking-normal text-black sm:text-5xl sm:leading-none md:leading-tight">
              Our Vision.
            </h2>
            <p className="mx-auto text-base text-xl leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4">
              Visionistic stuff in a one-liner.
            </p>
            <div className="flex justify-center mt-6">
              <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <br />
        <p className="mx-4 text-xl font-normal leading-relaxed text-center text-black md:mx-auto lg:w-2/5">
          Longer, more-paragraphy visionistic stuff (see{' '}
          <Link href="/about">
            <a className="text-blue-600 underline">here</a>
          </Link>{' '}
          for more info)
        </p>
      </section>
      <section id="impact" class="mt-12 mb-12 text-black body-font">
        <div className="container px-5 mx-auto mb-6">
          <div className="mb-8 text-center">
            <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
              Impact
            </span>
            <h2 className="mb-4 text-3xl font-semibold tracking-normal text-black sm:text-5xl sm:leading-none md:leading-tight">
              Our impact – in numbers.
            </h2>
            <p className="mx-auto text-base text-xl leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4">
              Our impact comes from our events. [placeholder]
            </p>
            <div className="flex justify-center mt-6">
              <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <br />
        <p className="mx-4 text-xl font-normal leading-relaxed text-center text-black md:mx-auto lg:w-2/5">
          some brief info abt the numbers ig (more for ethos so ppl don't
          dismiss this)
        </p>
        <div className="pb-12 mt-10 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2" />
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-4 text-lg font-medium leading-6 text-gray-500">
                      Meetings Held
                    </dt>
                    <dd className="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-violet-500 to-orange-600">
                      [?]
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-4 text-lg font-medium leading-6 text-gray-500">
                      People Impacted
                    </dt>
                    <dd className="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-violet-500 to-orange-600">
                      [?]
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-4 text-lg font-medium leading-6 text-gray-500">
                      Communities Reached
                    </dt>
                    <dd className="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-violet-500 to-orange-600">
                      [?]
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="events" class="mt-12 mb-12 text-black body-font">
        <div className="container px-5 mx-auto mb-6">
          <div className="mb-8 text-center">
            <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
              Events
            </span>
            <h2 className="mb-4 text-3xl font-semibold tracking-normal text-black sm:text-5xl sm:leading-none md:leading-tight">
              Our events.
            </h2>
            <p className="mx-auto text-base text-xl leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4">
              Our events are crucial for Project Lotus. [placeholder]
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
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {event.about}
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
      <section id="team" className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="mb-20 text-center">
            <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
              Volunteers
            </span>
            <h2 className="mb-4 text-3xl font-semibold tracking-normal text-black sm:text-5xl sm:leading-none md:leading-tight">
              Meet our Volunteers
            </h2>
            <p className="mx-auto text-base text-xl leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4">
              The team consists of members in high school and college.
            </p>
            <div className="flex justify-center mt-6">
              <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
            </div>
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap -m-4">
                {volunteers.map((volunteer) => (
                  <div className="p-4 lg:w-1/4 md:w-1/2" key={volunteer}>
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt={`Image of ${volunteer.name}`}
                        className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg h-80"
                        src={`/images/${volunteer.image}`}
                      />
                      <div className="w-full">
                        {volunteer.website ? (
                          <a
                            className="underline hover:text-gray-300"
                            href={volunteer.website}
                          >
                            <h2 className="text-lg font-medium text-black title-font">
                              {volunteer.name}
                            </h2>
                          </a>
                        ) : (
                          <h2 className="text-lg font-medium text-black title-font">
                            {volunteer.name}
                          </h2>
                        )}
                        <h3 className="mb-1 text-gray-600">
                          {volunteer.position}
                        </h3>
                        <h3 className="mb-3 text-gray-400">{volunteer.bio}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="mb-4 text-2xl font-semibold tracking-normal text-black sm:text-4xl sm:leading-none md:leading-tight">
              Our Advisors
            </h2>
            <p className="mx-auto text-base text-xl leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4">
              These are the people that overlook our work and ensure that our
              activities are making a profound impact.
            </p>
            <div className="flex justify-center mt-6">
              <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
            </div>
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap -m-4">
                {advisors.map((advisor) => (
                  <div className="p-4 lg:w-1/4 md:w-1/2" key={advisor}>
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt={`Image of ${advisor.name}`}
                        className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg h-80"
                        src={`/images/${advisor.image}`}
                      />
                      <div className="w-full">
                        {advisor.website ? (
                          <a
                            className="underline hover:text-gray-300"
                            href={advisor.website}
                          >
                            <h2 className="text-lg font-medium text-black title-font">
                              {advisor.name}
                            </h2>
                          </a>
                        ) : (
                          <h2 className="text-lg font-medium text-black title-font">
                            {advisor.name}
                          </h2>
                        )}
                        <h3 className="mb-3 text-gray-600">{advisor.bio}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
