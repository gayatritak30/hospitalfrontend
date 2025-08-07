// src/pages/Blog.jsx
import React from "react";

const Blog = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Health News</h2>
      <div className="space-y-6">
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">Healthy Heart Tips</h3>
          <p className="text-sm text-gray-500">August 1, 2025</p>
          <p className="mt-2">Learn how to maintain a healthy heart with simple lifestyle changes.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">Nutrition in Monsoon</h3>
          <p className="text-sm text-gray-500">July 28, 2025</p>
          <p className="mt-2">Foods to eat and avoid during the rainy season to boost immunity.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
