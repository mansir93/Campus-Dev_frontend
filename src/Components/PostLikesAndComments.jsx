import React, { useContext, useState } from "react";
import { Context } from "../utils/Context";
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import { useAxios } from "../utils/ApiHook";

const PostLikesAndComments = ({ post }) => {
  const { ApiRequest } = useAxios();
  const { user } = useContext(Context);
  const [comment, setComment] = useState("");
  const [hideComment, setHideComment] = useState(true);

  const handleLike = () => {
    ApiRequest(`/post/${post._id}/like`, "PUT", { userId: user?._id });
  };
  const handleUnLike = () => {
    ApiRequest(`/post/${post._id}/unlike`, "PUT", { userId: user?._id });
  };
  const handleComment = () => {
    if (comment) {
      ApiRequest(`/post/${post._id}/comment`, "PUT", { comment: comment });
      setComment("");
    }
  };
  return (
    <>
      <div className="w-full p-2">
        <div className="flex justify-between items-center px-4">
          <div>{post?.like?.length}likes</div>
          <divt>{post?.comments?.length}comments</divt>
        </div>
        {/* likes */}
        <div className="flex justify-evenly items-center border-y-2 py-2 my-2">
          <div>
            {post?.like?.includes(user._id) ? (
              <button onClick={handleUnLike}>liked</button>
            ) : (
              <button onClick={handleLike}>like</button>
            )}
          </div>
          <div>
            <label
              htmlFor={`commentbox${post._id}`}
              onClick={() => setHideComment(!hideComment)}
            >
              comments
            </label>
          </div>
          <div>Share</div>
        </div>
        {/* likes */}
        {/* comments */}
        {!hideComment && (
          <div>
            <div className="max-h-40 overflow-y-auto bg-white">
              {post.comments &&
                post?.comments?.map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 mb-4">
                    <Link to={`/profile/${item?.user?._id}`}>
                      <Avatar url={item?.user?.profile_pic} alt="" />
                    </Link>
                    <div>
                      <p>
                        {item?.user?.firstname + " " + item?.user?.lastname}
                      </p>
                      <p>{item?.comment}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex justify-center items- center rounded-lg">
              <textarea
                dir="ltr"
                type="text"
                id={`commentbox${post._id}`}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                className="w-full p-2 h-12 bg-gray-200 outline-none rounded-s-lg"
                placeholder=" Write your comment here!"
              />
              <button
                dir="rtl"
                onClick={() => handleComment()}
                className="bg-blue-400 px-4 text-white rounded-s-lg"
              >
                {" "}
                Comment{" "}
              </button>
            </div>
          </div>
        )}
        {/* comments */}
      </div>
    </>
  );
};

export default PostLikesAndComments;
