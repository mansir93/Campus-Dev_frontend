import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BASEURL}/auth/register`, formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-20 h-fit lg:h-screen bg-blue-400">
      <div className="container mx-auto flex justify-center items-center p-8">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Login</h1>
            <div>
              <h3>Username or Email</h3>
              <input
                class="input-field"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>

            <div>
              <h3>Password</h3>
              <input
                class="input-field"
                type="password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div>
              <button type="submit" id="submit-btn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
