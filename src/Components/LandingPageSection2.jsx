import React from "react";
import SectionImage from "../Assets/brad-neathery-XrSzacdYbtQ-unsplash.jpg";

const SecondSection = () => {
  return (
    <section className="flex flex-wrap items-center px-0 mx-0 w-full lg:h-max">
      <div className="p-8 w-full lg:w-1/2 mx-0 bg-blue-800 text-white h-fit">
          <h2 className="text-2xl text-center text-gray-100 font-semibold">
            Empowering Students for a Brighter Future
          </h2>
          <p className="text-md text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque illum, ipsa adipisci, dolorum exercitationem dignissimos doloribus asperiores deleniti inventore explicabo quia, labore rerum? Necessitatibus, pariatur. Nihil commodi odit suscipit asperiores.
          </p>
      </div>

      <div className="w-full lg:w-1/2 mx-0 px-0 h-14">
        <img src={SectionImage} alt="Male juvenile writing in a book with his head down" className="max-h-fit" />
      </div>
    </section>
  );
};

export default SecondSection;