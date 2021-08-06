export default function Sponsors() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="mb-8 text-center">
          <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
            Sponsors
          </span>
          <h2 className="mb-4 text-3xl font-medium text-black md:text-5xl lg:text-5xl">
            Partnered With Industry-Leading Companies
          </h2>
          <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
            We partner with some of the world's most forward-thinking and
            industry-leading companies. Together, we hope to build a better
            future and a new generation of innovators.
          </p>
          <div className="flex justify-center mt-6">
            <div className="inline-flex w-16 h-1 mb-8 bg-black rounded-full"></div>
          </div>
          <div className="bg-white">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
                <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
                  <img
                    className="h-10 md:mt-4"
                    src="/logos/zapier.svg"
                    alt="Zapier Logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
                  <img
                    className="h-20 -mt-5 md:mt-0"
                    src="/logos/google.svg"
                    alt="Google Logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
                  <img
                    className="h-24 md:-mt-2"
                    src="/logos/microsoft.svg"
                    alt="Microsoft Logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
                  <img
                    className="h-20 mt-4 md:mt-1"
                    src="/logos/amazon.svg"
                    alt="Amazon Logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
                  <img
                    className="h-12 md:mt-4"
                    src="/logos/stripe.svg"
                    alt="Stripe Logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
                  <img
                    className="mt-1.5 h-7 md:mt-6 md:mr-4"
                    src="/logos/intel.svg"
                    alt="Intel Logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
                  <img
                    className="h-8 mt-2 md"
                    src="/logos/streamclub.svg"
                    alt="Stream Club Logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
                  <img
                    className="mt-2.5 ml-8 h-8"
                    src="/logos/closingthedivide.png"
                    alt="Closing The Divide Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
