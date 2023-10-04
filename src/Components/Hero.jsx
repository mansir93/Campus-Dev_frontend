import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BannerSVG } from "../Assets/banner_illustration.svg";

const Hero = () => {
  return (
    <section className="flex flex-wrap items-center mx-0 font-sans px-5 w-full pb-20 mt-24">
      <div className="px-1 w-full lg:w-1/2">
        <div className="mx-auto mb-8 text-center w-full lg:mx-0 lg:text-left">
          <h2 className="mb-4 text-4xl font-bold text-center lg:text-left lg:text-5xl text-gray-400">
            Connect. Learn. Succeed
          </h2>
          <h3 className="text-blue-800 text-4xl text-center lg:text-left font-semibold sm:text-1xl">Your Student Hub</h3>
          <p className="block text-slate-300 font-medium text-sm mt-4 md:text-md md:font-semibold">
            "The best way to predict the future is to create it"
            <span className="text-right md:text-center block">~Abraham Lincoln</span>
          </p>
          <p className="block text-slate-400 font-normal text-lg md:text-1xl md:font-semibold mt-3">
            Join our community today!
          </p>
        </div>
        <div className="text-center lg:text-left">
          <Link to="/signup" className="block py-4 px-8 text-sm font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded shadow-md transition-all mb-4 md:mb-0 md:inline md:mr-3">
            Join
          </Link>

          <Link to="/login" className="block py-4 px-8 text-sm font-semibold text-slate-400 bg-gray-100 hover:bg-gray-400 rounded shadow-md transition-all mb-4 md:mb-0 md:inline">
            Log In
          </Link>
        </div>
      </div>
      <div className="w-full mt-4 lg:w-1/2 px-0">
        <BannerSVG />
      </div>
    </section>
  );
};

export default Hero;
