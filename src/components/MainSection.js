// src/components/MainSection.js
"use client";
import React, { useContext } from "react";
import { AIModelContext } from "../context/AIModelContext";
import Card from "./Card";

const MainSection = () => {
  const { models } = useContext(AIModelContext);

  // Skip the first 3 models assumed to be featured, and show the next ones
  const mainSectionModels = models.slice(3, 11); // Adjust the slice as needed

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {mainSectionModels.map((model) => (
        <Card key={model.id} model={model} />
      ))}
      <a href="/explore">Explore All</a>
    </div>
  );
};

export default MainSection;
