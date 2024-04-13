import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Fitzy from "../../assets/Fitzy.png";
import FFitzy from "../../assets/FFitzy.png";
import boxer from "../../assets/boxer.jpg";
import boxer2 from "../../assets/boxer2.png";
import LinearProgress from "@mui/material/LinearProgress";
import "./OC2.css";
import "./OC5.css";

const OC5 = () => {
   let location = useLocation();
  const navigate = useNavigate();
  const [showCharacter, setShowCharacter] = useState(false);
  const [displayText, setDisplayText] = useState(
    "What is your current level of activity?"
  );
  const [activityLevel, setActivityLevel] = useState(""); // State to store selected activity level

  const handleContinue = () => {
    navigate("/welcome/goal_weight", {
      state: {
        name: location.state ? location.state.name : "",
        weight: location.state ? location.state.weight : "",
        height: location.state ? location.state.height : "",
        levelOfActivity: activityLevel,
      },
    });
  };

  return (
    <>
      <div className="oc_ud">
        <div
          className={`oc_ud_div_oc_2 oc_ud_div_oc_5 ${
            showCharacter ? "" : "slide-out"
          }`}
        >
          {displayText}
        </div>
        <img src={boxer2} alt="" className={showCharacter ? "" : "slide-out"} />
      </div>

      <div className="input-box input-box-oc5">
        <select
          className="oc_inp_field"
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="">Select Activity Level</option>
          <option value="1">Workout Equivalent 1x a week</option>
          <option value="3">Workout Equivalent 3x a week</option>
          <option value="5">Workout Equivalent 5x a week</option>
          <option value="7">Workout Equivalent 7x a week</option>
        </select>
      </div>

      <hr className="oc_hr" />
      <div className="oc_ld">
        <button onClick={handleContinue}>Continue</button>
      </div>
    </>
  );
};

export default OC5;
