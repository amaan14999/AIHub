"use client";
import React, { useContext } from "react";
import { AIModelContext } from "../context/AIModelContext";
import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {
  // Get the models and searchQuery from the context
  const { models, searchQuery } = useContext(AIModelContext);

  // If there is a search query, don't show the featured section
  if (searchQuery) return null;

  const featuredModels = models.slice(0, 3);

  return (
    <>
      <h1 className="text-3xl font-bold">
        Expert Picks: The Developer's Selection
      </h1>
      <p className="pt-2 pb-8">
        Handpicked APIs that redefine efficiency and innovation, trusted by
        developers around the globe.
      </p>
      <div
        id="next-section"
        className="pt-10 pb-5 px-10 rounded-2xl shadow-lg border-[1px] border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-4">Developer's Choice</h2>
        <div className="grid sm:grid-cols-1 1xl:grid-cols-3 lg:grid-cols-2 gap-4">
          {featuredModels.map((model) => (
            <FeaturedCard key={model.id} model={model} />
          ))}
        </div>
        <p className="mt-5 text-gray-400 font-medium">
          *Based on community popularity and usage.
        </p>
      </div>
    </>
  );
};

export default FeaturedSection;
