// /app/explore/page.js
"use client";
import React, { useContext, useState } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar"; // Ensure the path to Navbar is correct
import SortingDropdown from "@/components/SortingDown"; // Check the component name and path

const ExplorePage = () => {
  const { models } = useContext(AIModelContext);
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
      default:
        return [...models].sort((a, b) =>
          a.model_name.localeCompare(b.model_name)
        );
    }
  };

  const sortedModels = sortModels(models);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-medium text-gray-400">
          {sortedModels.length} Available Models
        </div>
        <SortingDropdown onSortChange={setSortCriteria} />
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedModels.map((model) => (
            <Card key={model.id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
