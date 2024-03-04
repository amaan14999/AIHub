// src/components/Sidebar.js
"use client"; // Ensure the component runs client-side

import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage if the sidebar is open or not
  const categories = ["Category 1", "Category 2", "Category 3"]; // Placeholder categories

  return (
    <div
      className={`transition-width duration-300 ${
        isOpen ? "w-64" : "w-20"
      } h-full bg-gray-800 text-white flex flex-col`}
    >
      <div className="flex justify-between items-center p-5">
        <h1 className="text-xl">AI Marketplace</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "📖" : "📚"}
        </button>
      </div>
      <div className="flex-grow p-5">
        <a href="#" className="block mb-2">
          Home
        </a>
        <a href="#" className="block mb-2">
          Explore
        </a>
        <a href="#" className="block mb-2">
          Library
        </a>
      </div>
      <div className="flex flex-col p-5 bg-gray-700 mt-auto">
        <a href="#" className="mb-2">
          Popular Categories
        </a>
        {categories.map((category, index) => (
          <a href="#" key={index} className="block mb-2">
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
