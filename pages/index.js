import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Flickity from "react-flickity-component";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Typing from "../components/Typing";
import { NextSeo } from "next-seo";
import styled from "styled-components";
import { Parallax } from "react-parallax";

const Highlight = styled.span`
  background-color: #0af5f4;
`;

const insideStyles = {
  padding: 20,
  width: "40rem",
  position: "absolute",
  top: "32%",
  left: "30%",
};

export default function Home() {
  return (
    <div className="text-black bg-white">
      <NextSeo
        title="Project enVision U.S."
        description="Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere."
        canonical="https://envisionnew.org/"
        openGraph={{
          url: "https://envisionnew.org/",
          title: "Project enVision U.S.",
          description:
            "Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere.",
          site_name: "Project enVision U.S.",
        }}
      />
      <Head>
        <title>Project enVision U.S.</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <section className="text-black body-font lg:pt-20">
        <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
          <div className="flex flex-col w-full mb-2 text-left md:text-center ">
            <h1 className="mt-10 mb-2 text-6xl font-bold tracking-tighter text-black lg:text-8xl md:text-7xl">
              <span>
                We help <Highlight>students</Highlight>{" "}
              </span>
              <br className="hidden lg:block"></br>
              <Typing />
            </h1>
            <br></br>
            <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg ">
              <img
                className="object-cover object-center w-1/4 mb-10 rounded-lg g327"
                alt="Conversations"
                src="/images/conversation.svg"
              ></img>
            </div>
            <p className="mx-auto text-3xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              Project enVision is a nonprofit accelerator focused on providing
              volunteer and educational services to young people everywhere.
            </p>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto mt-5">
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="w-1/2 p-4 sm:w-1/3">
                    <h2 className="text-3xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={950} redraw={true}>
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
                  <div className="w-1/2 p-4 sm:w-1/3">
                    <h2 className="text-3xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={15} redraw={true}>
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
                  <div className="w-1/2 p-4 sm:w-1/3">
                    <h2 className="text-3xl font-medium text-black title-font sm:text-4xl">
                      <CountUp end={15} redraw={true}>
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
              <a
                className="inline-flex items-center py-3 mb-8 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent rounded px-7 bg-gradient-to-r from-blue-500 to-blue-800 text-md md:mt-0 focus:shadow-outline"
                href="#about"
              >
                <div className="flex text-lg">
                  <span className="justify-center">Learn More</span>
                </div>
              </a>
              <a
                className="inline-flex items-center py-3 font-semibold text-white transition duration-500 ease-in-out transform bg-transparent bg-black rounded px-7 lg:ml-11 md:ml-11 text-md md:mt-0 hover:text-white hover:bg-black focus:shadow-outline"
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
          <div className="w-1/3 h-0.5 rounded-full bg-black inline-flex"></div>
        </div>
        <section id="about" className="mt-10 text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="mb-20 text-center">
              <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
                Mission
              </span>
              <h2 className="mb-4 font-medium text-black sm:text-5xl title-font">
                For Students <span className="text-dotted">By Students</span>
              </h2>
              <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
                Project enVision U.S. is led by students focused on education
                and youth.
              </p>
              <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 bg-white rounded-full"></div>
              </div>
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg"
                        src="/images/unity.svg"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          Uniting Youth
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          We are building a large community of young people
                          inspired to pay it forward, <strong>together</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full mb-6 rounded-lg"
                        src="/images/learn.svg"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          Leveling the Playing Field
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          Our programs target lower income communities to break
                          the technological and economical divide. Learning
                          should be free!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full rounded-lg mb-9"
                        src="/images/launch.svg"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          Inspiring the Next Generation
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          Our programs help inspire the next generation to
                          tackle challenging and futuristic problems.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full mb-4 rounded-lg"
                        src="/images/city.svg"
                      ></img>
                      <div className="w-full">
                        <h2 className="text-xl font-medium text-black title-font">
                          Strengthening Communities
                        </h2>
                        <p className="mt-2 mb-4 text-lg">
                          We work closely with politicians and leaders to
                          strengthen relationships within communities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Parallax
          strength={500}
          bgImage="/images/class.jpg"
          contentClassName="py-xl"
          bgImageAlt="A Project enVision class at a title one school."
          bgStyle={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full m-auto bg-black bg-opacity-50">
            <div style={{ height: "50rem" }}>
              <div style={insideStyles}>
                <h2 className="mb-3 text-3xl text-white font-lg title-font">
                  "Project enVision established programs at our school that will
                  bring STEM closer to thousands of students. Their efforts will
                  bring invaluable opportunities to our students to see that
                  they belong in this new high tech society for years to come."
                </h2>
                <p className="mb-3 text-lg text-gray-300 font-lg title-font">
                  - Kim Sheffield, Principal of Stonegate Elementary School
                  (Title I School)
                </p>
              </div>
            </div>
          </div>
        </Parallax>
        <section className="text-gray-600 body-font">
          <div className="container flex flex-wrap px-5 py-24 mx-auto">
            <div className="w-full mb-10 overflow-hidden rounded-lg lg:w-1/2 lg:mb-0">
              <img
                alt="feature"
                className="object-cover object-center w-full h-full"
                src="./images/placeholder.png"
              ></img>
            </div>
            <div className="flex flex-col flex-wrap -mb-10 text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
              <div className="flex flex-col items-center mb-10 lg:items-start">
                <div className="flex-grow">
                  <h2 className="mb-3 text-2xl font-medium text-black title-font">
                    Free
                  </h2>
                  <p className="text-lg leading-relaxed">
                    All of our templates are 100% free forever.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center mb-10 lg:items-start">
                <div className="flex-grow">
                  <h2 className="mb-3 text-2xl font-medium text-black title-font">
                    Responsive
                  </h2>
                  <p className="text-lg leading-relaxed">
                    All our templates come with full responsiveness straight out
                    of the box.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center mb-10 lg:items-start">
                <div className="flex-grow">
                  <h2 className="mb-3 text-2xl font-medium text-black title-font">
                    SEO Friendly
                  </h2>
                  <p className="text-lg leading-relaxed">
                    Our templates have the best SEO practices ensuring you get
                    to the top.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center mb-10 lg:items-start">
                <div className="flex-grow">
                  <h2 className="mb-3 text-2xl font-medium text-black title-font">
                    Fast
                  </h2>
                  <p className="text-lg leading-relaxed">
                    The fastest websites you can get.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center mb-10 lg:items-start">
                <div className="flex-grow">
                  <h2 className="mb-3 text-2xl font-medium text-black title-font">
                    Google Analytics Supported
                  </h2>
                  <p className="text-lg leading-relaxed">
                    All our templates come with full support for Google
                    Analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="mb-20 text-center">
              <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
                Programs
              </span>
              <h2 className="mb-4 font-medium text-black sm:text-5xl title-font">
                Project enVision Brands
              </h2>
              <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
                Our organization focuses on many different areas of community
                work. Our main programs are listed below.
              </p>
              <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 mb-5 bg-black rounded-full"></div>
              </div>
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                        src="./images/solve.svg"
                      ></img>
                      <div className="w-full">
                        <a href="#">
                          <h2 className="mb-5 text-2xl font-medium text-black title-font text-dotted-adaptive">
                            Project enVision Learn
                          </h2>
                        </a>
                        <p className="mb-2 text-lg">
                          STEAM educational programs and courses with excellent
                          mentors, from Speech and Debate programs to Coding.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                        src="/images/video.svg"
                      ></img>
                      <div className="w-full">
                        <a href="#">
                          <h2 className="mb-5 text-2xl font-medium text-black title-font text-dotted-adaptive">
                            Project enVision Tutoring
                          </h2>
                        </a>
                        <p className="mb-2 text-lg">
                          Peer-to-peer tutoring with state curriculum, available
                          online with numerous volunteers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                        src="/images/startup.svg"
                      ></img>
                      <div className="w-full">
                        <a href="#">
                          <h2 className="mb-5 text-2xl font-medium text-black title-font text-dotted-adaptive">
                            Project enVision Inspire
                          </h2>
                        </a>
                        <p className="mb-2 text-lg">
                          Nonprofit incubator providing mentorship {"&"}{" "}
                          financial, legal {"&"} infrastructure support to
                          student-run nonprofits.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="flex flex-col items-center h-full text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                        src="/images/chapter.svg"
                      ></img>
                      <div className="w-full">
                        <a href="#">
                          <h2 className="mb-5 text-2xl font-medium text-black title-font text-dotted-adaptive">
                            Project enVision Chapters
                          </h2>
                        </a>
                        <p className="mb-2 text-lg">
                          Chapter-based organization spreading our resources to
                          different communities and areas all across the United
                          States.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="mb-20 text-center">
              <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
                Sponsors
              </span>
              <h2 className="mb-4 font-medium text-black sm:text-5xl title-font">
                Partnered With Industry-Leading Companies
              </h2>
              <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
                We partner with some of the world's most forward-thinking and
                industry-leading companies. Together, we hope to build a better
                future and a new generation of innovators.
              </p>
              <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 mb-5 bg-black rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 604 129">
                    <path
                      d="M213.2 74.3l-3.6 10.2h-.3c-.6-2.3-1.7-5.8-3.5-10l-19.3-48.5h-18.9v77.3h12.5v-47.7c0-3 0-6.4-.1-10.6-.1-2.1-.3-3.7-.4-4.9h.3c.6 3 1.3 5.2 1.8 6.6l23.2 56.4h8.8l23-56.9c.5-1.3 1-3.9 1.5-6.1h.3c-.3 5.7-.5 10.8-.6 13.9v49h13.3v-77.2h-18.2l-19.8 48.5zM263.8 47.6h13v55.4h-13zM270.4 24.2c-2.2 0-4 .8-5.5 2.2-1.5 1.4-2.3 3.2-2.3 5.4 0 2.1.8 3.9 2.3 5.3 1.5 1.4 3.3 2.1 5.5 2.1s4.1-.8 5.5-2.1c1.5-1.4 2.3-3.2 2.3-5.3s-.8-3.9-2.3-5.4c-1.3-1.4-3.2-2.2-5.5-2.2M322.9 47.1c-2.4-.5-4.9-.8-7.3-.8-5.9 0-11.3 1.3-15.8 3.9-4.5 2.6-8.1 6.2-10.4 10.7-2.4 4.6-3.6 9.9-3.6 16 0 5.3 1.2 10 3.5 14.3 2.3 4.2 5.5 7.6 9.8 9.9 4.1 2.3 8.9 3.5 14.3 3.5 6.2 0 11.5-1.3 15.7-3.7l.1-.1v-12l-.5.4c-1.9 1.4-4.1 2.6-6.3 3.3-2.3.8-4.4 1.2-6.2 1.2-5.2 0-9.3-1.5-12.2-4.8-3-3.2-4.5-7.6-4.5-13.1 0-5.7 1.5-10.2 4.6-13.5 3.1-3.3 7.2-5 12.2-5 4.2 0 8.5 1.4 12.4 4.2l.5.4v-12.7l-.1-.1c-1.7-.7-3.6-1.5-6.2-2M365.8 46.7c-3.2 0-6.2 1-8.8 3.1-2.2 1.8-3.7 4.4-5 7.5h-.1v-9.7h-13v55.4h13v-28.3c0-4.8 1-8.8 3.2-11.7 2.2-3 5-4.5 8.4-4.5 1.2 0 2.4.3 3.9.5 1.4.4 2.4.8 3.1 1.3l.5.4v-13l-.3-.1c-.9-.6-2.7-.9-4.9-.9M401.2 46.4c-9.1 0-16.4 2.7-21.5 8-5.2 5.3-7.7 12.6-7.7 21.8 0 8.6 2.6 15.6 7.6 20.7 5 5 11.8 7.6 20.3 7.6 8.9 0 16-2.7 21.1-8.1 5.2-5.4 7.7-12.6 7.7-21.5 0-8.8-2.4-15.8-7.3-20.9-4.7-5.1-11.6-7.6-20.2-7.6m10.4 42.6c-2.4 3.1-6.2 4.6-10.9 4.6s-8.5-1.5-11.2-4.8c-2.7-3.1-4-7.6-4-13.3 0-5.9 1.4-10.4 4-13.6 2.7-3.2 6.4-4.8 11.1-4.8 4.6 0 8.2 1.5 10.8 4.6 2.6 3.1 4 7.6 4 13.5-.2 6-1.3 10.7-3.8 13.8M457.7 70.6c-4.1-1.7-6.7-3-7.9-4.1-1-1-1.5-2.4-1.5-4.2 0-1.5.6-3 2.1-4s3.2-1.5 5.7-1.5c2.2 0 4.5.4 6.7 1s4.2 1.5 5.8 2.7l.5.4v-12.2l-.3-.1c-1.5-.6-3.5-1.2-5.9-1.7-2.4-.4-4.6-.6-6.4-.6-6.2 0-11.3 1.5-15.3 4.8-4 3.1-5.9 7.3-5.9 12.2 0 2.6.4 4.9 1.3 6.8.9 1.9 2.2 3.7 4 5.2 1.8 1.4 4.4 3 8 4.5 3 1.3 5.3 2.3 6.7 3.1 1.4.8 2.3 1.7 3 2.4.5.8.8 1.8.8 3.1 0 3.7-2.8 5.5-8.5 5.5-2.2 0-4.5-.4-7.2-1.3s-5.2-2.2-7.3-3.7l-.5-.4v12.7l.3.1c1.9.9 4.2 1.5 7 2.2 2.8.5 5.3.9 7.5.9 6.7 0 12.2-1.5 16.1-4.8 4-3.2 6.1-7.3 6.1-12.6 0-3.7-1-7-3.2-9.5-2.9-2.4-6.5-4.9-11.7-6.9M506.9 46.4c-9.1 0-16.4 2.7-21.5 8s-7.7 12.6-7.7 21.8c0 8.6 2.6 15.6 7.6 20.7 5 5 11.8 7.6 20.3 7.6 8.9 0 16-2.7 21.1-8.1 5.2-5.4 7.7-12.6 7.7-21.5 0-8.8-2.4-15.8-7.3-20.9-4.7-5.1-11.6-7.6-20.2-7.6m10.3 42.6c-2.4 3.1-6.2 4.6-10.9 4.6-4.8 0-8.5-1.5-11.2-4.8-2.7-3.1-4-7.6-4-13.3 0-5.9 1.4-10.4 4-13.6 2.7-3.2 6.4-4.8 11.1-4.8 4.5 0 8.2 1.5 10.8 4.6 2.6 3.1 4 7.6 4 13.5 0 6-1.3 10.7-3.8 13.8M603.9 58.3v-10.7h-13.1v-16.4l-.4.1-12.4 3.7-.3.1v12.5h-19.6v-7c0-3.2.8-5.7 2.2-7.3s3.5-2.4 6.1-2.4c1.8 0 3.7.4 5.8 1.3l.5.3v-11.3l-.3-.1c-1.8-.6-4.2-1-7.3-1-3.9 0-7.3.9-10.4 2.4-3.1 1.7-5.4 4-7.1 7.1-1.7 3-2.6 6.4-2.6 10.3v7.7h-9.1v10.6h9.1v44.8h13.1v-44.7h19.6v28.5c0 11.7 5.5 17.6 16.5 17.6 1.8 0 3.7-.3 5.5-.6 1.9-.4 3.3-.9 4.1-1.3l.1-.1v-10.7l-.5.4c-.8.5-1.5.9-2.7 1.2-1 .3-1.9.4-2.6.4-2.6 0-4.4-.6-5.7-2.1-1.2-1.4-1.8-3.7-1.8-7.1v-26.2h13.3z"
                      fill="#737373"
                    />
                    <path fill="#F25022" d="M0 0h61.3v61.3h-61.3z" />
                    <path fill="#7FBA00" d="M67.7 0h61.3v61.3h-61.3z" />
                    <path fill="#00A4EF" d="M0 67.7h61.3v61.3h-61.3z" />
                    <path fill="#FFB900" d="M67.7 67.7h61.3v61.3h-61.3z" />
                  </svg>
                  <svg
                    viewBox="0 0 2761 991"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M666.751 420.38c0-17.962 14.764-24.873 39.222-24.873 35.063 0 79.355 10.597 114.42 29.482V316.742c-38.293-15.2-76.126-21.188-114.42-21.188-93.665 0-155.952 48.827-155.952 130.358 0 127.126 175.326 106.861 175.326 161.676 0 21.185-18.453 28.096-44.292 28.096-38.294 0-87.203-15.662-125.96-36.85V688.46c42.91 18.425 86.28 26.253 125.96 26.253 95.968 0 161.947-47.44 161.947-129.892-.46-137.263-176.25-112.852-176.25-164.442zM978.65 203.432l-112.579 23.95-.46 368.954c0 68.175 51.215 118.378 119.5 118.378 37.834 0 65.516-6.908 80.741-15.2V606.01c-14.76 5.988-87.663 27.176-87.663-40.996V401.495h87.663v-98.11H978.19l.46-99.953zm230.697 134.037l-7.384-34.084h-99.66v403.038h115.349V433.28c27.218-35.467 73.36-29.019 87.663-23.954v-105.94c-14.764-5.53-68.747-15.663-95.968 34.083zm124.111-34.084h115.81v403.038h-115.81V303.385zm0-35.007l115.81-24.873V150l-115.81 24.413v93.965zm356.654 27.176c-45.217 0-74.284 21.188-90.43 35.93l-6.002-28.559h-101.502V840l115.345-24.41.464-130.355c16.61 11.977 41.061 29.019 81.665 29.019 82.589 0 157.795-66.329 157.795-212.343-.461-133.58-76.591-206.357-157.335-206.357zm-27.682 317.364c-27.222 0-43.374-9.67-54.443-21.647l-.464-170.89c11.997-13.357 28.607-22.568 54.907-22.568 41.986 0 71.053 46.98 71.053 107.32 0 61.724-28.607 107.785-71.053 107.785zm548.59-106.401c0-117.918-57.213-210.963-166.56-210.963-109.814 0-176.254 93.048-176.254 210.043 0 138.643 78.44 208.657 191.015 208.657 54.907 0 96.432-12.437 127.806-29.939V592.19c-31.37 15.663-67.361 25.337-113.039 25.337-44.756 0-84.435-15.663-89.509-70.015h225.62c0-5.991.922-29.941.922-40.995zm-227.926-43.758c0-52.05 31.838-73.7 60.905-73.7 28.143 0 58.135 21.65 58.135 73.7h-119.04z"
                      fill="currentColor"
                      fillRule="nonzero"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="60"
                    fillRule="evenodd"
                  >
                    <path
                      d="M72.038 40.703c-5.8 4.283-14.234 6.57-21.486 6.57-10.168 0-19.323-3.76-26.248-10.016-.544-.492-.057-1.162.596-.78 7.474 4.35 16.715 6.965 26.26 6.965 6.438 0 13.52-1.332 20.032-4.096.984-.418 1.806.644.844 1.358m2.418-2.764c-.74-.95-4.9-.448-6.782-.226-.57.07-.657-.427-.144-.784 3.32-2.338 8.77-1.663 9.407-.88s-.165 6.25-3.286 8.858c-.48.4-.936.187-.723-.344.7-1.75 2.272-5.672 1.528-6.625"
                      fill="#f90"
                    />
                    <path
                      d="M67.803 20.427v-2.272a.56.56 0 0 1 .575-.575H78.55c.326 0 .588.235.588.575V20.1c-.004.326-.28.753-.766 1.428l-5.27 7.526c1.96-.048 4.026.244 5.802 1.245.4.226.5.557.54.884v2.425c0 .33-.366.718-.75.518-3.13-1.64-7.287-1.82-10.747.017-.353.192-.723-.192-.723-.522v-2.303c0-.37.004-1 .374-1.563l6.107-8.758H68.4c-.326 0-.588-.23-.588-.57M30.694 34.605H27.6c-.296-.022-.53-.244-.553-.527V18.194c0-.318.266-.57.596-.57h2.886c.3.013.54.244.562.53v2.076h.057c.753-2.007 2.168-2.943 4.074-2.943 1.937 0 3.147.936 4.018 2.943.75-2.007 2.45-2.943 4.275-2.943 1.297 0 2.716.535 3.582 1.737.98 1.336.78 3.278.78 4.98L47.87 34.03c0 .318-.266.575-.596.575h-3.1c-.3-.022-.557-.27-.557-.575V25.6c0-.67.06-2.342-.087-2.977-.23-1.066-.923-1.367-1.82-1.367-.75 0-1.532.5-1.85 1.302s-.287 2.142-.287 3.043v8.42c0 .318-.266.575-.596.575h-3.1c-.313-.022-.557-.27-.557-.575l-.004-8.42c0-1.772.292-4.38-1.907-4.38-2.224 0-2.137 2.542-2.137 4.38v8.42c0 .318-.266.575-.596.575M87.896 17.3c4.592 0 7.078 3.944 7.078 8.958 0 4.845-2.747 8.688-7.078 8.688-4.5 0-6.965-3.944-6.965-8.858 0-4.945 2.486-8.8 6.965-8.8m.026 3.243c-2.28 0-2.425 3.108-2.425 5.045s-.03 6.085 2.398 6.085c2.398 0 2.512-3.343 2.512-5.38 0-1.34-.057-2.943-.46-4.214-.348-1.106-1.04-1.537-2.024-1.537m13.007 14.075h-3.082c-.3-.022-.557-.27-.557-.575l-.004-15.888c.026-.292.283-.518.596-.518h2.87c.27.013.492.196.553.444v2.43h.057c.866-2.172 2.08-3.208 4.218-3.208 1.4 0 2.742.5 3.613 1.872.8 1.27.8 3.408.8 4.945v10c-.035.28-.292.5-.596.5H106.3c-.283-.022-.518-.23-.548-.5V25.48c0-1.737.2-4.28-1.937-4.28-.753 0-1.445.505-1.8 1.27-.435.97-.492 1.937-.492 3.008v8.554c-.004.318-.274.575-.605.575m-41.225-7.6c0 1.206.03 2.2-.58 3.282-.492.87-1.275 1.406-2.142 1.406-1.188 0-1.885-.905-1.885-2.242 0-2.638 2.364-3.117 4.605-3.117v.67m3.12 7.544c-.205.183-.5.196-.73.074-1.027-.853-1.214-1.25-1.776-2.063-1.698 1.732-2.903 2.25-5.102 2.25-2.607 0-4.632-1.606-4.632-4.823 0-2.512 1.358-4.222 3.3-5.058 1.68-.74 4.026-.87 5.82-1.075v-.4c0-.736.057-1.606-.38-2.242-.374-.57-1.097-.805-1.737-.805-1.18 0-2.23.605-2.486 1.86-.052.28-.257.553-.54.566l-3-.322c-.252-.057-.535-.26-.46-.65.688-3.64 3.98-4.736 6.92-4.736 1.506 0 3.474.4 4.662 1.54 1.506 1.406 1.362 3.282 1.362 5.324v4.823c0 1.45.6 2.085 1.167 2.87.196.28.24.614-.013.823L62.82 34.57l-.004-.01M19.12 27.017c0 1.206.03 2.2-.58 3.282-.492.87-1.27 1.406-2.142 1.406-1.188 0-1.88-.905-1.88-2.242 0-2.638 2.364-3.117 4.6-3.117v.67m3.12 7.544c-.205.183-.5.196-.73.074-1.027-.853-1.2-1.25-1.776-2.063-1.698 1.732-2.9 2.25-5.102 2.25C12.028 34.822 10 33.216 10 30c0-2.512 1.362-4.222 3.3-5.058 1.68-.74 4.026-.87 5.82-1.075v-.4c0-.736.057-1.606-.374-2.242-.38-.57-1.1-.805-1.737-.805-1.18 0-2.233.605-2.5 1.86-.052.28-.257.553-.535.566l-3.004-.322c-.252-.057-.53-.26-.46-.65.692-3.64 3.98-4.736 6.92-4.736 1.506 0 3.474.4 4.662 1.54 1.506 1.406 1.362 3.282 1.362 5.324v4.823c0 1.45.6 2.085 1.167 2.87.2.28.244.614-.01.823l-2.36 2.052-.01-.01"
                      fill="#221f1f"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="60"
                    fill="#ff4a00"
                  >
                    <path d="M8.725 43.474l10.65-16.5H9.98a7.82 7.82 0 0 1-.104-1.566c-.017-.524.018-1.05.104-1.566h15.14l.2.522-10.756 16.5H24.6a7.82 7.82 0 0 1 .104 1.566 6.42 6.42 0 0 1-.104 1.462H8.83zm30.597-12.74a4.04 4.04 0 0 0-1.149-3.237 5.42 5.42 0 0 0-3.446-.94 20.34 20.34 0 0 0-2.611.209 14.82 14.82 0 0 0-2.297.522 5.8 5.8 0 0 1-.73-3.133 13.22 13.22 0 0 1 2.924-.627 15.81 15.81 0 0 1 3.133-.209 9 9 0 0 1 5.952 1.775c1.358 1.15 2.088 3.133 2.088 5.743v12.635l-3.342.627c-1.312.208-2.64.313-3.968.313-1.156.01-2.3-.096-3.446-.313a6.63 6.63 0 0 1-2.611-1.149 5.16 5.16 0 0 1-1.671-1.984 6.36 6.36 0 0 1-.627-2.924 5.31 5.31 0 0 1 .73-2.924 5.16 5.16 0 0 1 1.88-2.088 10.8 10.8 0 0 1 2.715-1.253c1.052-.3 2.143-.44 3.237-.418a12.03 12.03 0 0 1 2.088.104c.522 0 .94.104 1.358.104v-.835zm0 3.76c-.493-.025-.982-.095-1.462-.2-.627 0-1.15-.104-1.566-.104a6.46 6.46 0 0 0-3.76.94 3.23 3.23 0 0 0-1.253 2.715 3.05 3.05 0 0 0 1.462 2.924 3.28 3.28 0 0 0 1.462.418 7.38 7.38 0 0 0 1.462.104 11.35 11.35 0 0 0 1.88-.104l1.67-.313v-6.37zm8.145-10.652c.313 0 .522-.104.835-.104h1.67c.313 0 .522.104.835.104a2.09 2.09 0 0 1 .104.522c0 .313.104.522.104.835s.104.627.104.94c-.003.18.033.357.104.522l.94-1.253c.406-.405.862-.756 1.358-1.044 1.215-.673 2.58-1.03 3.968-1.044 1.1-.014 2.212.2 3.237.627a6.65 6.65 0 0 1 2.6 1.88 8.95 8.95 0 0 1 1.671 3.133 14.62 14.62 0 0 1 .627 4.49 11.36 11.36 0 0 1-2.819 8.145c-1.88 1.984-4.5 2.924-7.936 2.924a10.13 10.13 0 0 1-1.775-.104q-.94-.157-1.566-.313v9.294c-.313 0-.627.104-1.044.104h-1.88c-.313 0-.627-.104-.94-.104V23.842zM51.33 40.76a8.7 8.7 0 0 0 1.566.418 12.03 12.03 0 0 0 2.088.104c.9.023 1.774-.12 2.6-.418a4.5 4.5 0 0 0 1.984-1.358 7.6 7.6 0 0 0 1.358-2.402 10.88 10.88 0 0 0 .522-3.446 9.89 9.89 0 0 0-1.149-5.012c-.813-1.27-2.256-2-3.76-1.88a5.91 5.91 0 0 0-1.88.313 4.18 4.18 0 0 0-1.566 1.044 5.22 5.22 0 0 0-1.149 1.775c-.316.833-.458 1.72-.418 2.6v8.25zm19.006-13.9h-2.6a1.53 1.53 0 0 1-.104-.73v-1.67c0-.313.104-.522.104-.73h6.37v20.258c-.313 0-.627.104-.94.104h-1.88c-.313 0-.627-.104-.94-.104zm12.218 8.04c.104 2.193.627 3.864 1.67 4.804a6.65 6.65 0 0 0 4.804 1.566c1.817.01 3.622-.307 5.326-.94a4.77 4.77 0 0 1 .522 1.462 9.42 9.42 0 0 1 .21 1.67 11.14 11.14 0 0 1-2.819.835c-1.136.217-2.3.322-3.446.313a12.37 12.37 0 0 1-4.7-.73 11.15 11.15 0 0 1-3.237-2.297 8.71 8.71 0 0 1-1.88-3.342 13.47 13.47 0 0 1-.627-4.177c.006-1.408.18-2.8.522-4.177a9.4 9.4 0 0 1 1.775-3.342c.83-.933 1.82-1.7 2.924-2.297a9.69 9.69 0 0 1 4.386-.94 7.81 7.81 0 0 1 6.265 2.715 7.19 7.19 0 0 1 1.566 2.924c.392 1.213.57 2.485.522 3.76v1.15c0 .418-.104.73-.104 1.044zm10.025-2.924a6.75 6.75 0 0 0-.313-2.088 9.25 9.25 0 0 0-.835-1.775 4.25 4.25 0 0 0-1.462-1.253 4.4 4.4 0 0 0-2.088-.418 4.71 4.71 0 0 0-3.655 1.462 7.31 7.31 0 0 0-1.566 4.073zm8.145-8.144c.313 0 .522-.104.835-.104h1.67c.313 0 .522.104.835.104a6.32 6.32 0 0 1 .209 1.566 9.34 9.34 0 0 1 .104 1.67 6.58 6.58 0 0 1 2.193-2.297 6.08 6.08 0 0 1 3.446-.94h.627a.79.79 0 0 1 .522.104c0 .2.104.522.104.73v.835a2.9 2.9 0 0 1-.104.94c0 .313-.104.627-.104.94-.2 0-.418-.104-.627-.104h-.522a6.08 6.08 0 0 0-1.984.313 4.44 4.44 0 0 0-1.775 1.044 5.07 5.07 0 0 0-1.253 2.088 10.02 10.02 0 0 0-.418 3.342V44.1c-.313 0-.627.104-.94.104h-1.88c-.313 0-.73-.104-1.044-.104V23.842zm-22.87-11.894H74l2.715-2.715c-.2-.313-.418-.522-.627-.835a6.04 6.04 0 0 1-.835-.73L72.53 10.37V6.6a3.55 3.55 0 0 0-1.044-.104 3.23 3.23 0 0 0-1.044.104v3.864l-2.82-2.82a2.82 2.82 0 0 0-.835.731c-.2.313-.522.522-.73.835l2.715 2.715H65l-.104 1.044A3.23 3.23 0 0 0 65 14.023h3.864l-2.82 2.82c.413.62.945 1.154 1.566 1.566l2.715-2.715v3.864a3.55 3.55 0 0 0 1.044.104 3.23 3.23 0 0 0 1.044-.104v-3.864l2.715 2.715a2.82 2.82 0 0 0 .835-.731 5.85 5.85 0 0 0 .73-.835L74 14.13h3.864a3.55 3.55 0 0 0 .104-1.044 3.94 3.94 0 0 0-.104-1.15zm-4.804 1.044a5.21 5.21 0 0 1-.21 1.358c-.43.17-.895.24-1.358.2a5.21 5.21 0 0 1-1.358-.21c-.17-.43-.24-.895-.2-1.358a5.21 5.21 0 0 1 .21-1.358c.43-.17.895-.24 1.358-.2a5.21 5.21 0 0 1 1.358.21 6.11 6.11 0 0 1 .209 1.358z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 272 92"
                    width="172"
                    height="70"
                  >
                    <path
                      fill="#EA4335"
                      d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    />
                    <path
                      fill="#4285F4"
                      d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                    />
                    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
                    <path
                      fill="#EA4335"
                      d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                    />
                    <path
                      fill="#4285F4"
                      d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                    />
                  </svg>
                </div>
              </div>
              <div className="container px-5 py-16 mx-auto"></div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="mb-20 text-center">
              <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
                Volunteer
              </span>
              <h2 className="mb-4 font-medium text-black sm:text-5xl title-font">
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
              <div className="container px-5 py-16 mx-auto"></div>
            </div>
          </div>
        </section>
      </section>
      <Footer link="https://github.com/minor/envisionweb/edit/main/pages/index.js" />
    </div>
  );
}
