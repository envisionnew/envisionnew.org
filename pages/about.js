import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const advisors = [
  {
    name: 'Rushil Srivastava',
    website: 'https:rushilsrivastava.com',
    image: 'rushil.jpeg',
    bio: 'Co-Founder at Simplify; University of California, Berkeley'
  }
];

const volunteers = [
  {
    name: 'Saurish Srivastava',
    position: 'President & Executive Director',
    website: 'https://saurish.com',
    image: 'saurish.JPG'
  },
  {
    name: 'Varun Bommaji',
    position: 'Secretary',
    image: 'varun.jpeg'
  },
  {
    name: 'Vikram Dhillon',
    position: 'Director of Tutoring',
    image: 'vikram.jpg'
  },
  {
    name: 'Parth Paliwal',
    position: 'Director of Computer Science',
    image: 'parth.jpeg'
  },
  {
    name: 'Garima Upadhyay',
    position: 'Director of Marketing',
    image: 'garima.jpg'
  },
  {
    name: 'Amaya Khan',
    position: 'Director of Public Relations',
    image: 'amaya.jpeg'
  },
  {
    name: 'Ankit Kapoor',
    position: 'Director of Outreach',
    image: 'ankit.jpeg'
  },
  {
    name: 'Ayush Agarwal',
    position: 'Director of Debate',
    image: 'ayush-2.jpeg'
  },
  {
    name: 'Rishi Singh',
    position: 'Director of Robotics',
    image: 'rishi.jpeg'
  },
  {
    name: 'Aditi Umapathy',
    position: 'Georgia Chapter Lead',
    image: 'aditi.jpeg'
  }
];

const information = [
  {
    name: 'Mission',
    description:
      'Our mission is to build a connected community by facilitating learning and, while targetting accessibility and bonding. Our volunteers are commited to this mission and strengthening our community, together.',
    index: true,
    image: '/about/mission.jpg'
  },
  {
    name: 'COVID-19 Response',
    description:
      'Since March, Project enVision U.S. has actively been engaging with underprivileged communites and helping the transition from in-person to distanced learning. Project enVision: Learn and Tutoring have moved online, and schedules of these programs can be viewed on our programs section.',
    index: false,
    image: '/about/covid.jpg'
  },
  {
    name: 'History',
    description:
      'Project enVision U.S. was founded in 2015 and since then, has been providing volunteer and educational services to young people everywhere. Our programs and entities have positively impacted hundreds of kids and strengthened our community. These programs can be viewed on our programs section.',
    index: true,
    image: '/about/history.jpg'
  }
];

