import React from "react";
import "./SingleGroupPage.css";

import AuthHeader from "../../components/AuthComponents/AuthHeader";
import SingleGroupPosts from "../../components/SocialMediaComponents/SingleGroupPosts";
import SingleGroupDetails from "../../components/SocialMediaComponents/SingleGroupDetails";

function SingleGroupPage() {
  const imageSources = [
    "https://i.pinimg.com/474x/0b/6e/40/0b6e4079a621b67d659cf4336376d7dc.jpg",
    "https://i.pinimg.com/474x/85/e8/91/85e89106cf97600185241cf81c988a62.jpg",
    "https://i.pinimg.com/474x/82/86/b5/8286b534803aa856b55a3ca525c555ca.jpg",
    "https://i.pinimg.com/474x/72/5f/6b/725f6b3166a467bdbd6765d3b0d1c767.jpg",
    "https://i.pinimg.com/474x/b9/25/68/b925687cc1c8cdd086f382256d31576d.jpg",
    "https://i.pinimg.com/474x/f8/31/e8/f831e8e7a6569025175fec5e4e0e866e.jpg",
    "https://i.pinimg.com/474x/a4/b7/7d/a4b77dd105f12d6e38a5b9f1df2cff2e.jpg",
    "https://i.pinimg.com/474x/d5/89/07/d589074ae1921954b0f9a6395a27f387.jpg",
    "https://i.pinimg.com/474x/d9/63/0b/d9630be4c03e434050e4e8d7cf58e1ee.jpg",
    "https://i.pinimg.com/474x/1b/94/12/1b9412ee12df887c11e9fc74dd0a96f4.jpg",
  ];

  return (
    <>
      <AuthHeader />
      <SingleGroupDetails
        sGrpName="Avengers"
        sGrpDesc="Earth's Mightiest Heroes"
        sGrpFollowing="10025"
        sGrpStreakCount="10"
        sGrpImg="https://i.pinimg.com/564x/05/35/c0/0535c0342e361f89130d50a346023352.jpg"
      />
      <SingleGroupPosts imageSources={imageSources} />
    </>
  );
}

export default SingleGroupPage;
