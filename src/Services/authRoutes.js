import axios from "axios";

// auth routes
 const authApi = {
  register: (postData) => {
    return axios.post(
      `${process.env.REACT_APP_BASEURL}/auth/register`,
      postData
    );
  },
  login: (postData) => {
    return axios.post(`${process.env.REACT_APP_BASEURL}/auth/login`, postData);
  },
};

export default authApi;

