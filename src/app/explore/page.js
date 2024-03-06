// /app/explore/page.js
"use client";
import React, { useContext, useState } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar"; // Adjust the import path as necessary
import SearchBar from "@/components/SearchBar"; // Adjust the import path as necessary
import SortingDropdown from "@/components/SortingDown";

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
      default: // Default case handles sorting by name
        return [...models].sort((a, b) =>
          a.model_name.localeCompare(b.model_name)
        );
    }
  };

  const sortedModels = sortModels(models);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <SearchBar />
        <SortingDropdown onSortChange={setSortCriteria} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {sortedModels.map((model) => (
            <Card key={model.id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
