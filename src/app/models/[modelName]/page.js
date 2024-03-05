"use client";
import React, { useContext, useEffect, useState } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import CodeSnippet from "@/components/CodeSnippet";
import Loader from "@/components/Loader";

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

  // Update isLiked state when likedModels changes or the model is updated
  useEffect(() => {
    setIsLiked(likedModels.has(model ? model.model_name : ""));
  }, [likedModels, model]);

  const handleLike = () => {
    if (model) {
      toggleLikeModel(model.model_name);
    }
  };

  if (!model) {
    return <Loader />;
  }

  return (
    <div className="flex">
      {/* Sidebar for navigation */}
      <div className="hidden md:block w-1/4 p-4">
        <ul className="sticky top-0">
          <li>
            <a
              href="#introduction"
              className="text-blue-500 hover:text-blue-600"
            >
              Introduction
            </a>
          </li>
          <li>
            <a href="#usage" className="text-blue-500 hover:text-blue-600">
              Usage
            </a>
          </li>
          <li>
            <a
              href="#sample-code"
              className="text-blue-500 hover:text-blue-600"
            >
              Sample Code
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2">{model.model_name}</h1>
          <div className="text-sm mb-4">
            <p>Category: {model.category}</p>
            <p>Popularity Measure: {model.popularity_measure}</p>
            <p>Latency: {model.latency}ms</p>
            <p>Service Level: {model.service_level}</p>
            <div className="flex flex-wrap my-2">
              {model.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={handleLike}
            className={`${
              isLiked ? "bg-red-500" : "bg-blue-500"
            } text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300`}
          >
            {isLiked ? "Unlike" : "Like"} - {isLiked ? "❤️" : "🤍"}
          </button>
          <span className="ml-4">Likes: {model.likes}</span>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300 ml-2">
            Try Now
          </button>
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
          <p>{model.usage.description}</p>
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
  );
};

export default ModelNamePage;
