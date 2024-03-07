import React, { useState, useContext } from "react";
import { AIModelContext } from "@/context/AIModelContext";

const AddModelModal = ({ onClose }) => {
  const { addModel } = useContext(AIModelContext);
  const [formData, setFormData] = useState({
    model_name: "",
    model_description: "",
    category: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Default values for unspecified fields
    const defaultModelValues = {
      img_url: "/images/dalle3.webp",
      likes: 100,
      downloads: 1000,
      popularity_measure: "7.5",
      latency: 1000,
      service_level: "99%",
      introduction: {
        text: "This is a user-added model, providing cutting-edge AI capabilities.",
        bullets: [
          "User-contributed model",
          "Adaptable to various applications",
          "Efficient and reliable performance",
        ],
      },
      usage: {
        description:
          "This model is versatile and can be applied across different domains.",
        input_format: "Varies",
        output_format: "Varies",
      },
      codesnippets: {
        python: "# Sample Python code for user-added model\n",
      },
      userAdded: true, // Flag to indicate user-added model
    };

    const tagsArray = formData.tags
      .split(" ")
      .filter((tag) => tag.trim() !== "");
    const newModel = {
      ...formData,
      tags: tagsArray,
      ...defaultModelValues,
    };

    addModel(newModel);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="mb-2 p-2 border border-gray-300 rounded"
            name="model_name"
            value={formData.model_name}
            onChange={handleChange}
            placeholder="Model Name"
            required
          />
          <textarea
            className="mb-2 p-2 border border-gray-300 rounded"
            name="model_description"
            value={formData.model_description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            className="mb-2 p-2 border border-gray-300 rounded"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
          <input
            className="mb-2 p-2 border border-gray-300 rounded"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags (space-separated)"
            required
          />
          <button
            type="submit"
            className="mb-2 p-2 rounded bg-green-600 text-white cursor-pointer"
          >
            Add Model
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded bg-red-600 text-white cursor-pointer"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddModelModal;
