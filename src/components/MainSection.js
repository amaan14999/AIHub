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
      {/* <div className="mb-4">
        <label htmlFor="sort" className="mr-2">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
          className="border-gray-300 shadow-sm"
        >
          <option value="name">Name</option>
          <option value="likes">Likes</option>
          <option value="downloads">Downloads</option>
          <option value="popularity">Popularity</option>
        </select>
      </div> */}
      <SortingDropdown onSortChange={setSortCriteria} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {sortedModels.map((model) => (
          <Card key={model.id} model={model} />
        ))}
      </div>
      <a href="/explore" className="block mt-4">
        Explore All
      </a>
    </div>
  );
};

export default MainSection;
