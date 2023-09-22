import axios from "axios";
import { getCookie } from "../utils/Config";
const token = getCookie("_auth");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const postApi = {
  createPost: (postData, config) => {
    return axios.post(
      `${process.env.REACT_APP_BASEURL}/post/create`,
      postData,
      config
    );
  },
  getExplorePosts: () => {
    return axios.get(`${process.env.REACT_APP_BASEURL}/post/explore`);
  },
  getUserBaseFeed: () => {
    return axios.get(`${process.env.REACT_APP_BASEURL}/post`, config);
  },
  updatePost: (postId, postData) => {
    return axios.put(
      `${process.env.REACT_APP_BASEURL}/post/${postId}`,
      postData,
      config
    );
  },
  deletePost: (postId) => {
    return axios.delete(
      `${process.env.REACT_APP_BASEURL}/post/${postId}`,
      config
    );
  },
  getSinglePostById: (postId) => {
    return axios.get(`${process.env.REACT_APP_BASEURL}/post/${postId}`);
  },
  likePost: (postId) => {
    return axios.put(
      `${process.env.REACT_APP_BASEURL}/post/${postId}/like`,
      config
    );
  },
  dislikePost: (postId) => {
    return axios.put(
      `${process.env.REACT_APP_BASEURL}/post/${postId}/dislike`,
      config
    );
  },
  commentOnPost: (postId, commentData) => {
    return axios.put(
      `${process.env.REACT_APP_BASEURL}/post/${postId}/comment`,
      commentData,
      config
    );
  },
  deleteComment: (postId, commentId) => {
    return axios.delete(
      `${process.env.REACT_APP_BASEURL}/post/${postId}/comment/${commentId}`,
      config
    );
  },
  getTimelinePosts: (userId) => {
    return axios.get(
      `${process.env.REACT_APP_BASEURL}/post/timeline/${userId}`
    );
  },
};

export default postApi;
