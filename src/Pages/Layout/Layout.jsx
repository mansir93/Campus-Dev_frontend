import React, { useState, useEffect } from "react";

import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

import { Route, Routes } from "react-router-dom";
import FriendsPosts from "../FriendsPosts";
import AllPosts from "../AllPosts";
import UserNavbar from "../../Components/UserNavbar";

function Layout() {
  return (
    <div className="w-full bg-gray-200 font-sans">
      <UserNavbar />

      <div className="mt-2 p-4 flex justify-center">
        <aside className="hidden lg:block w-1/4 p-4 overflow-y-auto">
          <LeftSidebar />
        </aside>
        <main className="w-full h-screen lg:w-1/2 p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<FriendsPosts />} />
            <Route path="/explore" element={<AllPosts />} />
          </Routes>
        </main>
        <aside className="hidden lg:block w-1/4 p-4 overflow-y-auto">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}

export default Layout;
