import URLSubmitButton from "@/common/buttons/URLSubmitButton";
import URLField from "@/common/inputs/URLField";
import { postData } from "@/lib/api";
import React, { useCallback, useState } from "react";
import { postResultInterface } from "../section/MainSection";

interface URLInputInterfce {
  setIsResultModalOpen: (isOpen: boolean) => void;
  setPreviousData: React.Dispatch<React.SetStateAction<postResultInterface[]>>;
}

const URLInput = ({
  setIsResultModalOpen,
  setPreviousData,
}: URLInputInterfce) => {
  const [webURL, setWebURL] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setWebURL(value);
    },
    []
  );

  const handleSubmit = useCallback(async () => {
    if (!webURL.trim()) {
      alert("Enter website URL");
      return;
    }

    // FOR VALIDATION PROPER WEB URL
    try {
      new URL(webURL);
    } catch {
      alert("Enter a valid website URL");
      return;
    }

    setIsLoading(true);

    // FOR POST WEBURL
    const result = await postData<
      { url: string },
      { data: postResultInterface }
    >("/api/capture", { url: webURL });

    setIsLoading(false);

    if (result) {
      setPreviousData((prev: postResultInterface[]) => {
        if (!result?.data) return prev;
        const updatedData = [
          ...prev,
          result.data as unknown as postResultInterface,
        ];

        // FOR STORE USER DATA ON LOCAL STORAGE
        localStorage.setItem("previousData", JSON.stringify(updatedData));
        return updatedData;
      });

      setIsResultModalOpen(true);
    } else {
      console.log("Submission failed.");
    }
  }, [webURL]);

  return (
    <div className="relative w-full">
      <URLField onChange={handleOnChange} />
      <URLSubmitButton onClick={handleSubmit} loading={isLoading} />
    </div>
  );
};

export default URLInput;
