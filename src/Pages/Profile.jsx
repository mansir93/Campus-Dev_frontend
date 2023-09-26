import React, { useState, useEffect } from "react";
import UserNavbar from "../Components/UserNavbar";
import { GoVerified } from "react-icons/go";
import { useAxios } from "../utils/ApiHook";
import { useParams } from "react-router";
import Loading from "../Components/Loading";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CreatePostCard from "../Components/CreatePostCard";
import PostCard from "../Components/PostCard";

const Profile = () => {
  const { data, isLoading, ApiRequest } = useAxios();
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    ApiRequest(`/user/${id}`, "GET");
  }, []);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);
  const [activeTab, setActiveTab] = React.useState(1);

  const [IsTabSticky, setIsTabSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 430) {
        setIsTabSticky(true);
      } else {
        setIsTabSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <UserNavbar />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto bg-white mb-4">
          <div className="h-full bg-gray-200">
            <div className="bg-white rounded-lg shadow-lg pb-2">
              <div className="min w-full h-[200px] lg:h-[300px]">
                <img
                  src={user?.cover_pic}
                  className="w-full h-full rounded-tl-lg rounded-tr-lg"
                  alt={user?.firstname}
                />
              </div>
              <div className="flex flex-col items-center justify-start -mt-20 ml-5">
                <img
                  src={user?.profile_pic}
                  className="w-40 h-40 border-4 border-white rounded-full"
                  alt=""
                />
                <div className="flex items-center space-x-2 mt-2">
                  <p className="text-2xl">{user?.firstname}</p>
                  {user?.status && (
                    <span className="rounded-full px- 2 text-green-700">
                      <GoVerified />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Tabs value={activeTab} className="container mx-auto">
        <div className="flex justify-between shadow-lg items-center ">
          <div
            className={`w-1/2 mx- auto p-4 text- center transition-all ${
              IsTabSticky
                ? "fixed text-center mx-auto top-16 left-0 right-0 z-40 w-full shadow-lg rounded-full bg-gray-200"
                : ""
            }`}
            // className="w-1/2"
          >
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
              }}
            >
              <Tab
                value={1}
                onClick={() => setActiveTab(1)}
                className={activeTab === 1 ? "text-gray-900" : ""}
              >
                Posts
              </Tab>
              <Tab
                value={2}
                onClick={() => setActiveTab(2)}
                className={activeTab === 2 ? "text-gray-900" : ""}
              >
                2
              </Tab>
              <Tab
                value={3}
                onClick={() => setActiveTab(3)}
                className={activeTab === 1 ? "text-gray-900" : ""}
              >
                3
              </Tab>
            </TabsHeader>
          </div>
          <div className="">more</div>
        </div>
        <TabsBody>
          <TabPanel value={1}>
            {" "}
            <div className="flex flex-col lg:flex-row md:flex-row justify-center">
              <div className="lg:w-2/5 md:w-1/3 p-4 rounded-lg shadow-md ">
                intro
              </div>
              <div className=" lg:w-3/5  md:w-2/3 py-4 rounded-lg">
                <CreatePostCard />
                <PostCard />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={2}>2</TabPanel>
          <TabPanel value={3}>3</TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Profile;
