import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { NextSeo } from 'next-seo';

const events = [
  {
    name: 'Project enVision Cloud Computing',
    blurb:
      'Project enVision U.S. is joining the EVHS Cloud Computing Club to host a free cloud computing lessons this winter holidays.',
    dates: 'TBA',
    subject: 'TBA',
    location: 'Both in-person & online!',
    instructors: 'Parth Paliwal, Amaan Mahammad, Mihir Shevade',
    about: (
      <p>
        We will be covering the basics of cloud computing by exploring the AWS
        Educate Program and cover some hands-on practice.
        <br />
        <br />
        <strong>What is the "Cloud"?</strong>
        <br />
        <br />
        Ever wonder how large companies such as Apple and Microsoft are able to
        keep their websites running with millions of users. Since the
        traditional ways of buying data centers are becoming costly for both
        companies and the regular people, the cloud is becoming their home.
        Cloud computing is a simple way to host an application by simply renting
        services for much more affordable costs. It consists of Servers,
        Databases, Storages, Firewalls, DNS, Analytics, and many other
        interesting and useful services. Cloud computing is used in a lot of
        professions other than CS such as business, healthcare, teaching,
        accounting, law, etc.
      </p>
    ),
    link:
      'https://docs.google.com/forms/d/e/1FAIpQLSeuki5lC-ZJD2BnBXHHO530AZ9qMfWCjT09bZrGJaGH7E5J_w/viewform?usp=sf_link',
    filename: 'n/a',
    filepath: ''
  },
  {
    name: 'Speech and Debate Camp',
    blurb:
      'Project enVision U.S. will be hosting a free speech and debate camp this holiday break from December 27th to December 30th.',
    dates: 'Monday, December 27 - Thursday, December 30 (4 days)',
    subject: 'Speech/Debate',
    location: 'Online!',
    instructors: 'Saurish Srivastava, Rikin Ladwa, Srikar Eranky',
    about:
      'We will be covering the basics of good research skills, good public speaking skills (ethos, pathos, & logos), argumentation (claim, warrant, impact), and Lincoln-Douglas Debate. Please note that although this camp delves into Lincoln Douglas, the skills learned can be utilized in other debate events, and in quotidian life.',
    link:
      'https://docs.google.com/forms/d/e/1FAIpQLSciawW4EE1vrG_IRr4kHXbvju9csHCOGIngy7rdARqGu77KJg/viewform',
    filename: 'n/a',
    filepath: ''
  }
];

export default function Events() {
  return (
    <div className="max-h-full text-black">
      <NextSeo
        title="Events | Project enVision U.S."
        description="Find out the events that we're hosting – constantly updated!"
        canonical="https://envisionnew.org/events"
        openGraph={{
          url: 'https://envisionnew.org/events/',
          title: 'Events | Project enVision U.S.',
          description:
            "Find out the events that we're hosting – constantly updated!",
          site_name: 'Project enVision U.S.'
        }}
        twitter={{
          handle: '@envisionnew',
          site: '@envisionnew',
          cardType: 'summary_large_image'
        }}
      />
      <Head>
        <title>Events | Project enVision</title>
      </Head>
      <Header />
      <section className="relative max-w-5xl mx-auto text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-16 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-6 text-6xl font-semibold text-black title-font">
              Our Events
            </h1>
            <p className="mx-auto text-base text-xl font-normal leading-relaxed text-gray-900 lg:w-2/3">
              Find out the events running at Project enVision U.S. to get
              involved! This page is constantly updated when there are new
              events.
            </p>
          </div>
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
                    <dt className="text-sm font-medium text-gray-500">Dates</dt>
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
                      Instructors
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {event.instructors}
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
                          className="px-3 py-3 text-sm font-medium text-indigo-600 border border-gray-200 rounded-md hover:text-indigo-500"
                        >
                          Sign Up Link
                        </button>
                      </a>
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Syllabus
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul className="border border-gray-200 divide-y divide-gray-200 rounded-md">
                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                          <div className="flex items-center flex-1 w-0">
                            <span className="flex-1 w-0 ml-2 truncate">
                              {event.filename}
                            </span>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            <a
                              href={event.filepath}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              target="_blank"
                              download
                            >
                              Download
                            </a>
                          </div>
                          <span className="h-5 ml-4 border-l-2 border-indigo-500" />
                          <div className="flex-shrink-0 ml-4">
                            <a
                              href={event.filepath}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              View
                            </a>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
