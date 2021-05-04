import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { parseISO, format } from 'date-fns';
import Head from 'next/head';

export default function BlogLayout({ children, frontMatter }) {
  const blogLink =
    'https://github.com/envisionnew/envisionnew.org/edit/main/data/blog/' +
    frontMatter.slug +
    '.mdx';
  return (
    <div className="max-h-full text-black bg-white">
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Header />
      <article className="relative text-gray-600">
        <div className="container px-5 mx-auto pt-28">
          <div className="flex flex-col w-full mb-2 text-center md:mb-5 lg:mb-5">
            <h1 className="items-center mb-6 text-4xl font-semibold text-black md:mx-4 lg:mx-4 title-font">
              {frontMatter.title}
            </h1>
            <a
              href={frontMatter.authorBy}
              className="text-lg text-gray-800 text-dotted-adaptive-nohover"
            >
              {frontMatter.by}
            </a>
            <p className="mt-4 mb-2 text-gray-500 text-md min-w-32 md:mt-2">
              {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
            </p>
            <a href="/blog" className="text-gray-500 text-md min-w-32">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-flex items-center w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>{' '}
              Go Back
            </a>
            <br className="hidden lg:block"></br>
          </div>
        </div>
        <div className="flex flex-col justify-center max-w-3xl p-10 mx-auto mb-1 prose items-left md:p-0 lg:p-0">
          {children}
        </div>
      </article>
      <br />
      <Footer link={blogLink} />
    </div>
  );
}
