import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import PostApis from "../Services/postRoutes";
import Swal from "sweetalert2";
import { getCookie } from "../utils/Config";
import { Link, useNavigate } from "react-router-dom";
import TopLoadingBar from "./TopLoadingBar";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const CreatePostCard = () => {
  const navigate = useNavigate();

  const token = getCookie("_auth");

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [openAdd, setOpenAdd] = useState(false);
  const [media, setmedia] = useState([]);
  const [title, setTitle] = useState("");
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const newmedia = [...media];
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      newmedia.push(e.dataTransfer.files[i]);
    }
    setmedia(newmedia);
    setDragging(false);
  };

  const handleFileInputChange = (e) => {
    const newmedia = [...media];
    for (let i = 0; i < e.target.files.length; i++) {
      newmedia.push(e.target.files[i]);
    }
    setmedia(newmedia);
  };

  const handleDelete = (index) => {
    const newmedia = [...media];
    newmedia.splice(index, 1);
    setmedia(newmedia);
  };

  const handleSubmit = async (e) => {
    // console.log(post);
    e.preventDefault();
    const formData = new FormData();
    
    formData.append("title", title);
    for (let i = 0; i < media.length; i++) {
      formData.append("images", media[i]);
    }

    setLoading(true);
    setProgress(0);
    for (let i = 0; i <= 98; i++) {
      await new Promise((resolve) => setTimeout(resolve, 20));
      setProgress(i);
    }
    PostApis.createPost(formData, config)
      .then((res) => {
        console.log(res);
        navigate("/home");
        setProgress(100);
        setLoading(false);
        setOpenAdd(false);
        Swal.fire("Post", `Post successful`, "success");
      })
      .catch((err) => {
        setProgress(100);
        setLoading(false);
        console.log(err);
        setOpenAdd(false);
        Swal.fire(
          "error",
          `Post creation Failed ${err.response.data}`,
          "error"
        );
      });
  };
  return (
    <>
      <TopLoadingBar loading={loading} progress={progress} />

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex items-center space-x-4">
          <img src="" alt="Your Profile" className="w-12 h-12 rounded-full" />

          <input
            type="text"
            value={title}
            placeholder="What's on your mind?"
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
      <Dialog size="xs" open={openAdd} handler={() => setOpenAdd(!openAdd)}>
        <form onSubmit={handleSubmit}>
          <DialogHeader>Create Post</DialogHeader>
          <DialogBody divider>
            <div>
              <textarea
                // type="textarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="What's on your mind?"
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
                  {media.map((image, index) => (
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
          </DialogBody>
          <DialogFooter>
            <Button type="submit" variant="gradient" color="blue">
              <span>post</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default CreatePostCard;
