import axios from "axios";

// auth routes
export const authApi = {
  register: (postData) => {
    return axios.get(
      `${process.env.REACT_APP_BASEURL}/auth/register`,
      postData
    );
  },
  login: (postData) => {
    return axios.post(`${process.env.REACT_APP_BASEURL}/auth/login`, postData);
  },
};
