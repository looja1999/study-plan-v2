"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import SelectUnitsComponent from "@/components/SelectUnits/SelectUnits";
import StudyPlan from "@/components/StudyPlan/StudyPlan";

const SelectUnits = () => {
  const params = useSearchParams();
  const year = params.get("year"); // year
  const semester = params.get("semester"); // semester
  const [showUnits, setShowUnits] = useState(true); // state to show select units or not.
  const [selectUnits, setSelectUnits] = useState([]); // all the selected units

  return (
    <div className="h-full py-8 flex flex-col gap-6 mb-8">
      {showUnits && (
        <>
          <h1 className="font-bold text-xl text-primary">
            Choose Subjects you have compeleted
          </h1>

          <SelectUnitsComponent
            setShowUnits={setShowUnits}
            selectUnits={selectUnits}
            setSelectUnits={setSelectUnits}
          />
        </>
      )}

      {!showUnits && (
        <StudyPlan
          setShowUnits={setShowUnits}
          selectUnits={selectUnits}
          year={year}
          semester={semester}
        />
      )}
    </div>
  );
};

export default SelectUnits;
