import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="mb-40">
        {/* <!-- Jumbotron --> */}
        <div className="bg-neutral-50 py-24 px-6 text-center dark:bg-neutral-900">
          <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            Connect, Learn, Succeed
            <br />
            <span className="text-primary">Your Student Hub</span>
          </h1>
          <a
            className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 md:mr-2 md:mb-0"
            href="#!"
          >
           join
          </a>
          <a
            className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
            href="#!"
          >
            Login
          </a>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
  );
};

export default Hero;
