import React from "react";

const NewsletterSignup = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-center py-12 px-4 shadow-inner">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Subscribe to our Health Newsletter</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Get health tips and hospital updates straight to your inbox.</p>
      <div className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 w-72 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsletterSignup;
