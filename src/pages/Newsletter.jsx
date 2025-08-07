// hospitalfrontend/src/pages/Newsletter.js
import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-blue-100 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="mb-6 text-gray-700">Stay updated with our latest news and health tips.</p>
      <form className="flex flex-col md:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded border w-72"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
