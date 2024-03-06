"use client";
import React, { useContext, useState } from "react";
import { AIModelContext } from "../context/AIModelContext";
import Card from "./Card";
import SortingDropdown from "./SortingDown";

const MainSection = () => {
  const { models } = useContext(AIModelContext);
  // Set initial sorting criteria to 'name'
  const [sortCriteria, setSortCriteria] = useState("name");

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
      default: // Default case handles sorting by name
        return [...models].sort((a, b) =>
          a.model_name.localeCompare(b.model_name)
        );
    }
  };

  const sortedModels = sortModels(models.slice(3, 11)); // Adjust the slice as needed

  return (
    <div>
      <SortingDropdown onSortChange={setSortCriteria} />
      <div className="grid grid-cols-1 md:grid-cols-4">
        {sortedModels.map((model) => (
          <Card key={model.id} model={model} />
        ))}
      </div>
      <div className="py-10 text-center">
        <a
          href="/explore"
          className=" text-lg font-semibold bg-main-bg text-white py-3 px-8 rounded-lg hover:bg-main-bg-dark transition duration-300 ease-in-out"
        >
          Explore All
        </a>
      </div>
    </div>
  );
};

export default MainSection;
