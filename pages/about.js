import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

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
      />
      <Head>
        <title>About | Project enVision</title>
      </Head>
      <Header />
      <section className="relative text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-16 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-6 text-6xl font-semibold text-black title-font">
              About
            </h1>
            <br className="hidden lg:block"></br>
            <p className="mx-auto text-base text-xl font-semibold leading-relaxed text-left text-gray-900 lg:w-1/2">
              Project enVision is a 501(c)(3) non-profit organization dedicated
              to the <span className="underline">community</span>. By creating
              relationships with students, schools, and local politicians,
              through different programs, we envision a community where learning
              is <i>free</i> and <i>accessible</i>.
              <br className="hidden lg:block"></br>
              <br className="hidden lg:block"></br>
              The COVID-19 pandemic has impacted everyone, especially those in
              lower income communities. To achieve our mission of building a
              connected community, Project enVision has prioritized the
              underserved communities through our tutor sessions and innovative
              STEM classes to ensure a targeted learning curriculum committed to
              their success.
            </p>
          </div>
        </div>
        <section className="mt-10 text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="mb-20 text-center">
              <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
                About
              </span>
              <h2 className="mb-4 font-medium text-black sm:text-5xl title-font">
                We're building a <span className="underline">community</span>.
              </h2>
              <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
                Project enVision U.S. has been a leading non-profit since 2015.
              </p>
              <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 bg-black rounded-full"></div>
              </div>
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 lg:w-1/3 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <div className="w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          Mission
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          Our mission is to build a connected community by
                          facilitating learning, while targetting accessibility
                          and bonding. Our volunteers are commited to this
                          mission and strengthening our community, together.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/3 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <div className="w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          COVID-19 Response
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          Since March, Project enVision U.S. has actively been
                          engaging with underprivileged communites and helping
                          the transition from in-person to distanced learning.
                          Project enVision: Learn and Tutoring have moved
                          online, and schedules of these programs can be viewed
                          on our programs section.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/3 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <div className="w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          History
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          Project enVision U.S. was founded in 2015 and since
                          then, has been providing volunteer and educational
                          services to young people everywhere. Our programs and
                          entities have positively impacted hundreds of kids and
                          strengthened our community. These programs can be
                          viewed on our programs section.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="mb-20 text-center">
              <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
                Team
              </span>
              <h2 className="mb-4 font-medium text-black sm:text-5xl title-font">
                Meet the Team.
              </h2>
              <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
                These are the volunteers who make everything possible!
              </p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
              </div>
              <div class="container px-5 py-16 mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class="p-4 lg:w-1/4 md:w-1/2">
                    <div class="h-full flex flex-col items-center text-center">
                      <img
                        alt="an image of Saurish"
                        class="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4"
                        src="/images/saurish.JPG"
                      ></img>
                      <div class="w-full">
                        <a
                          className="underline hover:text-blue-200"
                          href="https://saurish.com"
                        >
                          <h2 class="title-font font-medium text-lg text-black">
                            Saurish Srivastava
                          </h2>
                        </a>
                        <h3 class="text-gray-500 mb-3">
                          President & Executive Director
                        </h3>
                        <p class="mb-4 text-left">
                          Saurish Srivastava is a sophomore at Evergreen Valley
                          High School. He's a national-level varsity Lincoln
                          Douglas debater, computer science enthuasiast, and a
                          hobbyist photographer. Saurish is committed to
                          building a bond in our community and is thrilled to
                          work at Project enVision U.S.!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 lg:w-1/4 md:w-1/2">
                    <div class="h-full flex flex-col items-center text-center">
                      <img
                        alt="an image of Nishika"
                        class="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4"
                        src="https://placeimg.com/640/480/any"
                      ></img>
                      <div class="w-full">
                        <h2 class="title-font font-medium text-lg text-black">
                          Nishika Ivaturi
                        </h2>
                        <h3 class="text-gray-500 mb-3">
                          Director of Outreach & Chapters
                        </h3>
                        <p class="mb-4">**Nishika Bio**</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 lg:w-1/4 md:w-1/2">
                    <div class="h-full flex flex-col items-center text-center">
                      <img
                        alt="an image of Parth"
                        class="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4"
                        src="/images/parth.jpeg"
                      ></img>
                      <div class="w-full">
                        <h2 class="title-font font-medium text-lg text-black">
                          Parth Paliwal
                        </h2>
                        <h3 class="text-gray-500 mb-3">Director of CS</h3>
                        <p class="mb-4 text-left">
                          Parth Paliwal is a sophomore at Evergreen Valley High
                          School. Parth is a computer geek and loves anything
                          and everything to do with technology. Parth is also a
                          machine learning/AI teacher for beginners and is
                          passionate about learning other topics such as web
                          development and cloud computing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 lg:w-1/4 md:w-1/2">
                    <div class="h-full flex flex-col items-center text-center">
                      <img
                        alt="team"
                        class="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4"
                        src="/images/garima.jpg"
                      ></img>
                      <div class="w-full">
                        <h2 class="title-font font-medium text-lg text-black">
                          Garima Upadhyay
                        </h2>
                        <h3 class="text-gray-500 mb-3">
                          Director of Marketing
                        </h3>
                        <p class="mb-4 text-left">
                          Garima Upadhyay is a sophomore at American High
                          School. As a member of top-placing Science Olympiad
                          team and an aspiring computer scientist, she is
                          interested in everything STEM. Garima hopes to
                          positively impact the world—but first, our community!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 lg:w-1/4 md:w-1/2">
                    <div class="h-full flex flex-col items-center text-center">
                      <img
                        alt="photo of Ayush"
                        class="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4"
                        src="/images/ayush-2.jpeg"
                      ></img>
                      <div class="w-full">
                        <h2 class="title-font font-medium text-lg text-black">
                          Ayush Agarwal
                        </h2>
                        <h3 class="text-gray-500 mb-3">Director of Debate</h3>
                        <p class="mb-4 text-left">
                          Ayush Agarwal is a sophomore at BASIS Independent
                          Silicon Valley. He has been involved in speech and
                          debate since 7th grade and has had notable success on
                          the national circuit, reaching elimination rounds for
                          debate at tournaments like Santa Clara University,
                          Arizona State University, Yale and Silver TOC. Ayush
                          has also championed CSU Long Beach, quarterfinaled at
                          Bronx, and octofinaled at Apple Valley. He loves
                          teaching anything debate-related and is excited to
                          work at Project enVision U.S.!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      <Footer link="https://github.com/envisionnew/envisionnew.org/edit/main/pages/about.js" />
    </div>
  );
}
