import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as fasHeart,
  faDownload,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { AIModelContext } from "@/context/AIModelContext";

const Card = ({ model }) => {
  // Get the likedModels and toggleLikeModel function from the context
  const { toggleLikeModel, likedModels } = useContext(AIModelContext);

  const [likes, setLikes] = useState(model.likes);

  // Check if the model is liked
  const isLiked = likedModels.has(model.model_name);

  const handleLikeClick = (e) => {
    e.preventDefault(); // Stop the link from triggering
    toggleLikeModel(model.model_name);
    if (isLiked) {
      // If the model is already liked, decrease the likes by one
      setLikes(likes - 1);
    } else {
      // If the model is not liked, increase the likes by one
      setLikes(likes + 1);
    }
  };

  // Encode the model name for the URL path
  const modelNameForUrl = encodeURIComponent(
    model.model_name.replace(/\s+/g, "-").toLowerCase()
  );

  return (
    <div className="overflow-hidden hover:shadow-2xl shadow-lg m-4 bg-white p-6 rounded-xl flex flex-col justify-between border-[1px] border-gray-100">
      <Link href={`/models/${modelNameForUrl}`} passHref>
        <Image
          src={model.img_url}
          alt={model.model_name}
          width={2000}
          height={2000}
          layout="responsive"
          className="cursor-pointer rounded-xl mb-4"
        />
      </Link>
      <div className="flex flex-col justify-between">
        <div className="font-bold text-xl mb-2">{model.model_name}</div>

        <p className="text-gray-700 text-base mb-4">
          {model.model_description}
        </p>

        <Link href={`/models/${modelNameForUrl}`} passHref>
          <div className="text-main-bg hover:text-main-bg-dark font-semibold transition duration-300 mb-4 inline-block">
            Know More
          </div>
        </Link>

        <div className="flex items-center justify-between mt-4">
          <div>
            <button name="likeButton" onClick={handleLikeClick}>
              <FontAwesomeIcon
                icon={isLiked ? fasHeart : farHeart}
                className="text-red-500 mr-2"
              />
            </button>
            <span>{likes}</span>
          </div>

          <div className="text-center">
            <FontAwesomeIcon icon={faDownload} className="text-gray-600 mr-2" />
            <span>{model.downloads}</span>
          </div>
          <div className="text-center">
            <FontAwesomeIcon
              icon={faChartLine}
              className="text-gray-600 mr-2"
            />
            <span>{model.popularity_measure}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
