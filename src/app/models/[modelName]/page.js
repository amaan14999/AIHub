"use client";
import React, { useContext, useEffect, useState } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import CodeSnippet from "@/components/CodeSnippet";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as farHeart,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as fasHeart,
  faDownload,
  faChartLine,
  faCheck,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

const ModelNamePage = ({ params }) => {
  const { modelName } = params;
  const normalizedModelName = decodeURIComponent(modelName).replace(/-/g, " ");
  const { models, toggleLikeModel, likedModels } = useContext(AIModelContext);

  const model = models.find(
    (m) => m.model_name.toLowerCase() === normalizedModelName.toLowerCase()
  );

  // Initialize isLiked based on whether the model is in the likedModels set
  const [isLiked, setIsLiked] = useState(
    likedModels.has(model ? model.model_name : "")
  );

  const [activeLink, setActiveLink] = useState("introduction");

  // Update isLiked state when likedModels changes or the model is updated
  useEffect(() => {
    setIsLiked(likedModels.has(model ? model.model_name : ""));
  }, [likedModels, model]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove '#' from hash
      setActiveLink(hash || "introduction");
    };

    window.addEventListener("hashchange", handleHashChange);

    // Initial call to set based on current URL hash
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  const handleLike = () => {
    if (model) {
      toggleLikeModel(model.model_name);
    }
  };

  if (!model) {
    return <Loader />;
  }
  const getLinkClasses = (link) =>
    `inline-block w-1/2 text-left py-2 hover:bg-main-bg hover:text-white transition duration-300 p-4 rounded-lg ${
      activeLink === link ? "bg-main-bg text-white" : "text-black"
    }`;

  return (
    <>
      <Navbar />
      <div className="flex md:max-w-[1200px] mx-auto lg:p-10">
        {/* Sidebar for navigation */}
        <div className="hidden lg:block w-1/4">
          <ul className="sticky top-0 pt-2">
            <li className="my-1">
              <a
                href="#introduction"
                className={getLinkClasses("introduction")}
              >
                Introduction
              </a>
            </li>
            <li className="my-1">
              <a href="#usage" className={getLinkClasses("usage")}>
                Usage
              </a>
            </li>
            <li className="my-1">
              <a href="#sample-code" className={getLinkClasses("sample-code")}>
                Sample Code
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-4">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{model.model_name}</h1>
              <p className="py-4">Category: {model.category}</p>
              {model.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 lg:mt-0 lg:flex lg:flex-col items-end">
              <div>
                <button onClick={handleLike}>
                  <FontAwesomeIcon
                    icon={isLiked ? fasHeart : farHeart}
                    className="text-red-500 mr-2 font-semibold text-lg"
                  />
                </button>
                <span className="text-lg font-semibold">{model.likes}</span>
                <button className="bg-main-bg text-white ml-6 font-bold py-2 px-4 rounded hover:bg-main-bg-dark transition duration-300">
                  Try Now
                </button>
              </div>

              <div className="flex justify-between items-center mt-4 gap-4">
                <div className="text-center">
                  <FontAwesomeIcon icon={faDownload} />
                  <span className="ml-1">{model.downloads}</span>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon icon={faChartLine} />
                  <span className="ml-1">{model.popularity_measure}</span>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="ml-1">{model.latency}ms</span>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon icon={faCheck} />
                  <span className="ml-1">{model.service_level}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div id="introduction" className="my-6">
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p>{model.introduction.text}</p>
            <ul className="list-disc pl-6 mt-2">
              {model.introduction.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Usage */}
          <div id="usage" className="my-6">
            <h2 className="text-xl font-semibold">Usage</h2>
            <p className="mb-6">{model.usage.description}</p>
            <p>
              <strong>Input Format:</strong> {model.usage.input_format}
            </p>
            <p>
              <strong>Output Format:</strong> {model.usage.output_format}
            </p>
          </div>

          {/* Sample Code */}
          <div id="sample-code" className="my-6">
            <h2 className="text-xl font-semibold">Sample Code</h2>
            <CodeSnippet code={model.codesnippets.python} language="Python" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelNamePage;
