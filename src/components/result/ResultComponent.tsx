import React, { useCallback, useState } from "react";
import { postResultInterface } from "../section/MainSection";
import ResultURLList from "./ResultURLList";
import { getData } from "@/lib/api";
import ResultImg from "./ResultImg";
import Loader from "../loader/Loader";

const ResultComponent = ({
  previousData,
  setPreviousData,
}: {
  previousData: postResultInterface[];
  setPreviousData: React.Dispatch<React.SetStateAction<postResultInterface[]>>;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activeURL, setActiveURL] = useState<postResultInterface>();

  const handleURLListClick = useCallback(async (value: postResultInterface) => {
    setLoading(true);
    // FOR POST WEBURL
    const result = await getData<{ data: postResultInterface }>(
      `api/capture/${value.id}`
    );
    setLoading(false);

    if (result) {
      setActiveURL(result.data);
      setPreviousData((prev: postResultInterface[]) => {
        const updatedData = prev.map((rest) =>
          rest.id === result.data.id ? result.data : rest
        );

        // FOR STORE USER DATA ON LOCAL STORAGE
        localStorage.setItem("previousData", JSON.stringify(updatedData));
        return updatedData;
      });
    }
  }, []);

  return (
    <div className="relative min-h-96 grid grid-cols-12 gap-5">
      <div className="col-span-5 lg:col-span-4">
        <ResultURLList
          handleURLListClick={handleURLListClick}
          previousData={previousData}
          activeURL={activeURL}
        />
      </div>
      <div className="col-span-7 lg:col-span-8">
        <ResultImg url={activeURL?.result_url} alt={activeURL?.url} />
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ResultComponent;
