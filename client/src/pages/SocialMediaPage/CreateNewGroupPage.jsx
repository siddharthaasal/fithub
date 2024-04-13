import React from "react";
import "./CreateNewGroupPage.css";

import AuthHeader from "../../components/AuthComponents/AuthHeader";
import CreateNewGroup from "../../components/SocialMediaComponents/CreateNewGroup";
import SM_Filter from "../../components/SocialMediaComponents/SM_Filter";

function CreateNewGroupPage() {
  return (
    <>
      <AuthHeader/>
      <div className="cngp-con">
        <SM_Filter />
        <CreateNewGroup />
      </div>
    </>
  );
}

export default CreateNewGroupPage;
