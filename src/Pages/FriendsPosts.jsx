import React, { useState, useEffect } from "react";
import CreatePostCard from "../Components/CreatePostCard";
import PostCard from "../Components/PostCard";
import { useAxios } from "../utils/ApiHook";

const FriendsPosts = () => {
  const { data, error, isLoading, ApiRequest } = useAxios();
  useEffect(() => {
    ApiRequest("/post", "GET");
  }, []);
  // console.log(data);
  return (
    <div className="flex flex-col justify-center max-w-[700px]">
      <CreatePostCard />
      <PostCard posts={data} />
    </div>
  );
};

export default FriendsPosts;
