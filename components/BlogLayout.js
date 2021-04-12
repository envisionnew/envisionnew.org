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
      <article className="relative text-gray-600 body-font">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col w-full mb-2 text-center md:mb-5 lg:mb-5">
            <h1 className="items-center mb-6 text-4xl font-semibold text-black md:mx-4 lg:mx-4 title-font">
              {frontMatter.title}
            </h1>
            <a
              href={frontMatter.authorBy}
              className="text-gray-700 text-md text-dotted-adaptive-nohover"
            >
              {frontMatter.by}
            </a>
            <p className="mt-4 text-gray-500 text-md min-w-32 md:mt-2">
              {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
            </p>
            <br className="hidden lg:block"></br>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-3xl p-10 mx-auto mb-2 md:p-0 lg:p-0">
          {children}
        </div>
      </article>
      <br />
      <Footer link={blogLink} />
    </div>
  );
}
