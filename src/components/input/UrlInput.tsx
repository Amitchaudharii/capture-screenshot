import React from "react";

const UrlInput = () => {
  return (
    <input
      type="text"
      placeholder="Enter website URL (e.g., https://example.com)"
      className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 outline-none w-full relative z-10 mt-4 p-2 bg-neutral-950 placeholder:text-neutral-700 transition-all"
    />
  );
};

export default UrlInput;
