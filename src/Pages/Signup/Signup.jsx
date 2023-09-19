import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import TopLoadingBar from "../../Components/TopLoadingBar";

import { Card, Button, Typography } from "@material-tailwind/react";

import "./Signup.css";
import Layout from "../../Container/Layout";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setProgress(0);
    for (let i = 0; i <= 98; i++) {
      await new Promise((resolve) => setTimeout(resolve, 20));
      setProgress(i); // Update the progress
    }

    axios
      .post(`${process.env.REACT_APP_BASEURL}/auth/register`, formData)
      .then((res) => {
        console.log(res);
        setLoading(false);
        Swal.fire("Sign Up", `Sign up successful`, "success");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        Swal.fire("error", `Sign up Failed ${err.response.data}`, "error");
      });
  };

  return (
    <>
      <Layout>
        <TopLoadingBar loading={loading} progress={progress} />

        <section className="mt-24 lg:m-auto gradient-form h-screen w-full">
          <div className="flex h-full items-center justify-center ">
            <div className="flex flex-col bg-transparent border border-gray-200 rounded-lg shadow md:flex-row  bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="mb-4">
                <div className="flex justify-start items-start p-6">
                  <h3 className="font-bold text-gray-700 text-xl">
                    Campus Dev
                  </h3>
                </div>
                <Card
                  color="transparent"
                  shadow={false}
                  className="px-16 py-4 text-center"
                >
                  <div className="flex flex-col justify-start items-start">
                    <Typography variant="h4" color="blue-gray">
                      Sign Up
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                      Create An Account.
                    </Typography>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                  >
                    <div className="mb-4 flex flex-col">
                      <div className="mb-4">
                        <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          FirstName
                        </label>
                        <input
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstname: e.target.value,
                            })
                          }
                          required
                          placeholder="Kofi.."
                          className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          LastName
                        </label>
                        <input
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastname: e.target.value,
                            })
                          }
                          required
                          placeholder="kwaku.."
                          className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          required
                          placeholder="john@example.com"
                          className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Password
                        </label>
                        <input
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                          type="password"
                          required
                          placeholder="  ********* "
                          className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="mt-4 w-full text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full"
                      fullWidth
                    >
                      Sign up
                    </Button>
                    <div className="py-6">
                      <div className="flex gap-3">
                        <p>Already registered? </p>
                        <Link to="/login" className="text-blue-500">
                          Login{" "}
                        </Link>
                      </div>
                    </div>
                  </form>
                </Card>
              </div>
              <div className="lg:w-1/2  flex flex-col justify-center p-4 leading-normal bg-blue-500">
                {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5> */}
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Access a suite of powerful
                <br /> student tools, including study
                <br />
                resources, productivity apps,
                <br /> and tutoring services, designed
                <br />
                to enhance your academic success.{" "}
              </p> */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Signup;
