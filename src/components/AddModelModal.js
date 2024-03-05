// Create a new file: AddModelModal.js
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
    // Convert space-separated tags into an array
    const tagsArray = formData.tags
      .split(" ")
      .filter((tag) => tag.trim() !== "");
    const newModel = { ...formData, tags: tagsArray };
    addModel(newModel);
    onClose(); // Close the modal
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <input
            name="model_name"
            value={formData.model_name}
            onChange={handleChange}
            placeholder="Model Name"
            required
          />
          <textarea
            name="model_description"
            value={formData.model_description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags (space-separated)"
            required
          />
          <button type="submit">Add Model</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddModelModal;
