"use client";
import React, { useContext } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

const CategoryNamePage = ({ params }) => {
  //Destructure the category name from the params and clean it up for comparison
  const { categoryName } = params;
  const normalizedCategoryName = decodeURIComponent(categoryName).replace(
    /-/g,
    " "
  );

  //take the models and setSearchQuery from the context
  const { models, setSearchQuery } = useContext(AIModelContext);

  //Filter the models based on the category name
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
    <div className="flex flex-col px-16">
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
