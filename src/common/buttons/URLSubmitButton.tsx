import React from "react";

interface URLSubmitButtonInterface {
  onClick: () => void;
  loading: boolean;
}

const URLSubmitButton = ({ onClick, loading }: URLSubmitButtonInterface) => {
  return (
    <button
      type="submit"
      className="absolute top-1/2 right-1 -translate-y-1/2 bg-teal-600 hover:bg-teal-500 text-white p-2 rounded-lg transition-all"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      )}
    </button>
  );
};

export default URLSubmitButton;
