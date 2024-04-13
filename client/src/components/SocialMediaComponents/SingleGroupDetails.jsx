import React from "react";
import "./SingleGroupDetails.css";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function SingleGroupDetails(props) {
  let sGrpName = props.sGrpName;
  let sGrpDesc = props.sGrpDesc;
  let sGrpImg = props.sGrpImg;
  let sGrpFollowing = props.sGrpFollowing;
  let sGrpStreakCount = props.sGrpStreakCount;
  return (
    <>
      <div className="single-grp-det-con">
        <img src={sGrpImg} alt="" className="s-grp-im" />
        <p className="s-grp-name">{sGrpName}</p>
        <p className="s-grp-desc">{sGrpDesc}</p>
        <div className="s-grp-follow-det">
          <p className="s-grp-following">Followers-{sGrpFollowing}</p>{" "}
        </div>
        <div className="sm-post-group-streak">
          <div className="streak-stuff">
            <p className="sm-post-streak-icon">
              <LocalFireDepartmentIcon />
            </p>
            <p className="sm-post-group-streak-val">{sGrpStreakCount}</p>
          </div>

          <PersonAddIcon />
        </div>
        <hr />
      </div>
    </>
  );
}

export default SingleGroupDetails;
