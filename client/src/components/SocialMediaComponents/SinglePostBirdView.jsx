import React from "react";
import "./SinglePostBirdView.css";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

function SinglePostBirdView(props) {
  let im1 = props.im1;
  let im2 = props.im2;
  let im3 = props.im3;
  let groupName = props.groupName;
  let groupStreak = props.groupStreak;
  return (
    <div>
      <div className="sm-post-main-con">
        <div className="sm-post-im-con">
          <div className="sm-post-big-im">
            <img src={im1} alt="" />
          </div>
          <div className="sm-post-small-im">
            <img src={im2} alt="" id="sm-img-top" />
            <img src={im3} alt="" id="sm-img-bottom" />
          </div>
        </div>
        <div className="sm-post-details-con">
          <p className="sm-post-group-name">{groupName}</p>
          <div className="sm-post-group-streak">
            <p className="sm-post-streak-icon">
              <LocalFireDepartmentIcon />
            </p>
            <p className="sm-post-group-streak-val">{groupStreak}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePostBirdView;
