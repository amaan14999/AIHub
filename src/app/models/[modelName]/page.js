"use client";
import React, { useContext, useState, useEffect } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import CodeSnippet from "@/components/CodeSnippet";

const ModelNamePage = ({ params }) => {
  const { modelName } = params;
  const normalizedModelName = decodeURIComponent(modelName).replace(/-/g, " ");
  const { models } = useContext(AIModelContext);

  const model = models.find(
    (m) => m.model_name.toLowerCase() === normalizedModelName.toLowerCase()
  );

  // State for managing likes directly from model's initial likes count
  const [likes, setLikes] = useState(model ? model.likes : 0);
  // Determine if the model has already been liked
  const [isLiked, setIsLiked] = useState(false);

  // Simulate loading initial likes state from model data
  useEffect(() => {
    if (model) {
      setLikes(model.likes);
    }
  }, [model]);

  const handleLike = () => {
    // Simulate updating likes on the server and then update state
    setIsLiked(!isLiked);
    setLikes((currentLikes) => (isLiked ? currentLikes - 1 : currentLikes + 1));
  };

  if (!model) {
    return <div>Model not found</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
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
        <div className="flex justify-between items-start flex-wrap md:flex-nowrap">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{model.model_name}</h1>
            <div className="text-sm">
              <p>Category: {model.category}</p>
              <p>Popularity Measure: {model.popularity_measure}</p>
              <p>Latency: {model.latency}ms</p>
              <p>Service Level: {model.service_level}</p>
              <p>Downloads: {model.downloads}</p>
            </div>
            <div className="flex flex-wrap my-2">
              {model.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="space-x-4 mb-4">
            <button
              onClick={handleLike}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              {isLiked ? "Unlike" : "Like"}
            </button>
            <span>Likes: {likes}</span>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Try Now
            </button>
          </div>
        </div>

        <div id="introduction" className="my-6">
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p>{model.introduction.text}</p>
          <ul className="list-disc pl-6 mt-2">
            {model.introduction.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>

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

        <div id="sample-code" className="my-6">
          <h2 className="text-xl font-semibold">Sample Code</h2>
          <CodeSnippet code={model.codesnippets.python} language="Python" />
        </div>
      </div>
    </div>
  );
};

export default ModelNamePage;
