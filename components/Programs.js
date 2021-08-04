import Link from 'next/link';

export default function Programs() {
  return (
    <section id="programs" className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="mb-20 text-center">
          <span className="px-3 py-2.5 mt-16 mb-3 rounded-10 badge badge-success-soft">
            Programs
          </span>
          <h2 className="mb-4 text-3xl font-medium text-black md:text-5xl lg:text-5xl">
            Project enVision Brands
          </h2>
          <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
            Our organization focuses on many different areas of community work.
            Our main programs are listed below.
          </p>
          <div className="flex justify-center mt-6">
            <div className="inline-flex w-16 h-1 mb-5 bg-black rounded-full"></div>
          </div>
          <div className="container px-5 pt-16 pb-4 mx-auto md:pb-16 lg:pb-16">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                    src="/images/startup.svg"
                  ></img>
                  <div className="w-full">
                    <Link href="/programs/inspire">
                      <a className="mb-5 text-2xl font-medium text-black title-font text-dotted-adaptive">
                        Project enVision Inspire
                      </a>
                    </Link>
                    <p className="mb-2 text-lg">
                      Nonprofit incubator providing mentorship {'&'} financial,
                      legal {'&'} infrastructure support to student-run
                      nonprofits.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                    src="./images/solve.svg"
                  ></img>
                  <div className="w-full">
                    <Link href="/programs/learn">
                      <a className="mb-5 text-2xl font-medium text-black title-font text-dotted-adaptive">
                        Project enVision Learn
                      </a>
                    </Link>
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
                    <Link href="#">
                      <a className="mb-5 text-2xl font-medium text-black title-font text-dotted-adaptive">
                        Project enVision Tutoring
                      </a>
                    </Link>
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
                    src="/images/chapter.svg"
                  ></img>
                  <div className="w-full">
                    <Link href="/programs/chapters">
                      <a className="mb-5 text-2xl font-medium text-black title-font text-dotted-adaptive">
                        Project enVision Chapters
                      </a>
                    </Link>
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
  );
}