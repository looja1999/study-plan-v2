import React, { useState } from "react";
import Button from "../layout/Button/Button";
import algorithm from "@/utils/algorithm";
import electives from "@/utils/electives";

const StudyPlan = ({ setShowUnits, selectUnits, year, semester }) => {
  const [plan, setPlan] = useState([]);
  const [elective, setElective] = useState([]);

  const handleBackClick = () => {
    setShowUnits(true);
  };

  useState(() => {
    const studyPlan = algorithm(selectUnits, year, semester);
    const eligibleElectives = electives(selectUnits);
    setPlan(studyPlan);
    setElective(eligibleElectives);
  }, []);

  return (
    <div className="w-full flex flex-col gap-8">
      <div>
        <Button title="Back" onClickHandle={handleBackClick} />
      </div>
      <p className="font-bold text-lg">
        Study plan for students enrolling in Year {year} and Semester {semester}
      </p>
      <p className="font-bold text-primary">Completed Units</p>
      <div className="grid grid-cols-2">
        {selectUnits.map((unit) => (
          <p className="p-4 border">{unit}</p>
        ))}
      </div>

      <div className="flex flex-col gap-6 py-4 border-t-2 border-dashed border-primary">
        <p className="font-bold text-primary">Personal Study Plan</p>
        {plan.map((year, yearIndex) => (
          <div>
            <p className="font-bold">
              Year {yearIndex + 1}
              {yearIndex === 3 && (
                <span className="text-sm font-normal">
                  {" - only required if you were not able to complete units."}
                </span>
              )}
            </p>
            <div className="grid grid-cols-2 gap-4 py-4">
              {year.map((semester, semesterIndex) => {
                return (
                  <div className="border p-4">
                    <p className="text-sm p-2 font-bold text-primary">
                      Semester {semesterIndex + 1}
                    </p>
                    {semester.map((unit) => (
                      <p className="text-sm p-2 border">
                        {unit.unitCode} {unit.unitName}{" "}
                      </p>
                    ))}
                  </div>
                );
              })}
              {yearIndex + 1 === 1 && (
                <p className="font-serif text-sm">
                  Usually 1 elective is completed in this year.
                </p>
              )}
              {yearIndex + 1 === 2 && (
                <p className="font-serif text-sm">
                  Usually 2 special electives are completed in this year.
                </p>
              )}
              {yearIndex + 1 === 3 && (
                <p className="text-sm font-serif">
                  Usually 1 special electives and 1 elective are completed in
                  this year.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-dashed border-primary mb-10">
        <p className="font-bold text-primary">Eligible Special Electives</p>

        <div className="grid grid-rows-1 md:grid-cols-2 gap-4 mt-4 ">
          <div className="border p-4">
            <p className="font-bold">Semester 1</p>
            <div>
              {elective.map((unit) => {
                return (
                  <p className="text-sm">
                    {unit.sem === 1 && <span>{unit.unitName}</span>}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="border p-4">
            <p className="font-bold">Semester 2</p>

            {elective.map((unit) => {
              return (
                <p className="text-sm">
                  {unit.sem === 2 && <span>{unit.unitName}</span>}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;
