import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { useForm } from "react-hook-form";
import { NextSeo } from "next-seo";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="text-black bg-white">
      <NextSeo
        title="Contact: nine4"
        description="Contact Us!"
        canonical="https://nine4-1.vercel.app/contact"
        openGraph={{
          url: "https://nine4-1.vercel.app/contact",
        }}
      />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-16 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-2xl font-semibold text-black sm:text-5xl title-font">
              Contact Us
            </h1>
            <p className="mx-auto text-base font-semibold leading-relaxed lg:w-2/3">
              Contact us if you have any issues with the website or just want to
              ask a question!
            </p>
          </div>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    for="name"
                    className="text-sm font-semibold leading-7 text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></input>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    for="email"
                    className="text-sm font-semibold leading-7 text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-black bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></input>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    for="message"
                    className="text-sm font-semibold leading-7 text-black"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-black bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="flex px-8 py-2 mx-auto text-lg text-black bg-white border-0 rounded">
                  Send
                </button>
              </div>
              <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
                <a className="text-indigo-500">contact@website.com</a>
                <p className="my-5 leading-normal">
                  Mountain View, California, United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <Footer />
    </div>
  );
}
