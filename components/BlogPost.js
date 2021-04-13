import Link from 'next/link';

const BlogPost = ({ title, date, summary, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full p-5 mb-6 border-2 border-red-100 rounded hover:border-indigo-300 ">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-4 text-xl font-medium text-gray-900 md:text-2xl">
              {title}
            </h4>
            <p className="w-48 mt-1 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {date}
            </p>
          </div>
          <p className="text-gray-600">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
