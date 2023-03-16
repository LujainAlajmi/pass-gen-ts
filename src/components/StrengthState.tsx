import React from "react";
import { Body } from "../font-settings";
export default function StrengthState({ strength }: { strength: number }) {
  const StrengthStates = [
    { state: "", color: "", bar: 0 },
    { state: "TOO WEAK!", color: "Red", bar: 1 },
    { state: "WEAK", color: "Orange", bar: 2 },
    { state: "MEDIUM", color: "Yellow", bar: 3 },
    { state: "STRONG", color: "NeonGreen", bar: 4 },
  ];

  switch (strength) {
    case 0:
      return (
        <div
          className={`flex h-[56] w-[311px] flex-row bg-VeryDarkGrey md:h-[72px] md:w-[476px] ${Body} items-center justify-between px-8 text-Grey `}
        >
          <p>STRENGTH</p>
          <div className="flex flex-row items-center space-x-4">
            <p></p>
            <div className="flex flex-row items-center space-x-2">
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div
          className={`flex h-[56] w-[311px] flex-row bg-VeryDarkGrey md:h-[72px] md:w-[476px] ${Body} items-center justify-between px-8 text-Grey `}
        >
          <p>STRENGTH</p>
          <div className="flex flex-row items-center space-x-4">
            <p>TOO WEAK!</p>
            <div className="flex flex-row items-center space-x-2">
              <div className="h-[28px] w-[10px]  bg-Red"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div
          className={`flex h-[56] w-[311px] flex-row bg-VeryDarkGrey md:h-[72px] md:w-[476px] ${Body} items-center justify-between px-8 text-Grey `}
        >
          <p>STRENGTH</p>
          <div className="flex flex-row items-center space-x-4">
            <p>WEAK</p>
            <div className="flex flex-row items-center space-x-2">
              <div className="h-[28px] w-[10px] bg-Orange"></div>
              <div className="h-[28px] w-[10px] bg-Orange"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div
          className={`flex h-[56] w-[311px] flex-row bg-VeryDarkGrey md:h-[72px] md:w-[476px] ${Body} items-center justify-between px-8 text-Grey `}
        >
          <p>STRENGTH</p>
          <div className="flex flex-row items-center space-x-4">
            <p>MEDIUM</p>
            <div className="flex flex-row items-center space-x-2">
              <div className="h-[28px] w-[10px] bg-Yellow"></div>
              <div className="h-[28px] w-[10px] bg-Yellow"></div>
              <div className="h-[28px] w-[10px] bg-Yellow"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div
          className={`flex h-[56] w-[311px] flex-row bg-VeryDarkGrey md:h-[72px] md:w-[476px] ${Body} items-center justify-between px-8 text-Grey `}
        >
          <p>STRENGTH</p>
          <div className="flex flex-row items-center space-x-4">
            <p>STRONG</p>
            <div className="flex flex-row items-center space-x-2">
              <div className="h-[28px] w-[10px] bg-NeonGreen"></div>
              <div className="h-[28px] w-[10px] bg-NeonGreen"></div>
              <div className="h-[28px] w-[10px] bg-NeonGreen"></div>
              <div className="h-[28px] w-[10px] bg-NeonGreen"></div>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div
          className={`flex h-[56] w-[311px] flex-row bg-VeryDarkGrey md:h-[72px] md:w-[476px] ${Body} items-center justify-between px-8 text-Grey `}
        >
          <p>STRENGTH</p>
          <div className="flex flex-row items-center space-x-4">
            <p></p>
            <div className="flex flex-row items-center space-x-2">
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
              <div className="h-[28px] w-[10px] border-2 border-AlmostWhite"></div>
            </div>
          </div>
        </div>
      );
  }
}
