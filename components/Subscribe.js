import { useState, useRef } from 'react';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';

const LoadingSpinner = () => (
  <svg
    className="w-5 h-5 text-gray-900 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const ErrorMessage = ({ children }) => (
  <p className="flex items-center text-sm font-bold text-red-700">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 mr-2"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
    {children}
  </p>
);

const SuccessMessage = ({ children }) => (
  <p className="flex items-center text-sm font-bold text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 mr-2"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    {children}
  </p>
);

export default function Subscribe() {
  const [form, setForm] = useState(false);
  const inputEl = useRef(null);
  const { data } = useSWR('/api/subscribers', fetcher);
  const subscriberCount = new Number(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: 'loading' });

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: 'error',
        message: error
      });
      return;
    }

    inputEl.current.value = '';
    setForm({
      state: 'success',
      message: `Yay – you've been added to the list!`
    });
  };

  return (
    <section id="subscribe" className="text-gray-600 body-font">
      <div className="container px-5 pt-4 pb-24 mx-auto">
        <div className="text-center">
          <span className="px-3 py-2.5 mb-3 rounded-10 badge badge-success-soft">
            Subscribe
          </span>
          <h2 className="mb-4 text-3xl font-medium text-black md:text-5xl lg:text-5xl">
            Subscribe to the newsletter.
          </h2>
          <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
            Get emails about all the newest updates at Project enVision U.S.
          </p>
          <div className="flex justify-center mt-6">
            <div className="inline-flex w-16 h-1 mb-5 bg-black rounded-full" />
          </div>
        </div>
        <div className="w-full p-6 mx-auto my-4 border rounded border-lightBlue-200 md:w-1/2 bg-lightBlue-50">
          <form className="relative my-4" onSubmit={subscribe}>
            <input
              ref={inputEl}
              aria-label="Email for newsletter"
              placeholder="john@smith.com"
              type="email"
              autoComplete="email"
              required
              className="block w-full px-4 py-2 mt-1 text-gray-900 bg-white border-gray-300 rounded-md focus:ring-lightBlue-500 focus:border-lightBlue-500"
            />
            <button
              className="absolute flex items-center justify-center h-8 px-4 font-bold text-gray-900 bg-gray-200 rounded right-1 top-1 w-28"
              type="submit"
            >
              {form.state === 'loading' ? <LoadingSpinner /> : 'Subscribe'}
            </button>
          </form>
          {form.state === 'error' ? (
            <ErrorMessage>{form.message}</ErrorMessage>
          ) : form.state === 'success' ? (
            <SuccessMessage>{form.message}</SuccessMessage>
          ) : (
            <p className="text-sm text-gray-800">
              {/* {`${
                subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
              } subscribers – `}
              1 issue */}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