export default function About() {
  return (
    <div className="max-h-full text-black bg-white">
      <NextSeo
        title="About | Project enVision U.S."
        description="Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere."
        canonical="https://envisionnew.org/about/"
        openGraph={{
          url: 'https://envisionnew.org/about/',
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
        <title>About | Project enVision</title>
      </Head>
      <Header />
      <section id="about" className="relative text-gray-600 body-font">
        <section id="features" className="py-12">
          <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
            <div className="text-center">
              <h2 className="mt-12 mb-8 text-3xl font-semibold tracking-normal text-black sm:text-5xl sm:leading-none md:leading-tight">
                We're building a <span className="underline">community</span>.
              </h2>
            </div>
            <p className="max-w-xl mx-auto mb-10 text-xl text-gray-600 md:text-2xl">
              Project enVision has been a leading PVSA certifying 501(c)(3)
              non-profit organization since 2015. By creating relationships with
              students, schools, and local politicians, through different
              programs, we envision a community where learning is free and
              accessible.
            </p>
          </div>
          <div className="max-w-xl px-4 pb-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
            {information.map((category) => (
              <div className="flex flex-wrap mb-8 md:justify-between md:items-center">
                <div
                  className={
                    category.index
                      ? 'w-full rounded shadow-xl md:w-6/12'
                      : 'w-full rounded shadow-xl md:w-6/12 md:order-1'
                  }
                >
                  <img
                    alt={`${category.name} banner`}
                    src={category.image}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full mx-1 mt-8 mb-1 space-y-3 overflow-auto sm:mt-3 md:w-5/12">
                  <h2 className="mb-5 text-2xl font-semibold text-center text-gray-800 sm:text-left md:text-4xl">
                    {category.name}
                  </h2>
                  <p className="text-lg prose">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="team" className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="mb-20 text-center">
              <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
                Team
              </span>
              <h2 className="mb-4 text-3xl font-semibold tracking-normal text-black sm:text-5xl sm:leading-none md:leading-tight">
                Meet the Team
              </h2>
              <p className="mx-auto text-base text-xl leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4">
                Our team consists of members all across the nation. These
                volunteers help make the events at Project enVision possible.
              </p>
              <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
              </div>
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {volunteers.map((volunteer) => (
                    <div className="p-4 lg:w-1/4 md:w-1/2">
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
                          <h3 className="mb-3 text-gray-600">
                            {volunteer.position}
                          </h3>
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
                These are the people that overlook the organization and ensure
                that our activities are making a profound impact.
              </p>
              <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
              </div>
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {advisors.map((advisor) => (
                    <div className="p-4 lg:w-1/4 md:w-1/2">
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
        <section id="faq" className="px-4 py-5 sm:py-20">
          <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
            <div className="pb-20 mx-auto max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
                <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
                  FAQ
                </span>
                <h2 className="mb-4 text-3xl font-semibold tracking-normal text-black sm:text-5xl sm:leading-none md:leading-tight">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto text-base text-xl leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4">
                  Let us help answer the most common questions you might have.
                </p>
                <div className="flex justify-center mt-6">
                  <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
            <dl className="space-y-10 text-base lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
              <div>
                <dt>
                  <span className="flex items-center justify-center w-8 h-8 font-medium text-pink-700 bg-pink-100 rounded-full">
                    1
                  </span>
                  <p className="mt-5 font-medium leading-6 text-gray-900">
                    What positions are available and where can I help?
                  </p>
                </dt>
                <dd className="mt-2 text-gray-600">
                  In order of priority, we are currently looking for volunteers
                  who can help out in the following fields/positions: Research,
                  Debate, Tutoring, Learn, Chapters, and Inspire.
                </dd>
              </div>
              <div>
                <dt>
                  <span className="flex items-center justify-center w-8 h-8 font-medium text-pink-700 bg-pink-100 rounded-full">
                    2
                  </span>
                  <p className="mt-5 font-medium leading-6 text-gray-900">
                    I'm not located in San Jose – how can I help?
                  </p>
                </dt>
                <dd className="mt-2 text-gray-600">
                  Not a problem! First check if there is a{' '}
                  <Link href="/programs/chapters">
                    <a className="text-blue-600 hover:underline hover:text-blue-800 visited:text-purple-600">
                      chapter
                    </a>
                  </Link>{' '}
                  located in your area/region. If there is, please reach out to
                  the chapter lead to see how you can help out. If not, Saurish
                  will schedule a call with you to discuss places where your
                  skills can be utilized remotely!
                </dd>
              </div>
              <div>
                <dt>
                  <span className="flex items-center justify-center w-8 h-8 font-medium text-pink-700 bg-pink-100 rounded-full">
                    3
                  </span>
                  <p className="mt-5 font-medium leading-6 text-gray-900">
                    What's the time commitment as a volunteer?
                  </p>
                </dt>
                <dd className="mt-2 text-gray-600">
                  We recommend at least 2 hours a week, although this number can
                  vary based on your <span className="font-semibold">role</span>{' '}
                  in the organization.
                </dd>
              </div>
              <div>
                <dt>
                  <span className="flex items-center justify-center w-8 h-8 font-medium text-pink-700 bg-pink-100 rounded-full">
                    4
                  </span>
                  <p className="mt-5 font-medium leading-6 text-gray-900">
                    What happens after I apply?
                  </p>
                </dt>
                <dd className="mt-2 text-gray-600">
                  Once you have applied to be a volunteer/tutor, one of the
                  executive directors will reach out to you & set up a meeting.
                  In this call (hosted over Zoom/Discord), we will ask questions
                  about your application and your role in Project enVision U.S.
                  We will let you know our decisions immediately.
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </section>
      <br />
      <Footer />
    </div>
  );
}
