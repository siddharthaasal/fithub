import React from "react";
import "./LeaderBoardPage.css";
import LeaderBoard from "../../components/SocialMediaComponents/LeaderBoard";
import AuthHeader from "../../components/AuthComponents/AuthHeader";
import SM_Filter from "../../components/SocialMediaComponents/SM_Filter";

function LeaderBoardPage() {
  return (
    <>
      <AuthHeader />
      <div className="lPage-con">
        <SM_Filter />
        <LeaderBoard />
      </div>
    </>
  );
}

export default LeaderBoardPage;
