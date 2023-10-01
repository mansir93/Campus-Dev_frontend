import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { Avatar } from "@material-tailwind/react";
import Loading from "./Loading";
// import { GetDominantColor } from "../utils/utils";
import { useDominantColor } from "../utils/utils";
import PostLikesAndComments from "./PostLikesAndComments";

//# component
const MediaItem = ({ item }) => {
  const dominantColor = useDominantColor(item?.url);
  return (
    <div
      className="flex justify-center items-center w-full"
      style={{ backgroundColor: dominantColor }}
    >
      <PhotoView>
        <img src={item?.url} alt={item?.public_id} className="max-h-[500px]" />
      </PhotoView>
    </div>
  );
};

const PostCard = ({ posts }) => {
  const [showAllpics, setShowAllpics] = useState(false);

  useEffect(() => {
    dayjs.extend(relativeTime);
  });
  console.log(posts);

  return (
    <div>
      {!posts ? (
        <Loading />
      ) : (
        posts?.map((post, index) => (
          <div key={index} className="bg-white rounded-lg mb-8">
            <div className="flex items-center space-x-4 p-4">
              <Link to={`/profile/${post?.user?._id}`}>
                <Avatar
                  src={post?.user?.profile_pic}
                  alt={post?.user?.firstname}
                />
              </Link>
              <div>
                <h2 className="font-semibold">
                  {post?.user?.firstname + " " + post?.user?.lastname}
                </h2>
                <p className="text-gray-500">
                  {dayjs(post.createdAt)?.toNow(true)} ago
                </p>
              </div>
            </div>
            <div className="px-4  max-h-40">{post?.title}</div>
            <PhotoProvider>
              {post?.media?.slice(0, 1)?.map((item, index) => (
                <MediaItem item={item} key={index} />
              ))}
              {post?.media?.length > 1 && (
                <div className="px-4 text-gray-400">
                  {showAllpics ? (
                    <button
                      onClick={() => setShowAllpics(!showAllpics)}
                      className="p-4"
                    >
                      less Images
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowAllpics(!showAllpics)}
                      className="p-4"
                    >
                      All Images
                    </button>
                  )}
                </div>
              )}
              <div className="w-full flex justify -between items- center overflow-x-auto gap-4 rounded-b-lg bg-gray-50 p-2">
                {showAllpics &&
                  post?.media?.slice(1)?.map((item, index) => (
                    <PhotoView key={index} src={item?.url}>
                      <img
                        src={item?.url}
                        alt={item?.public_id}
                        className="h-40 rounded-lg "
                      />
                    </PhotoView>
                  ))}
              </div>
            </PhotoProvider>
            <PostLikesAndComments post={post} />
          </div>
        ))
      )}
    </div>
  );
};

export default PostCard;
