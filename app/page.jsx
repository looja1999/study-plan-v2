"use client";

import Button from "@/components/layout/Button/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [semester, setSemester] = useState(1);
  const [year, setYear] = useState(1);
  const router = useRouter();

  const handleSubmitButton = () => {
    router.push(`/select-units?year=${year}&semester=${semester}`);
  };

  return (
    <main className="h-full flex items-center justify-center">
      <div className="pr-2 pb-2 bg-primary">
        <div className="-mt-2 -ml-2 bg-white w-full md:w-[350px] border border-primary mx-auto  px-6 py-12  flex flex-col gap-5 shadow-xl rounded-sm">
          <div className="flex items-center justify-start">
            <h1 className=" text-primary text-xl font-bold text-center mb-2 tracking-wide border-b-2 border-primary pr-1 pb-1">
              CDU Study Plan
            </h1>
          </div>
          <p className="p-2 bg-gray-100 text-[12px] font-bold">
            Select the year & semester you want to enroll in.
          </p>

          {/* Year */}
          <div className="flex flex-col gap-3">
            <label className="flex flex-col gap-2">
              <span className="text-sm">Select the year</span>
              <select
                className="border border-borderColor p-2 text-sm cursor-pointer"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value={1}>Year 1</option>
                <option value={2}>Year 2</option>
                <option value={3}>Year 3</option>
              </select>
            </label>

            {/* Semester */}
            <label className="flex flex-col gap-2">
              <span className="text-sm">Select the semester</span>
              <select
                className="border border-borderColor p-2 text-sm cursor-pointer "
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option value={1}>Semester 1</option>
                <option value={2}>Semester 2</option>
              </select>
            </label>
          </div>

          {/* Button */}
          <Button onClickHandle={handleSubmitButton} title="Submit" />
          {/* <Alert text="Year 1 and Semester 1 is selected by default." /> */}
        </div>
      </div>
    </main>
  );
}
