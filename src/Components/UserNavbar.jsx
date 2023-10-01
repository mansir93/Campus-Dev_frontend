import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";

import { CgMoreAlt } from "react-icons/cg";
import { BiMessageDots } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import { getCookie } from "../utils/Cookie";

const UserNavbar = () => {
  // const navigate = useNavigate();
  // const token = getCookie("social_auth");
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/home");
  //   }
  // });
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavSticky(true);
      } else {
        setIsNavSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className={`${
          isNavSticky ? "fixed top-0 left-0 right-0" : ""
        } bg-blue-500 p-4 text-white transition-all ease-in-out duration-500 z-50`}
      >
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 justify-center items-center">
              <Link to="/" className="text-2xl font-semibold">
                CampusDev
              </Link>

              <form>
                <label className="mb -2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="hidden lg:block relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiOutlineSearch color="gray" />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className=" w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search ..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-1.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-0.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden mr-20 md:flex lg:flex items-center justify-between gap-20 space-x-4">
              <Link to="/" className="hover:text-gray-300">
                <AiTwotoneHome size={34} />
              </Link>
              <Link to="/" className="hover:text-gray-300">
                <FaUsers size={34} />
              </Link>
              <Link to="/" className="hover:text-gray-300">
                <AiFillMessage size={34} />
              </Link>
            </div>
            <div className="flex gap-4">
              <CgProfile size={26} />
              <BiMessageDots size={26} />
              <CgMoreAlt size={26} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
