import React from "react";
import { postResultInterface } from "../section/MainSection";

interface ResultURLListInterfce {
  previousData: postResultInterface[];
  handleURLListClick: (value: postResultInterface) => void;
  activeURL?: postResultInterface;
}

const statusIcons = {
  queued: (
    <svg
      className="w-4 h-4 text-yellow-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  ),
  processing: (
    <svg
      className="w-4 h-4 text-blue-500 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 2v2M10 16v2M4.93 4.93l1.42 1.42M14.36 14.36l1.42 1.42M2 10h2m12 0h2M4.93 15.07l1.42-1.42M14.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  completed: (
    <svg
      className="w-4 h-4 text-green-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  ),
  failed: (
    <svg
      className="w-4 h-4 text-red-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 0-1.414Z" />
    </svg>
  ),
};

const ResultURLList = ({
  previousData,
  handleURLListClick,
  activeURL,
}: ResultURLListInterfce) => {
  return (
    <ul className="flex flex-col gap-2">
      {previousData?.map((value, index) => (
        <li key={value.id + index}>
          <button
            onClick={() => handleURLListClick(value)}
            className={`w-full flex items-center text-black text-md px-3 py-1 rounded-md line-clamp-1 hover:bg-teal-300 ${
              activeURL?.id === value.id ? "bg-teal-300" : ""
            } transition-all`}
          >
            {statusIcons[value.status as keyof typeof statusIcons]}

            <span className="ml-2">{value.url}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ResultURLList;
