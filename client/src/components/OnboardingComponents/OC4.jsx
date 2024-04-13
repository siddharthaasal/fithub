import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Fitzy from "../../assets/Fitzy.png";
import FFitzy from "../../assets/FFitzy.png";
import boxer from "../../assets/boxer.jpg";
import boxer2 from "../../assets/boxer2.png";
import LinearProgress from "@mui/material/LinearProgress";
import "./OC2.css";

const OC4 = () => {
  let location = useLocation();
  const navigate = useNavigate();
   const [inputHeight, setInputHeight] = useState("");
  const [showCharacter, setShowCharacter] = useState(false);
  const [displayText, setDisplayText] = useState("What is your height(cms)?");
  const [showInputBox, setShowInputBox] = useState(true);

  const handleContinue = () => {
    navigate("/welcome/level_of_activity", {
      state: {
        name: location.state ? location.state.name : "",
        weight: location.state ? location.state.weight : "",
        height: inputHeight,
      },
    });
  };

  return (
    <>
      <div className="oc_ud">
        <div className={`oc_ud_div_oc_2 ${showCharacter ? "" : "slide-out"}`}>
          {displayText}
        </div>
        <img src={boxer2} alt="" className={showCharacter ? "" : "slide-out"} />
      </div>
      {showInputBox && (
        <div className="input-box">
          <input
            type="text"
            placeholder="height"
            className="oc_inp_field"
            value={inputHeight}
            onChange={(e) => setInputHeight(e.target.value)}
          />
        </div>
      )}
      <hr className="oc_hr" />
      <div className="oc_ld">
        <button onClick={handleContinue}>Continue</button>
      </div>
    </>
  );
};

export default OC4;
