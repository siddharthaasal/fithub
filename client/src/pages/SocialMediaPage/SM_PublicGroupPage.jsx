import React from "react";
import "./SM_PublicGroupPage.css";

import SM_Filter from "../../components/SocialMediaComponents/SM_Filter";
import AuthHeader from "../../components/AuthComponents/AuthHeader";
import SinglePostBirdView from "../../components/SocialMediaComponents/SinglePostBirdView";

function SM_PublicGroupPage() {
  return (
    <>
      <AuthHeader />
      <div className="sm-pub-grp-main-con">
        <div className="SM-Filter-Bar">
          <SM_Filter />
        </div>
        <div className="sm-pub-grp-con">
          <div className="sm-pub-grp-row">
            <SinglePostBirdView
              im1="https://i.pinimg.com/474x/f9/a7/a3/f9a7a30e3f6cada77cbd30f47f5a430f.jpg"
              im2="https://i.pinimg.com/564x/61/f9/c6/61f9c663651674123327b1c47fe54bd6.jpg"
              im3="https://i.pinimg.com/564x/7f/1e/13/7f1e131e3fc1a5681eb13d88332972ae.jpg"
              groupName="Defenders"
              groupStreak="1"
            />
            <SinglePostBirdView
              im1="https://i.pinimg.com/474x/f9/a7/a3/f9a7a30e3f6cada77cbd30f47f5a430f.jpg"
              im2="https://i.pinimg.com/564x/61/f9/c6/61f9c663651674123327b1c47fe54bd6.jpg"
              im3="https://i.pinimg.com/564x/7f/1e/13/7f1e131e3fc1a5681eb13d88332972ae.jpg"
              groupName="Defenders"
              groupStreak="1"
            />
            <SinglePostBirdView
              im1="https://i.pinimg.com/474x/f9/a7/a3/f9a7a30e3f6cada77cbd30f47f5a430f.jpg"
              im2="https://i.pinimg.com/564x/61/f9/c6/61f9c663651674123327b1c47fe54bd6.jpg"
              im3="https://i.pinimg.com/564x/7f/1e/13/7f1e131e3fc1a5681eb13d88332972ae.jpg"
              groupName="Defenders"
              groupStreak="1"
            />
          </div>
          <div className="sm-pub-grp-row">
            <SinglePostBirdView
              im1="https://i.pinimg.com/474x/f9/a7/a3/f9a7a30e3f6cada77cbd30f47f5a430f.jpg"
              im2="https://i.pinimg.com/564x/61/f9/c6/61f9c663651674123327b1c47fe54bd6.jpg"
              im3="https://i.pinimg.com/564x/7f/1e/13/7f1e131e3fc1a5681eb13d88332972ae.jpg"
              groupName="Defenders"
              groupStreak="1"
            />
            <SinglePostBirdView
              im1="https://i.pinimg.com/474x/f9/a7/a3/f9a7a30e3f6cada77cbd30f47f5a430f.jpg"
              im2="https://i.pinimg.com/564x/61/f9/c6/61f9c663651674123327b1c47fe54bd6.jpg"
              im3="https://i.pinimg.com/564x/7f/1e/13/7f1e131e3fc1a5681eb13d88332972ae.jpg"
              groupName="Defenders"
              groupStreak="1"
            />
            <SinglePostBirdView
              im1="https://i.pinimg.com/474x/f9/a7/a3/f9a7a30e3f6cada77cbd30f47f5a430f.jpg"
              im2="https://i.pinimg.com/564x/61/f9/c6/61f9c663651674123327b1c47fe54bd6.jpg"
              im3="https://i.pinimg.com/564x/7f/1e/13/7f1e131e3fc1a5681eb13d88332972ae.jpg"
              groupName="Defenders"
              groupStreak="1"
            />
          </div>
          <div className="sm-pub-grp-row">
            <SinglePostBirdView
              im1="https://i.pinimg.com/474x/f9/a7/a3/f9a7a30e3f6cada77cbd30f47f5a430f.jpg"
              im2="https://i.pinimg.com/564x/61/f9/c6/61f9c663651674123327b1c47fe54bd6.jpg"
              im3="https://i.pinimg.com/564x/7f/1e/13/7f1e131e3fc1a5681eb13d88332972ae.jpg"
              groupName="Defenders"
              groupStreak="1"
            />
            <SinglePostBirdView
              im1="https://i.pinimg.com/474x/f9/a7/a3/f9a7a30e3f6cada77cbd30f47f5a430f.jpg"
              im2="https://i.pinimg.com/564x/61/f9/c6/61f9c663651674123327b1c47fe54bd6.jpg"
              im3="https://i.pinimg.com/564x/7f/1e/13/7f1e131e3fc1a5681eb13d88332972ae.jpg"
              groupName="Defenders"
              groupStreak="1"
            />
            <SinglePostBirdView
              im1="https://i.pinimg.com/474x/f9/a7/a3/f9a7a30e3f6cada77cbd30f47f5a430f.jpg"
              im2="https://i.pinimg.com/564x/61/f9/c6/61f9c663651674123327b1c47fe54bd6.jpg"
              im3="https://i.pinimg.com/564x/7f/1e/13/7f1e131e3fc1a5681eb13d88332972ae.jpg"
              groupName="Defenders"
              groupStreak="1"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SM_PublicGroupPage;
