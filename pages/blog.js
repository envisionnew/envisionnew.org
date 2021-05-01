import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPost from '../components/BlogPost';
import Head from 'next/head';
import { getAllFilesFrontMatter } from '../lib/mdx';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <div className="max-h-full text-black bg-white">
      <NextSeo
        title="Blog | Project enVision U.S."
        description="Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere."
        canonical="https://envisionnew.org/blog/"
        openGraph={{
          url: 'https://envisionnew.org/blog/',
          title: 'Project enVision U.S.',
          images: [
            {
              url: '/favicon/send.png',
              alt:
                'Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere.'
            }
          ],
          description:
            'Project enVision U.S. is a 501(c)-3 nonprofit organization dedicated to providing educational services to students everywhere.',
          site_name: 'Project enVision U.S.'
        }}
      />
      <Head>
        <title>Blog | Project enVision</title>
      </Head>
      <Header />
      <section className="relative text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-12 mx-auto">
          <div className="flex flex-col w-full text-center">
            <h1 className="text-6xl font-semibold text-black title-font">
              Blog
            </h1>
            <br className="hidden lg:block"></br>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-3xl mx-5 md:mx-auto lg:mx-auto">
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
      </section>
      <br />
      <Footer link="https://github.com/envisionnew/envisionnew.org/edit/main/pages/blog.js" />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
