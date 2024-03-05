// Assuming you are using Next.js
"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const categories = [
    "Image Generation",
    "Text Summarization",
    "Multimodal",
    "Text Generation",
    "Speech Recognition",
    "Code Generation",
  ];

  // Convert category names to URL-friendly strings
  const toUrlFriendly = (category) =>
    category.toLowerCase().replace(/\s+/g, "-");

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
        {/* Assuming you have these pages, use Link for navigation */}
        <Link href="/">
          <div className="block mb-2">Home</div>
        </Link>
        <Link href="/explore">
          <div className="block mb-2">Explore</div>
        </Link>
        <Link href="/library">
          <div className="block mb-2">Library</div>
        </Link>
      </div>
      <div className="flex flex-col p-5 bg-gray-700 mt-auto">
        <span className="mb-2">Popular Categories</span>
        {categories.map((category, index) => (
          <Link href={`/categories/${toUrlFriendly(category)}`} key={index}>
            <div className="block mb-2 cursor-pointer">{category}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
