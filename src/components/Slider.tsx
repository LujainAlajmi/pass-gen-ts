import React from "react";
import { Body, HeadingM } from "../font-settings";
export default function Slider({
  lengthOfPass,
  setLengthOfPass,
  handelStrength,
}: {
  lengthOfPass: number;
  setLengthOfPass: (lengthOfPass: number) => void;
  handelStrength: (lengthOfPass: number) => void;
}) {
  return (
    <div className={`flex w-full flex-col space-y-6`}>
      <div className="flex flex-row items-center justify-between ">
        <p className={`${Body} text-AlmostWhite`}>Character Length</p>
        <p className={`${HeadingM} text-NeonGreen`}>{lengthOfPass}</p>
      </div>
      <input
        type="range"
        min="0"
        max="20"
        step={2}
        value={lengthOfPass}
        className=" accent-NeonGreen "
        id="myRange"
        onChange={(e) => {
          setLengthOfPass(parseInt(e.target.value));
          handelStrength(parseInt(e.target.value));
        }}
      />
    </div>
  );
}
