import React, { useState, useEffect } from "react";
import { useAxios } from "../utils/ApiHook";

const PostCard = () => {
  const { data, error, isLoading, ApiRequest } = useAxios();
  useEffect(() => {
    ApiRequest("/post", "GET");
  },[]);
  console.log(data);
  const [showLikeComments, setShowLikeComments] = useState(false);

  const samplePosts = [
    {
      id: 1,
      author: "Friend 1",
      timestamp: "2 hours ago",
      content:
        "This is a sample post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      author: "Friend 2",
      timestamp: "5 hours ago",
      content:
        "Another sample post content. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      author: "Friend 2",
      timestamp: "5 hours ago",
      content:
        "Another sample post content. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      author: "Friend 2",
      timestamp: "5 hours ago",
      content:
        "Another sample post content. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      author: "Friend 2",
      timestamp: "5 hours ago",
      content:
        "Another sample post content. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      author: "Friend 2",
      timestamp: "5 hours ago",
      content:
        "Another sample post content. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      author: "Friend 2",
      timestamp: "5 hours ago",
      content:
        "Another sample post content. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div>
      {samplePosts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={`friend${post.id}-profile-picture.jpg`}
              alt={post.author}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="font-semibold">{post.author}</h2>
              <p className="text-gray-500">{post.timestamp}</p>
            </div>
          </div>
          <p className="mt-4">{post.content}</p>

          {/* Foldable Like and Comments section */}
          <div className="mt-4">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setShowLikeComments(!showLikeComments)}
            >
              {showLikeComments ? "Hide" : "View"} Likes and Comments
            </button>
            {showLikeComments && (
              <div>
                {/* Like Section */}
                <div className="mt-2">
                  <span className="font-semibold">Likes:</span> John Doe, Jane
                  Smith, and 15 others
                </div>

                {/* Comments Section */}
                <div className="mt-2">
                  <div className="bg-gray-200 p-2 rounded-md">
                    <p>
                      Comment 1: Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.
                    </p>
                  </div>
                  <div className="bg-gray-200 p-2 mt-2 rounded-md">
                    <p>Comment 2: Another comment here.</p>
                  </div>
                  {/* Add more comments as needed */}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
