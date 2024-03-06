// /app/categories/[categoryName]/page.js
"use client";
import React, { useContext } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar"; // Ensure this path is correct for the Navbar component

const CategoryNamePage = ({ params }) => {
  const { categoryName } = params;
  const normalizedCategoryName = decodeURIComponent(categoryName).replace(
    /-/g,
    " "
  );
  const { models, setSearchQuery } = useContext(AIModelContext);

  const categoryModels = models.filter(
    (model) =>
      model.category.toLowerCase() === normalizedCategoryName.toLowerCase()
  );
  const displayCategoryName = normalizedCategoryName.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );
  // Reset search query when entering the category page
  React.useEffect(() => {
    setSearchQuery("");
  }, [categoryName, setSearchQuery]);

  if (!categoryModels.length) {
    return (
      <div>
        <Navbar />
        <div className="p-4">No models found in this category.</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-grow p-4">
        <h2 className="text-xl font-semibold mb-4">
          {displayCategoryName} Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {categoryModels.map((model, index) => (
            <Card key={index} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNamePage;
