"use client";
import React, { useContext, useState } from "react";
import { AIModelContext } from "../context/AIModelContext";
import Card from "./Card";
import SortingDropdown from "./SortingDown"; // Corrected the name

const MainSection = () => {
  const { models, searchQuery } = useContext(AIModelContext);
  const [sortCriteria, setSortCriteria] = useState("");

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

  const displayModels = searchQuery ? models : models.slice(3, 11);
  const sortedModels = sortModels(displayModels);

  return (
    <div className="flex flex-col">
      {searchQuery ? null : (
        <div className="flex justify-between items-center pt-12 px-4">
          <h2 className="text-2xl font-bold">Available Models</h2>
          <SortingDropdown onSortChange={setSortCriteria} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
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
