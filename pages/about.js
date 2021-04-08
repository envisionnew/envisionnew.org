import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { NextSeo } from "next-seo";
import styled from "styled-components";

const Highlight = styled.span`
  background-color: #0af5f4;
`;

export default function About() {
  return (
    <div className="max-h-full text-black bg-white">
      <NextSeo
        title="About | Project enVision U.S."
        description="Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere."
        canonical="https://envisionnew.org/about/"
        openGraph={{
          url: "https://envisionnew.org/about/",
          title: "Project enVision U.S.",
          description:
            "Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere.",
          site_name: "Project enVision U.S.",
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
                We're building a <span className="text-dotted">community</span>.
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
      <Footer link="https://github.com/envision/envisionnew.org/edit/main/pages/about.js" />
    </div>
  );
}
