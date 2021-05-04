import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { NextSeo } from 'next-seo';

export default function Contact() {
  return (
    <div className="max-h-full text-black bg-white">
      <NextSeo
        title="Contact | Project enVision U.S."
        description="Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere."
        canonical="https://envisionnew.org/contact/"
        openGraph={{
          url: 'https://envisionnew.org/contact/',
          title: 'Project enVision U.S.',
          description:
            'Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere.',
          site_name: 'Project enVision U.S.'
        }}
      />
      <Head>
        <title>Contact | Project enVision</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Header />
      
      <section className="relative text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-16 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-6 text-6xl font-semibold text-black title-font">
              Contact Us
            </h1>
            <p className="mx-auto text-base text-xl font-semibold leading-relaxed text-gray-900 lg:w-2/3">
              Want to reach out? Fill out the form below and we'll get back to
              you as quickly as we can!
            </p>
          </div>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <form
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfw7717IenntIJbLCOCfizrmu6g3mXIoKMR3ZVbyD_QrfUITw/formResponse"
              method="post"
            >
              <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      for="contactName"
                      className="font-semibold leading-7 text-black text-md"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      placeholder="John Smith"
                      name="entry.314971597"
                      required
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    ></input>
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      for="contactEmail"
                      className="font-semibold leading-7 text-black text-md"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      placeholder="john@smith.com"
                      name="entry.2111510422"
                      required
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    ></input>
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      for="contactMessage"
                      className="font-semibold leading-7 text-black text-md"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      name="entry.1147726578"
                      placeholder="Tell us what we can help you with!"
                      required
                      className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full p-2">
                  <button
                    type="submit"
                    className="flex px-8 py-2 mx-auto text-lg text-black bg-white border-2 rounded"
                  >
                    Send
                  </button>
                </div>
                <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-500">
                  <a className="text-indigo-500">support@envisionnew.org</a>
                  <p className="my-5 leading-normal">
                    San Jose, California, United States
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="mt-10 text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="mb-20 text-center">
              <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
                FAQ
              </span>
              <h2 className="mb-4 font-medium text-black sm:text-4xl title-font">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
                Let us help answer the most common questions you might have.
              </p>
              <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
              </div>
              <div className="max-w-4xl pt-10 mx-auto fsac4">
                <div class="ktq4">
                  <h3 class="font-semibold text-center text-2xl text-white">
                    I want to be a volunteer, what's the time commitment?
                  </h3>
                  <p class="pt-3 value-text text-md text-gray-200 fkrr1">
                    We recommend volunteers to be active for 3+ hours a week to
                    keep up with and ensure the success of Project enVision
                    programs. This number changes depending on your role as a
                    volunteer.
                  </p>
                </div>
                <div class="ktq4">
                  <h3 class="font-semibold text-center text-2xl text-white">
                    Still along the lines of volunteering: what happens after I
                    apply?
                  </h3>
                  <p class="pt-3 value-text text-md text-gray-200 fkrr1">
                    Once you have applied to be a volunteer or tutor, one of the
                    executive directors at Project enVision will read through
                    your application and set up a meeting with you. In this call
                    (hosted over Zoom/Slack), you will be asked questions about
                    your application and your general interest in Project
                    enVision. Once this call is over, we'll let you know
                    decisions immediately!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <br />
      <Footer link="https://github.com/envisionnew/envisionnew.org/edit/main/pages/contact.js" />
    </div>
  );
}
