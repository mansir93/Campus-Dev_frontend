import React, { useState, useEffect } from "react";

import { CgMoreAlt } from "react-icons/cg";
import { BiMessageDots } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import CreatePostCard from "../../Components/CreatePostCard";
import PostCard from "../../Components/PostCard";
import { Link } from "react-router-dom";

function Layout() {
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
    <div className="w-full bg-gray-100 font-sans">
      <nav
        className={`${
          isNavSticky ? "fixed top-0 left-0 right-0" : ""
        } bg-blue-500 p-4 text-white transition-all ease-in-out duration-500`}
      >
        <div className="">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">
              <Link to="/">Campus Dev</Link>
            </h1>
            <div className="hidden md:flex lg:flex space-x-4">
              <Link to="/home" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/home" className="hover:text-gray-300">
                Friends
              </Link>
              <Link to="/home" className="hover:text-gray-300">
                Messages
              </Link>
            </div>
            <div className="flex gap-2">
              <CgProfile size={26} />
              <BiMessageDots size={26} />
              <CgMoreAlt size={26} />
            </div>
          </div>
        </div>
      </nav>

      <div className="mt-4 p-4 flex justify-center">
        <aside className="hidden lg:block w-1/4 p-4 overflow-y-auto">
          <LeftSidebar />
        </aside>
        <main className="w-full h-screen lg:w-1/2 p-4 overflow-y-auto">
          <CreatePostCard />
          <div className="">
            <PostCard />
          </div>
        </main>
        <aside className="hidden lg:block w-1/4 p-4 overflow-y-auto">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}

export default Layout;
