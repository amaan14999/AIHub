// src/components/FeaturedSection.js
"use client";
import React, { useContext } from "react";
import { AIModelContext } from "../context/AIModelContext";
import Card from "./Card";

const FeaturedSection = () => {
  const { models } = useContext(AIModelContext);

  // Assuming the first 3 models are featured
  const featuredModels = models.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {featuredModels.map((model) => (
        <Card key={model.id} model={model} />
      ))}
    </div>
  );
};

export default FeaturedSection;
