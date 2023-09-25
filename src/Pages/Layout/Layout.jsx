import React from "react";

import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

import { Route, Routes } from "react-router-dom";
import FriendsPosts from "../FriendsPosts";
import AllPosts from "../AllPosts";
import UserNavbar from "../../Components/UserNavbar";
import Profile from "../Profile";

function Layout() {
  return (
    <div className="w-full bg-gray-300 font-sans overflow-y-auto">
      <UserNavbar />

      <div className="w-full mt-2 p-4 flex justify-center">
        <aside className="hidden md:flex lg:flex flex-col lg:fixed top-20 left-0 w-1/4 p-4 overflow-y-auto">
          <LeftSidebar />
        </aside>
        <main className="w-full lg:w-1/2 mx-auto px-4">
          <Routes>
            <Route path="/" element={<FriendsPosts />} />
            <Route path="/explore" element={<AllPosts />} />
          </Routes>
        </main>
        <aside className="hidden lg:flex flex-col fixed top-20 right-0 w-1/4 p-4 overflow-y-auto">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}

export default Layout;
