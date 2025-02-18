import Header from "@/common/headers/Header";
import Description from "@/common/paragraphs/Description";
import React, { useEffect, useState } from "react";
import ResultModal from "../modal/ResultModal";
import ResultLoaderIcon from "../loader/ResultLoaderIcon";
import URLInput from "../input/URLInput";

export interface postResultInterface {
  id: string;
  url: string;
  status: string;
  created_at: string;
  result_url: string | null;
  failure_reason: string | null;
}

const MainSection = () => {
  // FOR RESULT MODAL
  const [isResultModalOpen, setIsResultModalOpen] = useState<boolean>(false);

  // FOR STORE PREVIOUS IDS STORE
  const [previousData, setPreviousData] = useState<postResultInterface[]>([]);

  // FOR GET USER DATA FROM LOCAL STORAGE
  useEffect(() => {
    const restPreviousData = localStorage.getItem("previousData");

    if (restPreviousData) {
      setPreviousData(JSON.parse(restPreviousData));
    }
  }, []);

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <Header>
            Capture Website Screenshots Instantly
            <span className="text-neutral-200 not-italic font-normal">🚀</span>
          </Header>
          <Description>
            Enter any URL and get a high-quality screenshot in seconds. Our tool
            instantly captures full-page snapshots, making it easy to save,
            share, or analyze web pages effortlessly.
            <br /> Try it now!
          </Description>
          <URLInput
            setIsResultModalOpen={setIsResultModalOpen}
            setPreviousData={setPreviousData}
          />
        </div>
      </div>

      <ResultModal
        isResultModalOpen={isResultModalOpen}
        setIsResultModalOpen={setIsResultModalOpen}
        previousData={previousData}
        setPreviousData={setPreviousData}
      />

      {!isResultModalOpen && previousData.length > 0 && (
        <ResultLoaderIcon setIsResultModalOpen={setIsResultModalOpen} />
      )}
    </main>
  );
};

export default MainSection;
