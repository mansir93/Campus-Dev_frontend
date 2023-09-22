import axios from "axios";
import { getCookie } from "../utils/Config";
const token = getCookie("_auth");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
// user routes
export const userApi = {
  getAllUsers: () => {
    return axios.get(`${process.env.REACT_APP_BASEURL}/user`);
  },
  getUserSuggestions: () => {
    return axios.get(
      `${process.env.REACT_APP_BASEURL}/user/suggestions`,
      config
    );
  },
  updateUser: (userId, userData) => {
    return axios.put(
      `${process.env.REACT_APP_BASEURL}/user/${userId}`,
      userData,
      config
    );
  },
  deleteUser: (userId) => {
    return axios.delete(
      `${process.env.REACT_APP_BASEURL}/user/${userId}`,
      config
    );
  },
  getSingleUserById: (userId) => {
    return axios.get(`${process.env.REACT_APP_BASEURL}/user/${userId}`, config);
  },
  followUser: (userId) => {
    return axios.put(
      `${process.env.REACT_APP_BASEURL}/user/${userId}/follow`,
      config
    );
  },
  unfollowUser: (userId) => {
    return axios.put(
      `${process.env.REACT_APP_BASEURL}/user/${userId}/unfollow`,
      config
    );
  },
  getUserFollowers: (userId) => {
    return axios.get(
      `${process.env.REACT_APP_BASEURL}/user/followers/${userId}`,
      config
    );
  },
  getUserFollowings: (userId) => {
    return axios.get(
      `${process.env.REACT_APP_BASEURL}/user/following/${userId}`,
      config
    );
  },
};

export default userApi;

