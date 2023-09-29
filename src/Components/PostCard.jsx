import React from "react";
import dayjs from "dayjs";
import { PhotoProvider, PhotoView } from "react-photo-view";

import relativeTime from "dayjs/plugin/relativeTime";
import { Avatar } from "@material-tailwind/react";
import Loading from "./Loading";
import { GetDominantColor } from "../utils/utils";

const PostCard = ({ posts }) => {
  dayjs.extend(relativeTime);
  console.log(posts);

  return (
    <div>
      {!posts ? (
        <Loading />
      ) : (
        posts?.map((post, index) => (
          <div key={index} className="bg-white rounded-lg mb-8">
            <div className="flex items-center space-x-4 p-4">
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
            <div className="px-4  max-h-40">{post?.title}</div>
            <div>
              <PhotoProvider>
                {post?.media?.slice(0, 1)?.map((item, index) => (
                  <div
                    className="flex justify-center items-center w-full"
                    style={{ backgroundColor: GetDominantColor(item?.url) }}
                  >
                    <PhotoView key={index} src={item?.url}>
                      <img
                        src={item?.url}
                        alt={item?.public_id}
                        className="max-h-[600px]"
                      />
                    </PhotoView>
                  </div>
                ))}
                {/* <hr className="h-1"/> */}
                <div className="w-full flex justify -between items- center overflow-x-auto gap-4 rounded-b-lg bg-gray-50">
                  {post?.media?.length > 1 &&
                    post?.media?.slice(1)?.map((item, index) => (
                      <div className="flex w-full rounded-lg p-1 mt-1 overflow-x-auto"
                        style={{ backgroundColor: GetDominantColor(item?.url) }}
                      >
                        <PhotoView key={index} src={item?.url}>
                          <img
                            src={item?.url}
                            alt={item?.public_id}
                            className="h-40 flex-1 auto rounded-lg "
                          />
                        </PhotoView>
                      </div>
                    ))}
                </div>
              </PhotoProvider>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostCard;
