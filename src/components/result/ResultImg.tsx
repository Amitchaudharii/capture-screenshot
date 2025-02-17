import Image from "next/image";
import React, { useState } from "react";

const ResultImg = ({
  url,
  alt,
}: {
  url: string | null | undefined;
  alt: string | null | undefined;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {url ? (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src={url}
            alt={alt ?? ""}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
            onClick={openModal}
            className="cursor-pointer"
          />
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center border border-gray-400 rounded-lg text-7xl">
          🖼️
        </div>
      )}

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={url!}
              alt={alt ?? ""}
              width={1100}
              height={600}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 px-4 py-3 text-white bg-teal-500 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultImg;
