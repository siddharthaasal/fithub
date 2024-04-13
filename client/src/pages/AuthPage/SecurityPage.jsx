import React from "react";
import "./TermsPage.css";

function SecurityPage() {
  return (
    <>
      <div className="terms-page">
        <div className="main-box">
          <div className="head-container">
            <p className="tos">fitness hub - </p>
            <p className="tos-titles">Security</p>
          </div>

          <h2 className="tos-titles" id="agreement">
            We Take Security Seriously
          </h2>
          <p className="tos-text">
            If you have discovered a vulnerability, please report it to us
            immediately so we can address it promptly.
          </p>
          <h2 className="tos-titles" id="account-security">
            Table of Contents
          </h2>

          <ul>
            <li>How to Report a Vulnerability</li>
            <li>Submission Guidelines</li>
          </ul>
          <h2 className="tos-titles" id="how-to-report">
            How to Report a Vulnerability
          </h2>
          <p className="tos-text">
            If you find a security vulnerability affecting FitHub services,
            please send your disclosure via <a href="">email</a>. For
            non-security-related platform issues, follow the bug submission
            guidelines. Provide as much detail as possible, including:
          </p>
          <ul>
            <li>Vulnerability Description</li>
            <li>Proof of Concept</li>
            <li>Impact</li>
            <li>Screenshots or Proof</li>
          </ul>
          <h2 id="submission-guidelines" className="tos-titles">
            Submission Guidelines
          </h2>
          <p className="tos-text">
            Avoid activities that could disrupt service or strain critical
            resources. Limit testing to designated test accounts.
          </p>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
export default SecurityPage;
