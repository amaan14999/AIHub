"use client";
import React, { useContext } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar"; // Ensure this path is correct
import SearchBar from "@/components/SearchBar"; // Ensure this path is correct

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

  // Reset search query when entering the category page
  React.useEffect(() => {
    setSearchQuery("");
  }, [categoryName, setSearchQuery]);

  if (!categoryModels.length) {
    return <div className="p-4">No models found in this category.</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <SearchBar />
        <h2 className="text-xl font-semibold mb-4">
          Category: {normalizedCategoryName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categoryModels.map((model, index) => (
            <Card key={index} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNamePage;
