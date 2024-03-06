"use client";
import React, { useState, useContext, useRef, useEffect } from "react";
import { AIModelContext } from "../context/AIModelContext";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Navbar = () => {
  const { models } = useContext(AIModelContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("");
  const categories = Array.from(new Set(models.map((model) => model.category)));
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Only run this effect in the browser
    if (typeof window !== "undefined") {
      setActivePage(window.location.pathname);
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toUrlFriendly = (category) =>
    category.toLowerCase().replace(/\s+/g, "-");

  // Helper function to get link class
  const getLinkClass = (path) =>
    `hover:text-white hover:bg-main-bg p-2 px-4 rounded-lg transition duration-150 cursor-pointer ${
      activePage === path ? "bg-main-bg text-white" : ""
    }`;

  return (
    <nav className="bg-white text-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/atlan.png" alt="Logo" className="w-28 mr-4" />
          <SearchBar />
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/" passHref>
            <div className={getLinkClass("/")}>Home</div>
          </Link>
          <Link href="/explore" passHref>
            <div className={getLinkClass("/explore")}>Explore</div>
          </Link>
          <Link href="/library" passHref>
            <div className={getLinkClass("/library")}>Library</div>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-white hover:bg-main-bg p-2 rounded-lg transition duration-150 cursor-pointer"
            >
              Categories
            </button>
            {isOpen && (
              <div
                className="absolute right-0 mt-2 p-2 bg-white rounded-lg shadow-lg grid grid-cols-2 gap-2"
                style={{ minWidth: "300px" }} // Increase minWidth as needed
              >
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/categories/${toUrlFriendly(category)}`}
                    passHref
                  >
                    <div className="px-4 py-2 hover:bg-main-bg text-gray-800 hover:text-white cursor-pointer rounded-md overflow-hidden text-left">
                      <span
                        className="text-sm  block"
                        style={{ wordWrap: "break-word" }}
                      >
                        {category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
