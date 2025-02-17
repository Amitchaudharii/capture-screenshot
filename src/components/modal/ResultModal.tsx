import React, { useCallback, useEffect, useRef } from "react";
import { postResultInterface } from "../section/MainSection";
import ResultComponent from "../result/ResultComponent";

interface ResultModalInterface {
  isResultModalOpen: boolean;
  setIsResultModalOpen: (isOpen: boolean) => void;
  previousData: postResultInterface[];
  setPreviousData: React.Dispatch<React.SetStateAction<postResultInterface[]>>;
}

const ResultModal = ({
  isResultModalOpen,
  setIsResultModalOpen,
  previousData,
  setPreviousData,
}: ResultModalInterface) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // FOR MODAL CLOSE IF USER CLICK MODAL OUTSIDE
  const handleOutSideClick = useCallback((event: MouseEvent): void => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsResultModalOpen(false);
    }
  }, []);

  // FOR MODAL CLOSE IF USER CLICK MODAL OUTSIDE
  useEffect(() => {
    if (isResultModalOpen) {
      document.addEventListener("mousedown", handleOutSideClick);
    } else {
      document.removeEventListener("mousedown", handleOutSideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [isResultModalOpen, handleOutSideClick]);

  return (
    <div
      className={`absolute top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-white/10 backdrop-blur-sm duration-300 ${
        isResultModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={modalRef}
        className={`w-3/4 bg-gray-200 rounded-lg p-3 transition-all duration-200 ${
          isResultModalOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ResultComponent
          previousData={previousData}
          setPreviousData={setPreviousData}
        />
      </div>
    </div>
  );
};

export default ResultModal;
