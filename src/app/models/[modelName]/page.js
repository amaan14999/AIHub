"use client";
import React, { useContext, useState } from "react";
import { AIModelContext } from "@/context/AIModelContext";

const ModelNamePage = ({ params }) => {
  const { modelName } = params;
  const normalizedModelName = decodeURIComponent(modelName).replace(/-/g, " ");
  const { models } = useContext(AIModelContext);

  const model = models.find(
    (model) =>
      model.model_name.toLowerCase() === normalizedModelName.toLowerCase()
  );

  if (!model) {
    return <div>Model not found</div>;
  }
  console.log(model);
  // State for managing likes
  const [likes, setLikes] = useState(model.likes);
  // State to track if the model has been liked by the user
  const [isLiked, setIsLiked] = useState(false);

  // Function to handle like button click
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1); // Decrease like count if already liked
    } else {
      setLikes(likes + 1); // Increase like count if not liked yet
    }
    setIsLiked(!isLiked); // Toggle the isLiked state
  };

  return (
    <div className="mt-4 mx-[60px] p-4 text-black">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{model.model_name}</h1>
          <span className="text-sm font-semibold">
            Category: {model.category}
          </span>
          <div className="flex flex-wrap mt-2">
            {model.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Try Now
          </button>
          <button
            onClick={handleLike}
            className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 font-semibold cursor-pointer"
          >
            Likes: {likes}
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-700 text-base">{model.model_description}</p>
        <div className="text-sm ml-4">
          <p>Popularity: {model.popularity_measure}</p>
          <p>Latency: {model.latency}ms</p>
          <p>Service Level: {model.service_level}</p>
        </div>
      </div>
    </div>
  );
};

export default ModelNamePage;
