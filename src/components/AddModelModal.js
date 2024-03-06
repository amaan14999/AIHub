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
    const tagsArray = formData.tags
      .split(" ")
      .filter((tag) => tag.trim() !== "");
    const newModel = {
      ...formData,
      tags: tagsArray,
      img_url: "/images/dalle3.webp", // Provide a valid path to a default image
      likes: 14,
      downloads: 149,
      popularity_measure: 8.4, // Or set a default numerical value
      userAdded: true,
    };
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
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }
        .modal {
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 500px;
          max-width: 90%;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        input,
        textarea {
          margin-bottom: 10px;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          cursor: pointer;
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 4px;
          border: none;
        }
        button[type="submit"] {
          background-color: #10a37f;
          color: white;
        }
        button[type="button"] {
          background-color: #bf3131;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default AddModelModal;
