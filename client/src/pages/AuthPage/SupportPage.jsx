import React from "react";
import "./SupportPage.css";

import PaidIcon from "@mui/icons-material/Paid";
import StorefrontIcon from "@mui/icons-material/Storefront";

function SupportPage() {
  return (
    <>
      <div className="sup-page">
        <div className="sup-con">
          <h2 className="tos-titles">Support FitHub</h2>
          <p className="tos-text">
            Thank you so much for thinking about supporting this project. It
            would not be possible without you and your continued support.
          </p>
          <div className="sp-btns">
            <button>
              <div className="sp-btn">
                <img src={PaidIcon} alt="" />
                <p>Donate via Patreon</p>
              </div>
            </button>
            <button>
              <div className="sp-btn">
                <img src={StorefrontIcon} alt="" />
                <p>Buy Merch</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportPage;
