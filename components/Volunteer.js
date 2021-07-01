export default function Volunteer() {
  return (
    <div className="container max-w-5xl py-16 mx-auto">
      <div className="mx-auto md:w-2/3">
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdY_gg4sqEcInV1-I89wTS9Emk5iLGSgf6F4o_OBGWbYUA8zQ/formResponse"
          method="post"
        >
          <div className="flex flex-wrap -m-2">
            <div className="w-1/2 p-2 lg:w-1/3">
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
                  name="entry.693459177"
                  required
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                ></input>
              </div>
            </div>
            <div className="w-1/2 p-2 lg:w-1/3">
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
                  name="entry.1340103720"
                  required
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                ></input>
              </div>
            </div>
            <div className="w-1/2 p-2 lg:w-2/9">
              <div className="relative">
                <label
                  for="contactNumber"
                  className="font-semibold leading-7 text-black text-md"
                >
                  Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="name"
                  required
                  placeholder="000-000-0000"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                ></input>
              </div>
            </div>
            <div className="w-1/2 p-2 lg:w-1/9">
              <div className="relative">
                <label
                  for="contactAge"
                  className="font-semibold leading-7 text-black text-md"
                >
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="contactAge"
                  name="entry.261996454"
                  placeholder="16"
                  required
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                ></input>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  for="contactWhy"
                  className="font-semibold leading-7 text-black text-md"
                >
                  Why do you want to join Project enVision?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contactWhy"
                  name="entry.104252260"
                  required
                  placeholder="Tell us why you want to join Project enVision!"
                  className="w-full px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-28"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  for="message"
                  className="font-semibold leading-7 text-black text-md"
                >
                  What do you hope to gain from Project enVision?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contactMessage"
                  name="entry.1053869924"
                  required
                  placeholder="Tell us what you hope to learn or gain from joining Project enVision!"
                  className="w-full h-24 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  for="extraMessage"
                  className="font-semibold leading-7 text-black text-md"
                >
                  Anything else we should know about you?
                </label>
                <textarea
                  id="extraMessage"
                  name="entry.1257924638"
                  placeholder="Tell us anything else we should know about you!"
                  className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                type="submit"
                aria-label="submit"
                className="flex px-8 py-2 mx-auto text-lg text-black transition delay-300 bg-white border-2 rounded hover:bg-black hover:text-white"
              >
                Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
