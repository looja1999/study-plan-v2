import React, { useState } from "react";
import List from "../layout/List/List";
import Button from "../layout/Button/Button";

const SelectUnitsComponent = ({
  setSelectUnits,
  selectUnits,
  setShowUnits,
}) => {
  const handleUnitClick = (unit) => {
    if (selectUnits.includes(unit)) {
      setSelectUnits(selectUnits.filter((u) => u !== unit));
    } else {
      setSelectUnits((prev) => [...prev, unit]);
    }
  };

  const handleGenerateCourse = () => {
    setShowUnits(false);
  };

  return (
    <div className="flex gap-8 flex-col mb-4 overflow-y-scroll relative">
      <div className="flex py-3 w-full font-bold border-y top-0 px-4 border-primary bg-white sticky gap-6 md:gap-10">
        <div className="flex-1 ">
          <h2>Semester 1</h2>
        </div>
        <div className="flex-1">
          <h2>Semester 2</h2>
        </div>
      </div>

      <div className=" p-4 flex gap-6 flex-col border rounded-md border-dashed">
        <h1 className="font-bold">Year 1</h1>
        <div className="grid grid-cols-2 gap-6 md:gap-10">
          <List
            year={1}
            sem={1}
            handleUnitClick={handleUnitClick}
            key={1}
            selectUnits={selectUnits}
          />
          <List
            year={1}
            sem={2}
            handleUnitClick={handleUnitClick}
            key={2}
            selectUnits={selectUnits}
          />
        </div>
      </div>
      <div className=" p-4 flex gap-6 flex-col border rounded-md border-dashed">
        <h1 className="font-bold">Year 2</h1>
        <div className="grid grid-cols-2 gap-6 md:gap-10">
          <List
            year={2}
            sem={1}
            handleUnitClick={handleUnitClick}
            key={1}
            selectUnits={selectUnits}
          />
          <List
            year={2}
            sem={2}
            handleUnitClick={handleUnitClick}
            key={2}
            selectUnits={selectUnits}
          />
        </div>
      </div>
      <div className=" p-4 flex gap-6 flex-col border rounded-md border-dashed">
        <h1 className="font-bold">Year 3</h1>
        <div className="grid grid-cols-2 gap-6 md:gap-10">
          <List
            year={3}
            sem={1}
            handleUnitClick={handleUnitClick}
            key={1}
            selectUnits={selectUnits}
          />
          <List
            year={3}
            sem={2}
            handleUnitClick={handleUnitClick}
            key={2}
            selectUnits={selectUnits}
          />
        </div>
      </div>
      <div className=" p-4 flex gap-6 flex-col border rounded-md">
        <h1 className="font-bold">Special Electives</h1>
        <div className="grid grid-cols-2 gap-6 md:gap-10">
          <List
            se={1}
            handleUnitClick={handleUnitClick}
            selectUnits={selectUnits}
          />
          <List
            se={2}
            handleUnitClick={handleUnitClick}
            selectUnits={selectUnits}
          />
        </div>
      </div>
      <div className="flex justify-end bottom-0 sticky left-3">
        <div className="relative">
          <Button
            title="Generate Course"
            onClickHandle={handleGenerateCourse}
          />
          <div className="absolute w-4 h-4 flex items-center bg-red-700 text-white justify-center rounded-full z-10 -top-2 right-1">
            <p className="text-[10px]">{selectUnits.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectUnitsComponent;
