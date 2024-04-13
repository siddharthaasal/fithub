import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Fitzy from "../../assets/Fitzy.png";
import FFitzy from "../../assets/FFitzy.png";
import boxer from "../../assets/boxer.jpg";
import boxer2 from "../../assets/boxer2.png";
import LinearProgress from "@mui/material/LinearProgress";
import "./OC2.css";

const OC2 = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [inputName, setInputName] = useState("");
  const [showCharacter, setShowCharacter] = useState(false);
  const [displayText, setDisplayText] = useState("What is your name?");
  const [showInputBox, setShowInputBox] = useState(true);

  const handleContinue = async () => {
    try {
      // await axios.post("http://localhost:5000/api/storeName", {
      //   name: inputName,
      // });
      // navigate("/welcome/weight");
       navigate("/welcome/weight", { state: { name: inputName } });
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
            placeholder="name"
            className="oc_inp_field"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
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

export default OC2;
