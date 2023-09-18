import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const CreatePostCard = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [images, setImages] = useState([]);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const newImages = [...images];
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      newImages.push(e.dataTransfer.files[i]);
    }
    setImages(newImages);
    setDragging(false);
  };

  const handleFileInputChange = (e) => {
    const newImages = [...images];
    for (let i = 0; i < e.target.files.length; i++) {
      newImages.push(e.target.files[i]);
    }
    setImages(newImages);
  };

  const handleDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex items-center space-x-4">
          <img
            src="your-profile-picture.jpg"
            alt="Your Profile"
            className="w-12 h-12 rounded-full"
          />

          <input
            type="text"
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
            <span>Photo/Video</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePlus />
            <span>Reels</span>
          </div>
        </div>
      </div>
      <Dialog size="xs" open={openAdd} handler={() => setOpenAdd(!openAdd)}>
        <DialogHeader>Create Post</DialogHeader>
        <DialogBody divider>
          <div>
            <textarea
              // type="textarea"
              placeholder="What's on your mind?"
              className="w-full p-2 border-gray-300 bg-gray-100 rounded-lg border-none outline-none"
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
                  Drag & Drop Images Here
                </p>
                <input
                  type="file"
                  accept="image/* video/*"
                  multiple
                  onChange={handleFileInputChange}
                  className="hidden"
                  id="fileInput"
                />
              </label>
              <div className="flex flex-wrap items-start justify-start">
                {images.map((image, index) => (
                  <div key={index} className="mt-4 flex flex-col items-center">
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
          <Button variant="gradient" color="blue">
            <span>post</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default CreatePostCard;
