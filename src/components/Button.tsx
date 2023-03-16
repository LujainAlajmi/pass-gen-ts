import React from "react";
import { Body } from "../font-settings";

export default function Button({
  text,
  generatePassword,
}: {
  text: string;
  generatePassword: () => void;
}) {
  return (
    <button
      type="button"
      onClick={generatePassword}
      className={`${Body} group flex h-[56px] w-[311px] flex-row items-center justify-center space-x-4 bg-NeonGreen text-DarkGrey hover:border-2 hover:border-NeonGreen hover:bg-DarkGrey hover:text-NeonGreen md:h-[65px] md:w-[476px] md:space-x-6`}
    >
      <span>{text}</span>
      <span>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            className="group-hover:fill-NeonGreen"
            fill="#24232C"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </span>
    </button>
  );
}
