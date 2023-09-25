import React, { useState, useEffect } from "react";
import UserNavbar from "../Components/UserNavbar";
// import { MdPending } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { useAxios } from "../utils/ApiHook";
// import { Context } from "../utils/Context";
import { useParams } from "react-router";
import Loading from "../Components/Loading";

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

  return (
    <div>
      <UserNavbar />
      <div className="container mx-auto bg-white p-4 rounded- lg shadow- md mb-6">
        {isLoading ? (
          <Loading />
        ) : (
          <div className=" h-full bg-gray-200">
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
        )}
      </div>
    </div>
  );
};

export default Profile;
