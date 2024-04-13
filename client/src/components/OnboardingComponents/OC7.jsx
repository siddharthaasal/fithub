import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Fitzy from "../../assets/Fitzy.png";
import FFitzy from "../../assets/FFitzy.png";
import boxer from "../../assets/boxer.jpg";
import boxer2 from "../../assets/boxer2.png";
import LinearProgress from "@mui/material/LinearProgress";
import "./OC2.css";

const OC7 = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [inputAge, setInputAge] = useState("");
  const [showCharacter, setShowCharacter] = useState(false);
  const [displayText, setDisplayText] = useState("What is your current age?");
  const [showInputBox, setShowInputBox] = useState(true);

  //   const handleContinue = () => {
  //     navigate("/welcome/level_of_activity", {
  //       state: {
  //         name: location.state ? location.state.name : "",
  //         weight: location.state ? location.state.weight : "",
  //         height: location.state ? location.state.height : "",
  //         levelOfActivity: location.state ? location.state.height : "",
  //         goalWeight: location.state ? location.state.goalWeight : "",
  //         age: inputAge,
  //       },
  //     });
  //   };

  const handleContinue = async () => {
    try {
      // Retrieve name and weight from previous pages
      const name = location.state ? location.state.name : "";
      const weight = location.state ? location.state.weight : "";
      const height = location.state ? location.state.height : "";
      const levelOfActivity = location.state ? location.state.levelOfActivity : "";
      const goalWeight = location.state ? location.state.goalWeight : "";
      const gender = location.state? location.state.gender: "";
      const age = inputAge;
      const userId = location.state? location.state.userId: "";

      // Send name, weight, and height together to the backend
      await axios.post("http://localhost:5000/api/storeUserInfo", {
        userId : userId,
        name: name,
        weight: weight,
        height: height,
        levelOfActivity: levelOfActivity,
        goalWeight: goalWeight,
        gender: gender,
        age: age,
      });
       navigate("/welcome/plan", {
         state: {
           name: name,
           weight: weight,
           height: height,
           levelOfActivity: levelOfActivity,
           goalWeight: goalWeight,
           gender: gender,
           age: age,
         },
       });
    } catch (error) {
      console.error("Error storing user information:", error.message);
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
            placeholder="age"
            className="oc_inp_field"
            value={inputAge}
            onChange={(e) => setInputAge(e.target.value)}
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

export default OC7;
