import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Fitzy from "../../assets/Fitzy.png";
import FFitzy from "../../assets/FFitzy.png";
import boxer from "../../assets/boxer.jpg";
import boxer2 from "../../assets/boxer2.png";
import LinearProgress from "@mui/material/LinearProgress";
import "./OC2.css";
import axios from "axios";

const OC6 = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [inputGoalWeight, setInputGoalWeight] = useState("");
  const [showCharacter, setShowCharacter] = useState(false);
  const [displayText, setDisplayText] = useState("What is your goal weight?");
  const [showInputBox, setShowInputBox] = useState(true);

  const handleContinue = async () => {
    try {
      // Send both name and weight together to the backend

      navigate("/welcome/gender", {
        state: {
          name: location.state ? location.state.name : "",
          weight: location.state ? location.state.weight : "",
          height: location.state ? location.state.height : "",
          levelOfActivity: location.state ? location.state.levelOfActivity : "",
          goalWeight: inputGoalWeight,
        },
      });
    } catch (error) {
      console.error("Error storing name:", error.message);
    }
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
            placeholder="goal weight"
            className="oc_inp_field"
            value={inputGoalWeight}
            onChange={(e) => setInputGoalWeight(e.target.value)}
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

export default OC6;
