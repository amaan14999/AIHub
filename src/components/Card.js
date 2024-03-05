"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AIModelContext } from "@/context/AIModelContext";

const Card = ({ model }) => {
  const { toggleLikeModel, likedModels } = useContext(AIModelContext);
  const isLiked = likedModels.has(model.model_name);

  const handleLikeClick = (e) => {
    e.preventDefault(); // Prevent navigation
    toggleLikeModel(model.model_name);
  };

  const modelNameForUrl = encodeURIComponent(
    model.model_name.replace(/\s+/g, "-").toLowerCase()
  );

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Link href={`/models/${modelNameForUrl}`}>
        <Image
          className="w-full h-auto cursor-pointer"
          width={"2000"}
          height={"2000"}
          src={model.img_url}
          alt={model.model_name}
          layout="responsive"
        />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{model.model_name}</div>
        <p className="text-gray-700 text-base">{model.model_description}</p>
      </div>
      <a href={`/models/${modelNameForUrl}`}>Know More</a>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={handleLikeClick}
          className={`${
            isLiked
              ? "bg-red-500 hover:bg-red-700"
              : "bg-blue-500 hover:bg-blue-700"
          } text-white font-bold py-1 px-2 rounded transition duration-300`}
        >
          {isLiked ? "Unlike" : "Like"}
        </button>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Popularity: {model.popularity_measure}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Downloads: {model.downloads}
        </span>
      </div>
    </div>
  );
};

export default Card;
