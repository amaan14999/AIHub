import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const SortingDropdown = ({ onSortChange }) => {
  // Local state to manage the dropdown state
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
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

  // Options for sorting
  const sortOptions = [
    { label: "Name", value: "name" },
    { label: "Likes", value: "likes" },
    { label: "Downloads", value: "downloads" },
    { label: "Popularity", value: "popularity" },
  ];

  return (
    <div className="mb-4 relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-2 border-gray-200 bg-white py-2 px-4 rounded-lg focus:outline-none appearance-none cursor-pointer flex justify-between items-center text-gray-700 font-semibold"
      >
        <div className="mr-2">Sort:</div>
        <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
      </button>
      {isOpen && (
        <div
          className="absolute mt-2 p-2 bg-white rounded-lg shadow-lg"
          style={{ minWidth: "150px", right: 0 }}
        >
          {sortOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                onSortChange(option.value);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-main-bg text-gray-800 hover:text-white cursor-pointer rounded-md"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortingDropdown;
