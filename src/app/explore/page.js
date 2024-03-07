"use client";
import React, { useContext, useState } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import SortingDropdown from "@/components/SortingDown";

const ExplorePage = () => {
  // fetch the models from the context
  const { models } = useContext(AIModelContext);

  // state to store the sorting criteria with default value as "name"
  const [sortCriteria, setSortCriteria] = useState("name");

  // function to sort the models based on the sorting criteria
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

  // sort the models based on the sorting criteria
  const sortedModels = sortModels(models);

  return (
    <div className="flex flex-col px-16">
      <Navbar />
      <div className="flex justify-between items-center p-4 pt-16">
        <div>
          <div className="text-3xl font-bold">
            Explore Our Comprehensive Suite of AI Models
          </div>
          <p className="pt-2 pb-8">
            Dive into a world of innovation with our diverse range of
            cutting-edge AI solutions, each designed to cater to your unique
            needs and challenges.
          </p>
        </div>
        <SortingDropdown onSortChange={setSortCriteria} />
      </div>
      <div>
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
