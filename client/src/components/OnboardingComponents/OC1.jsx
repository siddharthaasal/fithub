import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Fitzy from "../../assets/Fitzy.png";
import FFitzy from "../../assets/FFitzy.png";
// import boxer from "../../assets/boxer.jpg";
import boxer2 from "../../assets/boxerF.png";
import LinearProgress from "@mui/material/LinearProgress";
import "./OC2.css";

const OC1 = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [showCharacter, setShowCharacter] = useState(true);
  const [displayText, setDisplayText] = useState(
    "Hi there! 👋 Welcome to FitHub! I'm Fitzy, your personal fitness assistant."
  );
  const [showInputBox, setShowInputBox] = useState(false);

  const handleContinue = () => {
    console.log("inside continue block");
    navigate("/welcome/name");
  };

  return (
    <>
      {/* <LinearProgress variant="determinate" value={10} /> */}
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
            placeholder="name"
            className="oc_inp_field"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

export default OC1;
