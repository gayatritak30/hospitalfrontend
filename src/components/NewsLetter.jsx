// src/components/Newsletter.jsx
import React from "react";

const Newsletter = () => {
  return (
    <div className="py-10 bg-blue-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-4">Subscribe to our newsletter for health tips and updates.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border rounded w-64"
        />
        <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
