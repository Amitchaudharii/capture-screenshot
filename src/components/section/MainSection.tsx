import Header from "@/common/headers/Header";
import Description from "@/common/pragraphs/Description";
import React from "react";
import UrlInput from "../input/UrlInput";

const MainSection = () => {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-4xl mx-auto p-4">
          <Header>Capture Website Screenshots Instantly</Header>
          <Description>
            Enter any URL and get a high-quality screenshot in seconds. Our tool
            instantly captures full-page snapshots, making it easy to save,
            share, or analyze web pages effortlessly.
            <br /> Try it now!
          </Description>
          <UrlInput />
        </div>
      </div>
    </main>
  );
};

export default MainSection;
