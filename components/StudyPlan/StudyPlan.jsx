import React from "react";
import Button from "../layout/Button/Button";
import algorithm from "@/utils/algorithm";

const StudyPlan = ({ setShowUnits, selectUnits, year, semester }) => {
  const handleBackClick = () => {
    console.log("HELLO");
    setShowUnits(true);
  };

  const studyPlan = algorithm(selectUnits, year, semester);

  return (
    <div className="w-full flex flex-col gap-8">
      <div>
        <Button title="Back" onClickHandle={handleBackClick} />
      </div>
      <p className="font-bold">
        Study plan for students enrolling in Year {year} and Semester {semester}
      </p>
      {selectUnits.map((unit) => (
        <p>{unit}</p>
      ))}
    </div>
  );
};

export default StudyPlan;
