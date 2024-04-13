import React from "react";
import "./ProductFilter.css";
import TuneIcon from "@mui/icons-material/Tune";

function SM_Filter() {
  return (
    <>
      <div className="pro-fil-list">
        <div className="fil-sec">
          <p id="fil-txt">Filters</p>
          <TuneIcon />
        </div>
        <hr className="pf-hr" />
        <p className="fil-txt">Global</p>
        <p className="fil-txt">Following</p>
        <p className="fil-txt">Friends</p>
        <p className="fil-txt">Leaderboard Global</p>
        <p className="fil-txt">Leaderboard Following</p>
        <p className="fil-txt">Leaderboard Friends</p>
        <p className="fil-txt">Requests</p>
        <p className="fil-txt">Create Group</p>
      </div>
    </>
  );
}

export default SM_Filter;
