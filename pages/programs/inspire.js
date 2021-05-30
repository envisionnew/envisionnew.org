import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

const Highlight = styled.span`
  background-color: #0af5f4;
`;

const programs = [
  {
    name: '501(c)(3) Status',
    availability: 'Available',
    unavailability: 'Unvailable'
  },
  {
    name: 'Funding Support',
    availability: 'Available',
    unavailability: 'Unvailable'
  },
  {
    name: 'Marketing Help',
    availability: 'Available',
    unavailability: 'Unvailable'
  },
  {
    name: 'Website Domain + Host',
    availability: 'Available',
    unavailability: 'Unvailable'
  },
  {
    name: 'Access to Sponsorship Credits',
    availability: 'Available',
    unavailability: 'Unvailable'
  },
  {
    name: 'Management Platform',
    availability: 'Available',
    unavailability: 'Unvailable'
  },
  {
    name: 'Cost',
    availability: 'Free',
    unavailability: '25% of revenues'
  }
];

export default function Inspire() {
  return (
    <div className="max-h-full text-black">
      <NextSeo
        title="Inspire | Project enVision U.S."
        description="Get free and accessible help to start your own non-profit."
        canonical="https://envisionnew.org/programs/inspire/"
        openGraph={{
          url: 'https://envisionnew.org/programs/inspire/',
          title: 'Inspire | Project enVision U.S.',
          description:
            'Get free and accessible help to start your own non-profit.',
          site_name: 'Project enVision U.S.'
        }}
      />
      <Head>
        <title>Inspire | Project enVision</title>
      </Head>
      <Header />
      <section class="text-gray-600 body-font bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 animate-gradient-x">
        <div class="max-w-5xl pt-52 pb-40 mx-auto">
          <h1 class="text-80 text-center leading-tight font-bold title-font text-black mb-10">
            Create the next big thing.
          </h1>
          <h2 class="text-2xl mx-4 font-4 title-font pb-11 text-gray-700 text-center">
            Project enVision Inspire is dedicated to supporting
            <br />
            grassroot organizations to make an{' '}
            <span className="underline">impact</span>.
          </h2>
          <div className="text-center">
            <a
              className="inline-flex items-center py-3 font-semibold text-black rounded hover:from-lightBlue-200 hover:to-lightBlue-400 bg-gradient-to-r from-purple-200 to-purple-400 px-7 text-md md:mt-0"
              href="https://psyw68ikrb1.typeform.com/to/g4Mo6yxb"
            >
              <div className="flex text-lg">
                <span className="justify-center">Get Started</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-5xl pt-20 pb-24 mx-auto">
        <div className="container px-5 mx-auto mb-16">
          <div className="mb-8 text-center">
            <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
              Choice
            </span>
            <h2 className="mb-4 text-3xl font-medium text-black md:text-5xl lg:text-5xl">
              Why choose Project enVision?
            </h2>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Program
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Project enVision U.S.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Others
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {programs.map((programs) => (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">
                              {programs.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 text-sm font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            {programs.availability}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <span className="inline-flex px-2 text-sm font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                            {programs.unavailability}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-black body-font">
        <div className="container px-5 mx-auto mb-6">
          <div className="mb-8 text-center">
            <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
              Incubated
            </span>
            <h2 className="mb-4 text-3xl font-medium text-black md:text-5xl lg:text-5xl">
              Visit our incubated organizations
            </h2>
          </div>
        </div>
        <br></br>
        <p className="mx-auto text-xl font-normal leading-relaxed text-center text-black fs521 lg:w-2/3">
          Here are a few of the organizations that are incubated through Project
          enVision U.S.{' '}
          <a
            className="text-blue-500 underline"
            href="https://psyw68ikrb1.typeform.com/to/g4Mo6yxb"
          >
            Want to see your organization here?
          </a>
        </p>
        <div className="max-w-6xl pt-16 pb-24 mx-auto fsac4">
          <div class="ktq4 border-4 border-indigo-300">
            <img src="/images/ataraxia.png"></img>
            <h3 class="pt-3 text-center font-semibold text-lg text-white">
              Ataraxia
            </h3>
            <p class="pt-2 value-text text-md text-gray-200 fkrr1">
              Ataraxia is a non-profit organization incubated by Project
              enVision U.S. with a mission to improve the mental health of our
              homeless population.
            </p>
          </div>
          <div class="ktq4 border-4 border-indigo-300	">
            <img src="/images/crowneducationchallenge.png"></img>
            <h3 class="pt-3 text-center font-semibold text-lg text-white">
              Crown Education Challenge
            </h3>
            <p class="pt-2 value-text text-md text-gray-200 fkrr1">
              The Crown Education Challenge was started in 2020 during the
              COVID-19 pandemic. They were inspired to respond to the countless
              school closures worldwide that caused over 1.5 billion students to
              be out of school.
            </p>
          </div>
        </div>
      </section>
      {/* <section class="text-black body-font">
        <div className="container px-5 mx-auto mb-12">
          <div className="mb-8 text-center">
            <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
              Case Study
            </span>
            <h2 className="mb-4 text-3xl font-medium text-black md:text-5xl lg:text-5xl">
              Learn how Ataraxia went <br /> from 0 to 1,000 in 2 weeks
            </h2>
          </div>
        </div>
        <br></br>
        <p className="mx-auto text-xl font-normal leading-relaxed text-center text-black fs521 lg:w-2/3">
          **INFO**
        </p> */}
      <section class="relative mb-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 class="mb-5 text-3xl font-medium text-black md:text-5xl lg:text-5xl">
            Subscribe to our newsletter
          </h1>
          <h1 class="mb-9 text-xl font-semibold text-gray-600">
            Enter your email address and get our newsletters straight away.
          </h1>
          <input
            type="email"
            placeholder="john@smith.com"
            name="email"
            autocomplete="email"
            class="border border-gray-600 w-3/4 lg:w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold focus:ring-2 focus:outline-none focus:border-transparent focus:ring-fuchsia-300 hover:border-gray-700"
          />{' '}
          <a
            class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium hover:text-white hover:bg-black text-black bg-transparent border rounded-lg bg-white"
            href="/"
          >
            <span class="justify-center">Subscribe</span>
          </a>
        </div>
      </section>
      {/* </section> */}
      <Footer link="https://github.com/envisionnew/envisionnew.org/edit/main/pages/programs/inspire.js" />
    </div>
  );
}
