import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const advisors = [
  {
    name: 'Saurish Srivastava',
    website: 'https://saurish.com',
    image: 'saurish.jpeg',
    bio: 'President @ Project enVision U.S.'
  },
  {
    name: 'Parth Paliwal',
    website: 'https://www.instagram.com/parthpaliwalofficial/',
    image: 'parth.jpeg',
    bio: 'Director of CS @ Project enVision U.S.'
  }
];

const events = [
  {
    name: 'An Introductory Event',
    blurb: 'Get to know us, our vision, and how we can help you.',
    dates: 'TBA',
    subject: 'Introduction',
    location: 'Online [Zoom]',
    about: 'TBA',
    link: '#'
  }
];

const volunteers = [
  {
    name: 'Kshitij Teotia',
    position: 'Director of Project Lotus',
    website: 'https://instagram.com/kshitij.teotia',
    image: 'kshitij.jpeg',
    bio: 'Sophomore at Evergreen Valley HS'
  },
  {
    name: 'Shuchir Harsha',
    position: 'Director of Project Lotus',
    website: 'https://instagram.com/shuchirh',
    image: 'shuchir.jpeg',
    bio: 'Junior at Evergreen Valley HS'
  },
  {
    name: 'Nitish Omprakash',
    position: 'Volunteer',
    image: 'nitish.jpeg',
    bio: 'Sophomore at Evergreen Valley HS'
  },
  {
    name: 'Sanjith Raman',
    position: 'Volunteer',
    image: 'sanjith.jpeg',
    bio: 'Sophomore at Evergreen Valley HS'
  }
];

export default function ProjectCarbon() {
  return (
    <div className="max-h-full text-black">
      <NextSeo
        title="Project Carbon | Project enVision U.S."
        description="Fighting Climate Change With Computer Science"
        canonical="https://envisionnew.org/programs/carbon/"
        openGraph={{
          url: 'https://envisionnew.org/programs/carbon/',
          title: 'Project Carbon | Project enVision U.S.',
          description:
            'Project Carbon uses computer science concepts and ideals to accurately visualize, research, and educate others on climate change related topics plaguing the world.',
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
      <section class="text-gray-600 body-font bg-gradient-to-r from-fuchsia-200 via-green-200 to-rose-200 animate-gradient-x">
        <div class="max-w-5xl pt-52 pb-40 mx-auto">
          <h1 class="max-w-xl px-4 mx-auto mt-8 text-3xl md:text-6xl font-black text-center leading-tight text-gray-800">
            Fighting{' '}
            <div className="relative inline-block">
              <span className="relative z-10">Climate</span>
              <div className="absolute bottom-0 left-0 right-0 h-4 md:left-7">
                <img
                  className="-mt-0.5 md:-mt-3"
                  src="https://blogody.com/img/marker-pink.png"
                />
              </div>
            </div>{' '}
            <div className="relative inline-block">
              <span className="relative z-10">Change</span>
              <div className="absolute bottom-0 left-0 right-0 h-4 md:left-7">
                <img
                  className="-mt-0.5 md:-mt-3"
                  src="https://blogody.com/img/marker-pink.png"
                />
              </div>
            </div>{' '}
            With Computer Science.
          </h1>
          <h2 class="md:text-2xl text-xl mx-4 font-4 title-font mt-12 pb-12 text-gray-700 text-center">
            Project Carbon uses <br className="hidden md:block" />
            <span className="italic">computer science concepts</span> and ideals
            to accurately visualize,
            <br className="hidden md:block" /> research, and educate others on
            climate change related topics
            <br className="hidden md:block" /> plaguing the world.
          </h2>
          <div className="text-center">
            <Link href="#learn-more">
              <a className="inline-block px-5 py-4 mt-8 text-sm font-semibold tracking-wider text-white uppercase bg-gray-800 rounded-md shadow focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-600">
                Check it out
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="learn-more" class="mt-12 mb-20 text-black body-font">
        <div className="container px-5 mx-auto mb-6">
          <div className="mb-8 text-center">
            <br />
            <br />
            <br />
            <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
              Vision
            </span>
            <h2 className="mb-4 text-3xl font-semibold tracking-normal text-black sm:text-5xl sm:leading-none md:leading-tight">
              Our Mission
            </h2>
            <p className="mx-auto text-base text-xl leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4">
              According to the United Nations, global temperatures are likely to
              rise 1.5 degrees celsius in the next 2 decades. Project Carbon is
              fighting to combat this problem and others like it through
              visualizing climate change and{' '}
              <span className="font-semibold">environmental data.</span>{' '}
              Moreover, Project Carbon is working on deeply researching
              different problems that affect the environment along with
              partnering with specialists to analyze and draw conclusions about
              data.
            </p>
            <div className="flex justify-center mt-6">
              <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <br />
        <p className="mx-4 text-xl font-normal leading-relaxed text-center text-black md:mx-auto lg:w-2/5">
          Project Carbon additionally hopes to educate the community regarding
          different issues that are{' '}
          <span className="font-semibold">under the radar</span> and not picked
          up by mainstream media. Moreover, it hopes to reach out to a{' '}
          <span className="font-semibold">young audience</span> who are
          interested in making efforts to save the planet and give them a chance
          to help.
        </p>
      </section>
      <section id="impact" class="mt-12 mb-12 text-black body-font">
        <div className="container px-5 mx-auto mb-6">
          <div className="mb-8 text-center">
            <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
              Impact
            </span>
            <h2 className="mb-4 text-3xl font-semibold tracking-normal text-black sm:text-5xl sm:leading-none md:leading-tight">
              Our impact – in numbers
            </h2>
            <p className="mx-auto text-base text-xl leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4">
              And we're just getting started.
            </p>
            <div className="flex justify-center mt-6">
              <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <br />
        <p className="mx-4 text-xl font-normal leading-relaxed text-center text-black md:mx-auto lg:w-2/5">
          <span className="font-bold">Note: </span>our work has not begun yet.
        </p>
        <div className="pb-12 mt-10 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2" />
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-4 text-lg font-medium leading-6 text-gray-500">
                      People Impacted
                    </dt>
                    <dd className="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-violet-500 to-orange-600">
                      10
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-4 text-lg font-medium leading-6 text-gray-500">
                      Volunteers
                    </dt>
                    <dd className="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-violet-500 to-orange-600">
                      5
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-4 text-lg font-medium leading-6 text-gray-500">
                      Mentors
                    </dt>
                    <dd className="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-violet-500 to-orange-600">
                      2
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
              Check out our future events and how you can get involved.
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
                        src={`/images/volunteers/${volunteer.image}`}
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
                        src={`/images/volunteers/${advisor.image}`}
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
