import React, { useEffect } from "react";
import CreatePostCard from "../Components/CreatePostCard";
import PostCard from "../Components/PostCard";
import { useAxios } from "../utils/ApiHook";

const FriendsPosts = () => {
  const { data, ApiRequest } = useAxios();
  useEffect(() => {
    ApiRequest("/post", "GET");
  });
  return (
    <div className="flex flex-col justify-center w-full max-w-[700px]">
      <CreatePostCard />
      <PostCard posts={data} />
    </div>
  );
};

export default FriendsPosts;
