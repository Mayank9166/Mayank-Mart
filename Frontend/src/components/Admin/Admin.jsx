import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Corrected import
import { toast } from "react-toastify";
import axios from "axios";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [rating, setRating] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate(); // Corrected useNavigate usage

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("color", color);
    formData.append("rating", rating);

    if (imageUrl) {
      formData.append("imageUrl", imageUrl);
    } else {
      alert("Please upload an image or provide an image URL.");
      return;
    }

    try {
      const response = await axios.post("https://mayank-6ry9.onrender.com/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      });

      toast.success("Image uploaded successfully!");
      console.log("Uploaded Image URL:", response.data.imageUrl);

      // Reset form
      setTitle("");
      setColor("");
      setRating("");
      setImageUrl("");
    } catch (error) {
      console.error("Error uploading image:", error.response?.data || error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-primary/15">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded w-96">
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Color of Product"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Or enter an Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <div className="flex gap-3">
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
            Add Product
          </button>
          <button type="button" onClick={() => navigate("/")} className="bg-primary text-white px-4 py-2 rounded">
            Go To Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
