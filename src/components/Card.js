import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as fasHeart,
  faDownload,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { AIModelContext } from "@/context/AIModelContext"; // Ensure the correct path

const Card = ({ model }) => {
  const { toggleLikeModel, likedModels } = useContext(AIModelContext);
  const isLiked = likedModels.has(model.model_name);

  const handleLikeClick = (e) => {
    e.preventDefault(); // Stop the link from triggering
    toggleLikeModel(model.model_name);
  };

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
            <button onClick={() => toggleLikeModel(model.model_name)}>
              <FontAwesomeIcon
                icon={isLiked ? fasHeart : farHeart}
                className="text-red-500 mr-2"
              />
            </button>
            <span>{model.likes}</span>
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
