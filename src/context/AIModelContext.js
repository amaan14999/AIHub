"use client";
import React, { createContext, useState, useEffect } from "react";
import Loader from "@/components/Loader";

const AIModelContext = createContext();

const AIModelProvider = ({ children }) => {
  const [allModels, setAllModels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchBarVisible, setSearchBarVisibility] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Use a React state instead of localStorage for liked models.
  const [likedModels, setLikedModels] = useState(new Set());

  const addModel = (newModel) => {
    const modelWithFlag = { ...newModel, userAdded: true }; // Mark model as user-added
    setAllModels((currentModels) => [...currentModels, modelWithFlag]);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchModels = async () => {
      try {
        const response = await fetch("https://katb.in/oyesilabuli/raw");
        if (response.ok) {
          const models = await response.json();
          setAllModels(models);
        } else {
          console.error("Failed to fetch models: ", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching models: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchModels();
  }, []);

  const toggleLikeModel = (modelName) => {
    setLikedModels((currentLikes) => {
      const updatedLikes = new Set(currentLikes);
      if (updatedLikes.has(modelName)) {
        updatedLikes.delete(modelName);
      } else {
        updatedLikes.add(modelName);
      }
      return updatedLikes;
    });
  };

  const filteredModels = allModels.filter((model) =>
    model.model_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AIModelContext.Provider
      value={{
        models: filteredModels,
        setSearchQuery,
        toggleLikeModel,
        likedModels,
        addModel,
        searchQuery,
        isSearchBarVisible,
        setSearchBarVisibility,
      }}
    >
      {isLoading ? <Loader /> : children}
    </AIModelContext.Provider>
  );
};

export { AIModelProvider, AIModelContext };
