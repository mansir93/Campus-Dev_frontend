import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopLoadingBar from "../Components/TopLoadingBar";
import Layout from "../Container/Layout";
import { useAxios } from "../utils/ApiHook";


import { Card, Button, Typography } from "@material-tailwind/react";

const Signup = () => {
  const navigate = useNavigate();
  const { data, isLoading, ApiRequest } = useAxios();
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress(0);
    for (let i = 0; i <= 98; i++) {
      await new Promise((resolve) => setTimeout(resolve, 20));
      setProgress(i);
    }
    ApiRequest("/auth/register", "POST", formData);
  };

  useEffect(() => {
    if (data) {
      navigate("/login");
    }
  }, [data, navigate]);

  return (
    <>
      <Layout>
        <TopLoadingBar loading={isLoading} progress={progress} />
        <div className="flex w-full p-0">
        <div className="m-0 h-screen w-full cover text-white text-7xl hidden lg:flex items-center justify-center lg:w-1/2 bg-blue-800">
          Your Image Here
        </div>

        <div className="m-0 h-screen w-full bg-gray-50 flex items-center justify-center lg:w-1/2">
          <form onSubmit={handleSubmit}
          className="w-3/4">
            <h3 className="font-bold text-gray-700 text-2xl mt-2 text-left block">
              Sign Up
            </h3>
            <p className="text-md font-normal text-gray-700 mb-3">
              Create Your Account.
            </p>
            <div className="mb-6 block">
              <label className="text-left block mb-2 text-sm font-medium text-slate-300 dark:text-white">
                First Name
              </label>
              <input type="text" onChange={(e) => setFormData({
                ...formData,
                firstname: e.target.value,
              })
              } placeholder="Enter first name" className="bg-transparent border border-gray-700 text-gray-800 text-sm md:text-md rounded-md outline-blue-800 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white: dark:focus:outline-blue-800 transition-all" />
            </div>

            <div className="mb-6 block">
              <label className="text-left block mb-2 text-sm font-medium text-slate-300 dark:text-white">
                Last Name
              </label>
              <input type="text" onChange={(e) => setFormData({
                ...formData,
                lastname: e.target.value,
              })
              } placeholder="Enter last name" className="bg-transparent border border-gray-700 text-gray-800 text-sm md:text-md rounded-md outline-blue-800 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white: dark:focus:outline-blue-800 transition-all" />
            </div>

            <div className="mb-6 block">
              <label className="text-left block mb-2 text-sm font-medium text-slate-300 dark:text-white">
                Email
              </label>
              <input type="email" onChange={(e) => setFormData({
                ...formData,
                email: e.target.value,
              })
              } required placeholder="student@email.com" className="bg-transparent border border-gray-700 text-gray-900 text-sm md:text-md rounded-md outline-blue-800 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white: dark:focus:outline-blue-800 transition-all" />
            </div>

            <div className="mb-6 block">
              <label className="text-left block mb-2 text-sm font-medium text-slate-300 dark:text-white">
                Password
              </label>
              <input type="password" onChange={(e) => setFormData({
                ...formData,
                password: e.target.value,
              })
              } required placeholder="Enter password" className="bg-transparent border border-gray-700 text-gray-900 text-sm md:text-md rounded-md outline-blue-800 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white: dark:focus:outline-blue-800 transition-all" />
            </div>

            <Button type="submit" className="mt-2.5 w-full text-white bg-blue-800 hover:bg-blue-900 p-2 rounded-md lg:w-fit block lg:px-16 lg:py-3 lg:mx-auto font-semibold text-md cursor-pointer transition-all capitalize hover:ring-0">
              Create Account
            </Button>

            <div className="text-md text-gray-700 font-medium mt-3">
              Already have an account?
              <Link to="/login" className="text-blue-800 hover:text-blue-900 transition-all"> Sign in</Link>
            </div>
          </form>
        </div>
        </div>
      </Layout>
    </>
  );
};

export default Signup;
