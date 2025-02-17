import React from "react";

interface URLFieldInterface {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const URLField = ({ onChange }: URLFieldInterface) => {
  return (
    <input
      type="text"
      placeholder="Enter website URL (e.g., https://example.com)"
      className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 outline-none w-full relative p-2 bg-neutral-950 placeholder:text-neutral-700 transition-all"
      onChange={onChange}
    />
  );
};

export default URLField;
