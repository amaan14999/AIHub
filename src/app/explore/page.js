// /app/explore/page.js
"use client";
import React, { useContext } from "react";
import { AIModelContext } from "@/context/AIModelContext";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar"; // Adjust the import path as necessary
import SearchBar from "@/components/SearchBar"; // Adjust the import path as necessary

const ExplorePage = () => {
  const { models } = useContext(AIModelContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {models.map((model) => (
            <Card key={model.id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
