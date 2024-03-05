// src/context/AIModelContext.js
"use client";
import React, { createContext, useState, useEffect } from "react";

const AIModelContext = createContext();

const AIModelProvider = ({ children }) => {
  const [allModels, setAllModels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch models from the provided URL
    const fetchModels = async () => {
      try {
        const response = await fetch("https://katb.in/temporary-data/raw");
        if (response.ok) {
          const models = await response.json();
          setAllModels(models);
        } else {
          console.error("Failed to fetch models: ", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching models: ", error);
      }
    };

    fetchModels();
  }, []);

  // Filter models based on search query
  const filteredModels = allModels.filter((model) =>
    model.model_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AIModelContext.Provider
      value={{
        models: filteredModels,
        setSearchQuery,
      }}
    >
      {children}
    </AIModelContext.Provider>
  );
};

export { AIModelProvider, AIModelContext };
