"use client";
import React, { createContext, useState, useEffect } from "react";
import Loader from "@/components/Loader";

const AIModelContext = createContext();

const AIModelProvider = ({ children }) => {
  const [allModels, setAllModels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Storing liked models by their names for easy access and manipulation.
  const [likedModels, setLikedModels] = useState(() => {
    // Optionally, initialize from localStorage to persist likes across sessions
    const savedLikes = localStorage.getItem("likedModels");
    return savedLikes ? new Set(JSON.parse(savedLikes)) : new Set();
  });

  // Add to AIModelContext.js inside AIModelProvider component

  // Adjust the addModel function in AIModelContext
  const addModel = (newModel) => {
    const modelWithFlag = { ...newModel, userAdded: true }; // Mark model as user-added
    setAllModels((currentModels) => [...currentModels, modelWithFlag]);
  };

  useEffect(() => {
    setIsLoading(true);
    // Fetch models from the provided URL
    const fetchModels = async () => {
      try {
        const response = await fetch("https://katb.in/owixehevaqo/raw");
        if (response.ok) {
          const models = await response.json();
          // Potentially normalize model names here if necessary
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
      // Optionally, save to localStorage to persist likes across sessions
      localStorage.setItem("likedModels", JSON.stringify([...updatedLikes]));
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
      }}
    >
      {isLoading ? <Loader /> : children}
    </AIModelContext.Provider>
  );
};

export { AIModelProvider, AIModelContext };
