// src/components/SearchBar.js
"use client";
import React, { useContext } from "react";
import { AIModelContext } from "../context/AIModelContext";

const SearchBar = () => {
  const { setSearchQuery } = useContext(AIModelContext);

  return (
    <input
      type="text"
      placeholder="Search models..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
    />
  );
};

export default SearchBar;
