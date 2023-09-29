import React, { useState, useEffect, useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useAxios } from "../utils/ApiHook";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
} from "@material-tailwind/react";
import Loading from "./Loading";
import { Context } from "../utils/Context";
import { Link } from "react-router-dom";

const CreatePostCard = () => {
  const { user } = useContext(Context);
  const { data, error, isLoading, ApiRequest } = useAxios();
  console.log(user);

  const initialState = {
    title: "",
    media: [],
  };
  const [post, setPost] = useState(initialState);
  const [dragging, setDragging] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const newMedia = [...post.media];
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      newMedia.push(e.dataTransfer.files[i]);
    }
    setPost({ ...post, media: newMedia });
    setDragging(false);
  };

  const handleFileInputChange = (e) => {
    const newMedia = [...post.media];
    for (let i = 0; i < e.target.files.length; i++) {
      newMedia.push(e.target.files[i]);
    }
    setPost({ ...post, media: newMedia });
  };

  const handleDelete = (index) => {
    const newMedia = [...post.media];
    newMedia.splice(index, 1);
    setPost({ ...post, media: newMedia });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", post.title);

    for (let i = 0; i < post.media.length; i++) {
      formData.append("media", post.media[i]);
    }

    ApiRequest("/post/create", "POST", formData);
  };

  useEffect(() => {
    if (data) {
      setOpenAdd(false);
      setPost(initialState);
    }
    if (error) {
      setOpenAdd(false);
    }
  }, [data, error]);
  return (
    <>
      <div className="w-full bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex items-center space-x-4">
          <Link to={`/profile/${user?._id}`}>
            <Avatar src={user?.profile_pic} alt={user?.firstname} />
          </Link>

          <input
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="What's on your mind?"
            style={{ whiteSpace: "pre" }}
            className="flex-1 p-2 border-gray-100 bg-gray-300 rounded-lg border-none outline-none"
            onClick={() => setOpenAdd(true)}
          />
        </div>
        <div className="mt-4 w-full flex items-center justify-evenly space-x-4">
          <div className="flex items-center space-x-2">
            <AiOutlinePlus />
            <span>live</span>
          </div>
          <div
            className="flex items-center space-x-2"
            onClick={() => setOpenAdd(true)}
          >
            <AiOutlinePlus />
            <span>Photo</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePlus />
            <span>Reels</span>
          </div>
        </div>
      </div>
      <Dialog size="" open={openAdd} handler={() => setOpenAdd(!openAdd)}>
        <form onSubmit={handleSubmit}>
          <DialogHeader>Create Post</DialogHeader>
          <DialogBody divider>
            {isLoading ? (
              <div>
                <Loading />
              </div>
            ) : (
              <div>
                <textarea
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                  value={post.title}
                  placeholder="What's on your mind?"
                  style={{ whiteSpace: "pre" }}
                  className="w-full h-32 text-black p-2 border-gray-100 bg-gray-300 rounded-lg border-none outline-none"
                  onClick={() => setOpenAdd(true)}
                />
                <div
                  htmlFor="fileInput"
                  className={`border-2 border-dashed rounded-lg p-4 ${
                    dragging ? "border-blue-400" : "border-gray-300"
                  }`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={handleDrop}
                >
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700 mt-2 block text-center"
                  >
                    <p className="text-center text-gray-400">
                      Drag & Drop media Here
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileInputChange}
                      className="hidden"
                      id="fileInput"
                    />
                  </label>
                  <div className="flex flex-wrap items-start justify-start">
                    {post.media.map((image, index) => (
                      <div
                        key={index}
                        className="mt-4 flex flex-col items-center"
                      >
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Preview"
                          className="h-20 w-20 object-cover rounded-lg shadow-md mr-4"
                        />
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogBody>
          <DialogFooter>
            <Button
              type="submit"
              disabled={isLoading}
              variant="gradient"
              color="blue"
            >
              post
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default CreatePostCard;
