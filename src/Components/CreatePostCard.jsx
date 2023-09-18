import React from "react";
import { AiOutlinePlus } from "react-icons/ai";


const CreatePostCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center space-x-4">
        <img
          src="your-profile-picture.jpg"
          alt="Your Profile"
          className="w-12 h-12 rounded-full"
        />
        <textarea
          placeholder="What's on your mind?"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none"
        ></textarea>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Post
        </button>
        <div className="flex items-center space-x-2">
          <AiOutlinePlus />
          <span>Add Photo/Video</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePostCard;
