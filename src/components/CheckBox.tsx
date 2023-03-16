import React from "react";
import { Body } from "../font-settings";
export default function CheckBox({
  name,
  checked,
  setCheckBox,
}: {
  name: string;
  checked: boolean;
  setCheckBox: (checkBox: any) => void;
}) {
  return (
    <div className="flex flex-row items-center">
      <input
        className="[url('../assets/icon-check.svg') mr-6 h-5 w-5  appearance-none border-2 border-AlmostWhite checked:border-NeonGreen checked:bg-NeonGreen checked:bg-[url('./assets/icon-check.svg')] checked:bg-contain checked:bg-center checked:bg-no-repeat"
        type="checkbox"
        id="conditions"
        name={name}
        value={name}
        onChange={(e) => setCheckBox(e)}
      />

      <span className={`${Body} text-AlmostWhite`}>{name}</span>
    </div>
  );
}
