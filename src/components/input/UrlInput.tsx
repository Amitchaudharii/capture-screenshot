import React from "react";

const UrlInput = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Enter website URL (e.g., https://example.com)"
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 outline-none w-full relative p-2 bg-neutral-950 placeholder:text-neutral-700 transition-all"
      />
      <button
        type="submit"
        className="absolute top-1/2 right-1 -translate-y-1/2 bg-teal-600 hover:bg-teal-500 text-white p-2 rounded-lg transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
  );
};

export default UrlInput;
