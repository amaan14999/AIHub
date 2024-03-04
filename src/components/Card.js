// src/components/Card.js
"use client";

import React from "react";

const Card = ({ model }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-auto"
        src={model.img_url}
        alt={model.model_name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{model.model_name}</div>
        <p className="text-gray-700 text-base">{model.model_description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Popularity: {model.popularity_measure}
        </span>
      </div>
    </div>
  );
};

export default Card;
