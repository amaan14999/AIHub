// src/components/SortingDropdown.js
"use client";
import React from "react";

const SortingDropdown = ({ onSortChange }) => {
  return (
    <div className="mb-4">
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      >
        <option value="name">Name</option>
        <option value="likes">Likes</option>
        <option value="downloads">Downloads</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortingDropdown;
