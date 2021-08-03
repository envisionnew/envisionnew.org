import Link from 'next/link';
import { parseISO, format } from 'date-fns';

const BlogPost = ({ title, date, summary, slug }) => {
  return (
    <li className="py-8">
      <article className="max-w-xl">
        <div className="xl:col-span-3">
          <div>
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-sm font-light leading-6 text-gray-500">
                <time>{format(parseISO(date), 'MMMM dd, yyyy')}</time>
              </dd>
            </dl>
            <h3 className="my-3 text-2xl font-bold leading-8 tracking-tight hover:underline">
              <Link href={`/blog/${slug}`}>
                <a className="text-gray-900">{title}</a>
              </Link>
            </h3>
          </div>
          <div className="prose text-gray-900 max-w-none">{summary}</div>
          <div className="pt-4">
            <Link href={`/blog/${slug}`}>
              <a className="text-primary dark:text-gray-100 flex items-center space-x-0.5 group">
                <span>Read more </span>
                <span className="transition transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
};

export default BlogPost;
