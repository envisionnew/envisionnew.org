export default function Mission() {
  return (
    <section id="about" className="mt-10 text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="mb-20 text-center">
          <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
            Mission
          </span>
          <h2 className="mb-4 text-3xl font-medium text-black md:text-5xl lg:text-5xl">
            For Students <span className="underline">By Students</span>
          </h2>
          <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
            Project enVision U.S. is led by students focused on education and
            youth.
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
                      We are building a large community of young people inspired
                      to pay it forward, <strong>together</strong>.
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
                      Our programs target lower income communities to break the
                      technological and economical divide. Learning should be
                      free!
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
                      Our programs help inspire the next generation to tackle
                      challenging and futuristic problems.
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
                      We work closely with local leaders and community members
                      to strengthen relationships within communities.
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
