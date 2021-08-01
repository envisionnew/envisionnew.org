export default function Volunteer() {
  return (
    <div className="container max-w-5xl py-4 mx-auto">
      <div className="mx-auto md:w-2/3">
        <form
          action="https://docs.google.com/forms/d/178H2S6xBjw4WB-AhlVyanhp9atvJnqK7Jo4SiydYSWo/formResponse"
          method="post"
        >
          <div className="flex flex-wrap -m-2">
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="contactName"
                  className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  placeholder="John Smith"
                  name="entry.1666910483"
                  required
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                ></input>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="contactEmail"
                  className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  placeholder="john@smith.com"
                  name="entry.1988154992"
                  required
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                ></input>
              </div>
            </div>
            <div className="w-1/2 p-2 lg:w-1/4">
              <div className="relative">
                <label
                  htmlFor="contactNumber"
                  className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                >
                  Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="entry.1246873698"
                  required
                  placeholder="000-000-0000"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                ></input>
              </div>
            </div>
            <div className="w-1/2 p-2 lg:w-1/5">
              <div className="relative">
                <label
                  htmlFor="contactAge"
                  className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                >
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="contactAge"
                  name="entry.343281526"
                  placeholder="16"
                  required
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                ></input>
              </div>
            </div>
            <div className="w-full p-2 lg:w-55">
              <div className="relative">
                <label
                  htmlFor="contactDiscord"
                  className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                >
                  Discord Handle <span className="text-red-500">*</span>
                </label>
                <input
                  id="contactDiscord"
                  placeholder="johnsmith#8080"
                  name="entry.1285128019"
                  required
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                ></input>
              </div>
            </div>

            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="contactWhy"
                  className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                >
                  Why do you want to join Project enVision?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contactWhy"
                  name="entry.42834851"
                  required
                  placeholder="Tell us why you want to join Project enVision! What are your strengths and where do you want to help out?"
                  className="w-full px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white h-28"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="extraMessage"
                  className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                >
                  Anything else we should know about you?
                </label>
                <textarea
                  id="extraMessage"
                  name="entry.1595805614"
                  placeholder="Tell us anything else we should know about you!"
                  className="w-full h-24 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                type="submit"
                aria-label="submit"
                className="flex px-8 py-2 mx-auto text-lg text-white transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-800 dark:text-gray-200 dark:bg-white"
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
