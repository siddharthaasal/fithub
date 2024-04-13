import React from "react";
import "./AcceptRequestPage.css";

// import Header from "../../components/Header";
// import SM_Filter from "../../components/social-media/SM_Filter";

import AuthHeader from "../../components/AuthComponents/AuthHeader";
import SM_Filter from "../../components/SocialMediaComponents/SM_Filter"
import AcceptRequest from "../../components/SocialMediaComponents/AcceptRequest";

function AcceptRequestPage() {
  return (
    <>
      <AuthHeader />
      <div className="cngp-con">
        <SM_Filter />
        <AcceptRequest />
      </div>
    </>
  );
}

export default AcceptRequestPage;