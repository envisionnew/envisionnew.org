import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="text-black body-font">
      <div className="container flex flex-col items-center px-5 py-4 mx-auto sm:flex-row">
        <Link href="/">
          <a className="flex items-center justify-center text-xl font-medium md:ml-3 title-font md:justify-start">
            PROJECT ENVISION U.S.
          </a>
        </Link>
        <span className="border-css" />
        <p className="flex items-center justify-center text-sm font-medium md:ml-5 title-font md:justify-start">
          EIN: 81-5333016
        </p>
        <span className="border-css" />
        <a
          className="flex items-center justify-center text-sm font-medium md:ml-5 title-font md:justify-start"
          href={
            router.pathname === '/'
              ? `https://github.com/envisionnew/envisionnew.org/edit/main/pages/index.js`
              : `https://github.com/envisionnew/envisionnew.org/edit/main/pages${router.pathname}.js`
          }
        >
          Edit on GitHub
        </a>
        <span className="border-css" />
        <a
          className="flex items-center justify-center font-medium title-font md:justify-start"
          href="https://vercel.com/?utm_source=envisionnew&utm_campaign=oss"
        >
          <span className="sr-only">Vercel Logo</span>
          <img
            className="h-8 mb-2 ml-0 md:mb-0 lg:mb-0 md:ml-5"
            alt="Vercel Sponsorship Logo"
            src="/images/powered-by-vercel.svg"
          />
        </a>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a aria-label="mail" href="mailto:support@envisionnew.org">
            <span className="sr-only">Mail</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a
            aria-label="twitter"
            className="ml-3"
            href="https://twitter.com/envisionnew"
          >
            <span className="sr-only">Twitter</span>
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a
            aria-label="instagram"
            className="ml-3"
            href="https://instagram.com/project.envision"
          >
            <span className="sr-only">Instagram</span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            aria-label="linkedin"
            className="ml-3"
            href="https://www.linkedin.com/company/projectenvision"
          >
            <span className="sr-only">Linkedin</span>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
          <a
            aria-label="github"
            className="ml-3"
            href="https://github.com/envisionnew/"
          >
            <span className="sr-only">GitHub</span>
            <svg
              data-v-54e46119=""
              width="30"
              height="20"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              title="GitHub logo"
              className="w-5 h-5"
            >
              <path
                data-v-54e46119=""
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3019 0C5.50526 0 0 5.50526 0 12.3019C0 17.7392 3.52669 22.3458 8.4127 23.977C9.0244 24.0902 9.25095 23.7126 9.25095 23.3804C9.25095 23.0858 9.2434 22.3156 9.23585 21.2885C5.81488 22.0286 5.08991 19.6422 5.08991 19.6422C4.53108 18.2225 3.72304 17.8373 3.72304 17.8373C2.60537 17.0746 3.80611 17.0897 3.80611 17.0897C5.03705 17.1803 5.69405 18.3584 5.69405 18.3584C6.78906 20.2388 8.57129 19.6951 9.27361 19.3779C9.38688 18.585 9.70406 18.0412 10.0514 17.7316C7.32524 17.4295 4.45556 16.3723 4.45556 11.66C4.45556 10.3158 4.93132 9.22074 5.72426 8.35984C5.59588 8.04266 5.17298 6.79662 5.83754 5.10501C5.83754 5.10501 6.87213 4.77274 9.22074 6.36616C10.2025 6.0943 11.2522 5.95837 12.3019 5.95082C13.344 5.95837 14.4013 6.0943 15.383 6.36616C17.7316 4.77274 18.7662 5.10501 18.7662 5.10501C19.4383 6.79662 19.0154 8.05021 18.887 8.35984C19.6724 9.22074 20.1482 10.3158 20.1482 11.66C20.1482 16.3874 17.271 17.422 14.5297 17.7316C14.9677 18.1092 15.3679 18.8644 15.3679 20.0123C15.3679 21.6586 15.3528 22.9801 15.3528 23.3879C15.3528 23.7202 15.5718 24.0978 16.1986 23.977C21.0846 22.3458 24.6038 17.7392 24.6038 12.3094C24.6038 5.50526 19.0985 0 12.3019 0Z"
                fill="black"
              ></path>
            </svg>
          </a>
        </span>
      </div>
      <div className="container flex flex-col items-center px-4 pb-8 mx-auto md:px-5 sm:flex-row">
        <span className="flex items-center justify-center text-sm font-medium text-center md:justify-start md:ml-3">
          Project enVision U.S. is a PVSA certifying 501(c)(3) non-profit
          organization.
        </span>
      </div>
    </footer>
  );
}
