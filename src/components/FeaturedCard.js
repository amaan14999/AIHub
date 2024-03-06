import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as fasHeart,
  faDownload,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { AIModelContext } from "../context/AIModelContext"; // Adjust the path as necessary
import Image from "next/image"; // Assuming you're using Next.js
import Link from "next/link"; // Assuming you're using Next.js

const FeaturedCard = ({ model }) => {
  const { toggleLikeModel, likedModels } = useContext(AIModelContext);
  const isLiked = likedModels.has(model.model_name);

  const modelNameForUrl = encodeURIComponent(
    model.model_name.replace(/\s+/g, "-").toLowerCase()
  );

  return (
    <div className="bg-white py-4 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 hover:shadow-md px-2 transition duration-300 ease-in-out">
      {/* Image Section with rounded corners */}
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
      <div className="col-span-1 md:col-span-2">
        <h3 className="font-bold text-xl mb-2">{model.model_name}</h3>
        <p className="text-gray-700 text-base mb-4">
          {model.model_description}
        </p>
        <div className="grid md:grid-cols-3">
          <div>
            <button onClick={() => toggleLikeModel(model.model_name)}>
              <FontAwesomeIcon
                icon={isLiked ? fasHeart : farHeart}
                className="text-red-500 mr-2"
              />
            </button>
            <span>{model.likes}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faDownload} className="ml-4" />
            <span className="ml-2">{model.downloads}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faChartLine} className="ml-4" />
            <span className="ml-2">{model.popularity_measure}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
