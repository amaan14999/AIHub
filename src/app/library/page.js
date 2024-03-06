"use client";
import React, { useContext, useState } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import Card from "@/components/Card";
import AddModelModal from "@/components/AddModelModal";
import Navbar from "@/components/Navbar";

export default function LibraryPage() {
  const { models, likedModels } = useContext(AIModelContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const likedModelsArray = models.filter((model) =>
    likedModels.has(model.model_name)
  );

  const userAddedModels = models.filter((model) => model.userAdded);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-grow p-4">
        <h1 className="text-3xl font-bold my-4">Favorites</h1>

        {likedModelsArray.length === 0 ? (
          <div className="p-4">Like Models to add to Favorites</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {likedModelsArray.map((model) => (
              <Card key={model.model_name} model={model} />
            ))}
          </div>
        )}

        <h2 className="text-3xl font-bold my-8">My Models</h2>
        {userAddedModels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {userAddedModels.map((model) => (
              <Card key={model.model_name} model={model} />
            ))}
          </div>
        ) : (
          <div className="p-4">Create Models to Show</div>
        )}

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 mb-4 bg-main-bg hover:bg-main-bg-dark text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
        {isModalOpen && <AddModelModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
}
