import React, { useState } from "react";
import dayjs from "dayjs";
import { PhotoProvider, PhotoView } from "react-photo-view";

import relativeTime from "dayjs/plugin/relativeTime";
import { Avatar } from "@material-tailwind/react";

const PostCard = ({ posts }) => {
  dayjs.extend(relativeTime);

  console.log(posts);

  return (
    <div className="max-w- [800px]">
      {posts?.map((post, index) => (
        <div key={index} className="bg-white p-4 rounded-lg mb-6">
          <div className="flex items-center space-x-4">
            <Avatar
              src={post?.user?.profile_pic}
              alt={post?.user?.firstname}
            />
            <div>
              <h2 className="font-semibold">
                {post?.user?.firstname + " " + post?.user?.lastname}
              </h2>
              <p className="text-gray-500">
                {dayjs(post.createdAt)?.toNow(true)} ago
              </p>
            </div>
          </div>
          <div className="py-2  max-h-40">{post?.title}</div>
          <div>
            <PhotoProvider>
              {post?.media?.slice(0, 1)?.map((item, index) => (
                <div className="flex justify-center items-center">
                  <PhotoView key={index} src={item?.url}>
                    <img
                      src={item?.url}
                      alt={item?.public_id}
                      className="rounded-lg w-full"
                    />
                  </PhotoView>
                </div>
              ))}
              <hr></hr>
              <div className="flex justify-center items-center overflow-x-auto gap-4 p-4">
                {post?.media?.length > 1 &&
                  post?.media?.slice(1)?.map((item, index) => (
                    <PhotoView key={index} src={item?.url}>
                      <img
                        src={item?.url}
                        alt={item?.public_id}
                        className="h-40 flex-auto rounded-lg"
                      />
                    </PhotoView>
                  ))}
              </div>
            </PhotoProvider>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
