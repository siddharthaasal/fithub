import React from "react";
import "./AuthFooter.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOnOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import { Icon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
// import CodeBranch from "../assets/code-branch.svg";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Link, useNavigate } from "react-router-dom";
function AuthFooter() {

  const navigate = useNavigate();
  function goToTerms() {
    console.log("inside goToTerms function");
    navigate("/terms");
  }
  function goToContact() {
    console.log("inside goToTerms function");
    navigate("/contact");
  }
  function goToSupport() {
    console.log("inside goToTerms function");
    navigate("/support");
  }
  function goToPrivacy() {
    console.log("inside goToTerms function");
    navigate("/privacy");
  }
  function goToSecurity() {
    console.log("inside goToTerms function");
    navigate("/security");
  }
  return (
    <>
      <div className="ftr-container">
        <div className="ftr-left">
          <div className="icon-text-group" onClick={goToContact}>
            <EmailOutlinedIcon />
            <p className="footer-text">Contact</p>
          </div>
          <div className="icon-text-group">
            <Link
              to="https://github.com/siddharthaasal"
              className="icon-text-group"
            >
              <GitHubIcon style={{ color: "black" }} />
              <p className="footer-text">GitHub</p>
            </Link>
          </div>
          <div className="icon-text-group" onClick={goToSupport}>
            <MonetizationOnIcon />
            <p className="footer-text">Support</p>
          </div>
          <div className="icon-text-group" onClick={goToTerms}>
            {" "}
            <TaskOutlinedIcon />
            <p className="footer-text">Terms</p>
          </div>
          <div className="icon-text-group" onClick={goToPrivacy}>
            <LockOpenOutlinedIcon />
            <p className="footer-text">Privacy</p>
          </div>
          <div className="icon-text-group" onClick={goToSecurity}>
            <GppGoodOutlinedIcon />
            <p className="footer-text">Security</p>
          </div>
        </div>
        <div className="ftr-right">
          <div className="icon-text-group">
            <ColorLensOutlinedIcon />
            <p className="footer-text">Stealth</p>
          </div>
          <div className="icon-text-group">
            <TerminalIcon />
            <p className="footer-text">v0.0.1</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthFooter;
