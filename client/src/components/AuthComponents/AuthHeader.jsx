import React from "react";
import "./AuthHeader.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import { colors } from "@mui/material";

function AuthHeader() {
  return (
    <>
      <div className="header-container">
        <div className="header-quote">
          <p id="header-title">fitness hub: gateway to optimized health</p>
        </div>
        <div className="auth-header-icons">
          <PersonOutlineOutlinedIcon />
          <NotificationsNoneOutlinedIcon />
        </div>
      </div>
    </>
  );
}

export default AuthHeader;
