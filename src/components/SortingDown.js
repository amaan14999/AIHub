"use client";
import React from "react";

const SortingDropdown = ({ onSortChange }) => {
  return (
    <div className="mb-4 relative">
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="border-2 border-main-bg bg-white h-10 pl-5 pr-16 rounded-lg text-sm focus:outline-none appearance-none"
        style={{
          WebkitAppearance: "none", // This is necessary for some Safari versions
          backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.5rem center",
          backgroundSize: "1.5em",
        }}
      >
        <option className="rounded-lg" value="name">
          Name
        </option>
        <option value="likes">Likes</option>
        <option value="downloads">Downloads</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortingDropdown;
