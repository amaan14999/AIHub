import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as fasHeart,
  faDownload,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { AIModelContext } from "../context/AIModelContext";
import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ model }) => {
  const { toggleLikeModel, likedModels } = useContext(AIModelContext);
  const isLiked = likedModels.has(model.model_name);

  const modelNameForUrl = encodeURIComponent(
    model.model_name.replace(/\s+/g, "-").toLowerCase()
  );

  return (
    <div className="bg-white py-4 rounded-lg grid sm:grid-cols-3 gap-4 hover:shadow-lg px-4 transition duration-300 ease-in-out border-[1px] border-gray-200">
      {/* Image Section*/}
      <Link href={`/models/${modelNameForUrl}`}>
        <div className="col-span-1 md:col-span-1 overflow-hidden rounded-lg cursor-pointer">
          <Image
            className="rounded-lg"
            width={2000}
            height={2000}
            src={model.img_url}
            alt={model.model_name}
            layout="responsive"
          />
        </div>
      </Link>

      {/* Content Section */}
      <div className="col-span-2">
        <h3 className="font-bold text-xl mb-2">{model.model_name}</h3>
        <p className="text-gray-700 text-base mb-4">
          {model.model_description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div>
            <button
              className="flex sm:justify-center items-center"
              name="likeButton"
              onClick={() => toggleLikeModel(model.model_name)}
            >
              <FontAwesomeIcon
                icon={isLiked ? fasHeart : farHeart}
                className="text-red-500 mr-2"
              />

              <div>{model.likes}</div>
            </button>
          </div>

          <div className="flex sm:justify-center items-center">
            <FontAwesomeIcon icon={faDownload} className="" />
            <div className="ml-2">{model.downloads}</div>
          </div>

          <div className="flex sm:justify-center items-center">
            <FontAwesomeIcon icon={faChartLine} className="" />
            <div className="ml-2">{model.popularity_measure}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
