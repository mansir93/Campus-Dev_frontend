import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useAxios } from "./ApiHook";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const { data, isLoading, ApiRequest } = useAxios();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (data) {
      setUser(data);
      Cookies.set("user", JSON.stringify(data), { expires: 365 });
    }
  }, [data]);

  useEffect(() => {
    const cookieValue = Cookies.get("user");
    if (cookieValue) {
      try {
        setUser(JSON.parse(cookieValue));
      } catch (error) {
        setUser(cookieValue);
      }
    }
  }, []);

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  useEffect(() => {
    ApiRequest("/user/profile", "GET");
  }, []);
  //   useEffect(() => {
  //     ApiRequest("/user/profile", "GET");

  //     const intervalId = setInterval(() => {
  //       ApiRequest("/user/profile", "GET");
  //     }, 600000); // 10 minutes in milliseconds

  //     return () => clearInterval(intervalId);
  //   }, [ApiRequest]);

  return (
    <Context.Provider
      value={{
        user,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
