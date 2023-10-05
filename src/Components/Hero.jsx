import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full mt-20 flex flex-col justify-center items-center h-fit lg:h-[80vh] bg-gray-200">
      <div className="w-full py-28 px-4 text-center">
        <h1 className="mt-2 mb-16 text-3xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          Connect, Learn, Succeed
          <br />
          <span className="text-blue-500">Your Student Hub</span>
        </h1>
        <Link
          className="mb-2 inline-block rounded bg-blue-500 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 md:mr-2 md:mb-0"
          to="/signup"
        >
          join
        </Link>
        <Link
          className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-gray-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-gray-800 dark:hover:bg-opacity-60"
          to="/login"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default Hero;
