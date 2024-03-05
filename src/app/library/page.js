"use client";
import React, { useContext, useState } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import Card from "@/components/Card";
import AddModelModal from "@/components/AddModelModal";

export default function LibraryPage() {
  const { models, likedModels } = useContext(AIModelContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const likedModelsArray = models.filter((model) =>
    likedModels.has(model.model_name)
  );
  const userAddedModels = models.filter((model) => model.userAdded); // Filter for user-added models

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Favorites</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Model
      </button>
      {isModalOpen && <AddModelModal onClose={() => setIsModalOpen(false)} />}

      {likedModelsArray.length === 0 ? (
        <div className="p-4">No liked models yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {likedModelsArray.map((model) => (
            <Card key={model.model_name} model={model} />
          ))}
        </div>
      )}

      <h2 className="text-3xl font-bold mt-8 mb-4">My Models</h2>
      {userAddedModels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userAddedModels.map((model) => (
            <Card key={model.model_name} model={model} />
          ))}
        </div>
      ) : (
        <div className="p-4">No models added yet.</div>
      )}
    </div>
  );
}
