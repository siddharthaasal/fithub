import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Fitzy from "../../assets/Fitzy.png";
import FFitzy from "../../assets/FFitzy.png";
import boxer from "../../assets/boxer.jpg";
import boxer2 from "../../assets/boxer2.png";
import LinearProgress from "@mui/material/LinearProgress";
import "./OC2.css";
import "./OC5.css";

const OC8 = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [showCharacter, setShowCharacter] = useState(false);
  const [displayText, setDisplayText] = useState(
    "What is your current level of activity?"
  );
  const [gender, setGender] = useState(""); // State to store selected activity level

  const handleContinue = () => {
    navigate("/welcome/age", {
      state: {
        name: location.state ? location.state.name : "",
        weight: location.state ? location.state.weight : "",
        height: location.state ? location.state.height : "",
        levelOfActivity: location.state ? location.state.levelOfActivity : "",
        goalWeight: location.state ? location.state.goalWeight : "",
        gender: gender,
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
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
      </div>

      <hr className="oc_hr" />
      <div className="oc_ld">
        <button onClick={handleContinue}>Continue</button>
      </div>
    </>
  );
};

export default OC8;
