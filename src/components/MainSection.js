"use client";
import React, { useContext, useState } from "react";
import { AIModelContext } from "../context/AIModelContext";
import Card from "./Card";
import SortingDropdown from "./SortingDown";

const MainSection = () => {
  // The AIModelContext provides the models and searchQuery
  const { models, searchQuery } = useContext(AIModelContext);

  // State to track the sorting criteria
  const [sortCriteria, setSortCriteria] = useState("");

  // Function to sort the models based on the sortCriteria
  const sortModels = (models) => {
    switch (sortCriteria) {
      case "likes":
        return [...models].sort((a, b) => b.likes - a.likes);
      case "downloads":
        return [...models].sort((a, b) => b.downloads - a.downloads);
      case "popularity":
        return [...models].sort(
          (a, b) =>
            parseFloat(b.popularity_measure) - parseFloat(a.popularity_measure)
        );
      case "name":
      default:
        return [...models].sort((a, b) =>
          a.model_name.localeCompare(b.model_name)
        );
    }
  };

  // If there is a search query, use the models as is, if not, use the first 8 models
  const displayModels = searchQuery ? models : models.slice(3, 11);

  // Sort the models based on the sortCriteria
  const sortedModels = sortModels(displayModels);

  return (
    <div className="flex flex-col ">
      {searchQuery ? null : (
        <div className="flex justify-between items-center px-4 pt-32">
          <div>
            <h2 className="text-3xl font-bold">
              Explore the Frontiers of AI Innovation
            </h2>
            <p className="pt-2">
              Discover the most advanced language and AI models shaping the
              future, right here.
            </p>
          </div>

          <SortingDropdown onSortChange={setSortCriteria} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {sortedModels.map((model) => (
          <Card key={model.id} model={model} />
        ))}
      </div>
      <div className="py-10 text-center">
        <a
          href="/explore"
          className="text-lg font-semibold bg-main-bg text-white py-3 px-8 rounded-lg hover:bg-main-bg-dark transition duration-300 ease-in-out"
        >
          Explore All
        </a>
      </div>
    </div>
  );
};

export default MainSection;
