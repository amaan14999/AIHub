"use client";
import React, { useContext } from "react";
import { AIModelContext } from "@/context/AIModelContext";

// export default function ModelNamePage({ params }) {
//   const { modelName } = params;
//   console.log(modelName);
//   return <div>page</div>;
// }

const ModelNamePage = ({ params }) => {
  const { modelName } = params;
  // Decode URI component and then replace hyphens with spaces to match original model name format
  const normalizedModelName = decodeURIComponent(modelName).replace(/-/g, " ");

  const { models } = useContext(AIModelContext);

  const model = models.find(
    (model) =>
      model.model_name.toLowerCase() === normalizedModelName.toLowerCase()
  );

  if (!model) {
    return <div>Model not found</div>;
  }

  // Proceed with rendering model details...
  return (
    <div>
      <h1>{model.model_name}</h1>
      {/* Render other model details */}
    </div>
  );
};

export default ModelNamePage;
