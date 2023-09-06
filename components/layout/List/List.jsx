import React from "react";
import { courses } from "@/utils/courses";

const List = ({ year, sem, se, handleUnitClick, selectUnits }) => {
  if (se) {
    const currentCourses = courses.filter(
      (course) => course.unitType === "SE" && course.sem === +se
    );
    return (
      <div className="flex flex-col gap-4 justify-start items-start">
        {currentCourses.map((course) => (
          <label className="flex gap-2" key={course.unitCode}>
            <input
              type="checkbox"
              className="cursor-pointer accent-primary hover:aborder-primary"
              onChange={(e) => handleUnitClick(course.unitCode)}
              checked={selectUnits.includes(course.unitCode)}
            />
            {course.unitCode} {course.unitName}
          </label>
        ))}
      </div>
    );
  }

  const currentCourses = courses.filter(
    (course) => course.sem === +sem && course.year === +year
  );

  return (
    <div className="flex flex-col gap-4 justify-start items-start">
      {currentCourses.map((course) => (
        <label className="flex gap-2" key={course.unitCode}>
          <input
            type="checkbox"
            className="cursor-pointer accent-primary hover:aborder-primary"
            onChange={(e) => handleUnitClick(course.unitCode)}
            checked={selectUnits.includes(course.unitCode)}
          />
          {course.unitCode} {course.unitName}
        </label>
      ))}
    </div>
  );
};

export default List;
