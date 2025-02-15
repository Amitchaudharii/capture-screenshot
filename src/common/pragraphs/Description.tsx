import React from "react";

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-neutral-500 max-w-xl mx-auto text-sm text-center relative z-10">
      {children}
    </p>
  );
};

export default Description;
