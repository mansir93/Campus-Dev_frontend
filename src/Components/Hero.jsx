import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "../Assets/Heroicons";

const Hero = () => {

  return (
    <section className="w-full pt-16 flex flex-col justify-center items-center h-fit lg:h-[80vh] bg-gray-200">
      <div class="w-full h-full py-28 px-4 text-center bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center bg-blue-200">
        <div class="container mx-auto px-4 md:px-6">
          <h1 class="text-3xl md:text-5xl font-bold text-white">Connect. Learn. Succeed</h1>
          <h3 className="pt-4 text-white">Empowering Tertiary Education in Ghana</h3>
          <p class="pt-4 text-xl font-medium text-white">Your all-in-one platform for studying, connecting, and finding career opportunities</p>
          <div className="mt-6 mx-auto">
            <Link to="/signup" className="rounded-md text-base font-semibold bg-blue-500 text-white shadow-md capitalize hover:bg-blue-600 px-4 py-3 mr-3 box-border transition-all">Join Us</Link>
            <Link to="#" className="rounded-md text-base font-semibold text-blue-500 shadow-md capitalize hover:bg-gray-300 px-4 py-3 bg-gray-50 transition-all">
              Learn More <ChevronRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
