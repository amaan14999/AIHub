"use client";
import React, { createContext, useState, useEffect } from "react";
import Loader from "@/components/Loader";

const AIModelContext = createContext();

const AIModelProvider = ({ children }) => {
  // State to manage the models
  const [allModels, setAllModels] = useState([]);

  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  // State to manage the visibility of the search bar
  const [isSearchBarVisible, setSearchBarVisibility] = useState(true);

  // State to manage the loading state
  const [isLoading, setIsLoading] = useState(false);

  // Usestate for liked models.
  const [likedModels, setLikedModels] = useState(new Set());

  const addModel = (newModel) => {
    const modelWithFlag = { ...newModel, userAdded: true }; // Mark model as user-added
    setAllModels((currentModels) => [...currentModels, modelWithFlag]);
  };

  // Fetch the models from the API(https://katb.in/atlan-fe-task/raw) and set the state
  useEffect(() => {
    setIsLoading(true);
    const fetchModels = async () => {
      try {
        const response = await fetch("https://katb.in/atlan-fe-task/raw");
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

  // Function to toggle the liked models and update the state
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

  // Filter the models based on the search query
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
