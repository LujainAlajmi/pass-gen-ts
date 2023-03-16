import React, { useState } from "react";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Slider from "./components/Slider";
import StrengthState from "./components/StrengthState";
import TextField from "./components/TextField";
import { HeadingL, HeadingM, Body } from "./font-settings";
function App() {
  const checkBoxes = [
    {
      name: "Include Uppercase Letters",
      checked: false,
      char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    {
      name: "Include Lowercase Letters",
      checked: false,
      char: "abcdefghijklmnopqrstuvwxyz",
    },
    { name: "Include Numbers", checked: false, char: "0123456789" },
    { name: "Include Symbols", checked: false, char: "!@#$%^&*()" },
  ];
  const [charSet, setCharSet] = useState("");

  const [checkBox, setCheckBox] = useState(checkBoxes);

  const handelCheckBox = (e: any) => {
    const { name, checked } = e.target;
    const newCheckBox = checkBox.map((checkBox) =>
      checkBox.name === name ? { ...checkBox, checked } : checkBox
    );
    setCheckBox(newCheckBox);

    const newCharSet = newCheckBox
      .filter((checkBox) => checkBox.checked)
      .map((checkBox) => checkBox.char)
      .join("");
    setCharSet(newCharSet);
  };

  const [lengthOfPass, setLengthOfPass] = useState(0);
  const [strength, setStrength] = useState(0);
  const [password, setPassword] = useState("");
  function generatePassword() {
    var retVal = "";
    for (var i = 0, n = charSet.length; i < lengthOfPass; ++i) {
      retVal += charSet.charAt(Math.floor(Math.random() * n));
    }

    setPassword(retVal);
  }

  const handelStrength = (lengthOfPass: number) => {
    if (lengthOfPass >= 0 && lengthOfPass <= 4) {
      setStrength(1);
    } else if (lengthOfPass >= 5 && lengthOfPass <= 9) {
      setStrength(2);
    } else if (lengthOfPass >= 10 && lengthOfPass <= 14) {
      setStrength(3);
    } else if (lengthOfPass >= 15 && lengthOfPass <= 20) {
      setStrength(4);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-VeryDarkGrey p-8">
      <div className="flex h-screen flex-col items-center justify-center space-y-6 ">
        <h1 className={`${HeadingM} text-Grey`}>Password Generator</h1>
        <TextField password={password} />
        <div className="flex h-[423px] w-[343px] flex-col items-center space-y-6 bg-DarkGrey py-8 px-8 md:h-[528px] md:w-[540px]">
          <Slider
            lengthOfPass={lengthOfPass}
            setLengthOfPass={setLengthOfPass}
            handelStrength={handelStrength}
          />
          <div className="flex flex-col space-y-4 self-start">
            {checkBox.map((checkBox, index) => (
              <CheckBox
                name={checkBox.name}
                checked={checkBox.checked}
                key={index}
                setCheckBox={handelCheckBox}
              />
            ))}
          </div>

          <StrengthState strength={strength} />
          <Button text="GENERATE" generatePassword={generatePassword} />
        </div>
      </div>
    </div>
  );
}

export default App;
