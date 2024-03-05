"use client";
import React, { useContext } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import Card from "@/components/Card";

const CategoryNamePage = ({ params }) => {
  const { categoryName } = params;
  const normalizedCategoryName = decodeURIComponent(categoryName).replace(
    /-/g,
    " "
  );
  const { models } = useContext(AIModelContext);

  const categoryModels = models.filter(
    (model) =>
      model.category.toLowerCase() === normalizedCategoryName.toLowerCase()
  );
  console.log(categoryModels);
  if (!categoryModels) {
    return <div>Model not found</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Category: {normalizedCategoryName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categoryModels.map((model, index) => (
          <Card key={index} model={model} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNamePage;
