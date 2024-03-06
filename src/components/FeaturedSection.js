// src/components/FeaturedSection.js
"use client";
import React, { useContext } from "react";
import { AIModelContext } from "../context/AIModelContext";
import Card from "./Card";
import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {
  const { models } = useContext(AIModelContext);
  console.log(models);

  // Assuming the first 3 models are featured
  const featuredModels = models.slice(0, 3);

  return (
    <div className="mx-10 pt-10 pb-5 px-10 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Developer's Choice</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredModels.map((model) => (
          <FeaturedCard key={model.id} model={model} />
        ))}
      </div>
      <p className="mt-5 text-gray-400 font-medium">
        *Based on community popularity and usage.
      </p>
    </div>
  );
};

export default FeaturedSection;
