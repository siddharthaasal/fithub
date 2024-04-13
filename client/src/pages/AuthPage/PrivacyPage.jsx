import React from "react";
import "./TermsPage.css";

function PrivacyPage() {
  return (
    <>
      <div className="terms-page">
        <div className="main-box">
          <div className="head-container">
            <p className="tos">fitness hub - </p>
            <p className="tos-titles">Privacy Policy</p>
          </div>
          <p className="tos-text">Last updated: 20-02-2024</p>
          <br />
          <p className="tos-text">
            Thank you for choosing FitHub (&#39;FitHub,&#39; &#39;we,&#39;
            &#39;us,&#39; &#39;our&#39;) for your fitness journey. <br />
            <br />
            Your privacy is important to us, and we are committed to protecting
            your personal information. This Privacy Policy outlines how we
            collect, use, and safeguard your data.
          </p>
          <p className="tos-text">
            This Privacy Policy applies to all services provided by FitHub,
            including our website, mobile applications, and any other related
            services (&#39;Services&#39;). By using our Services, you agree to
            the terms of this Privacy Policy.
          </p>
          <p className="tos-titles">What data do we collect?</p>
          <p className="tos-text"> FitHub collects the following data:</p>
          <ul>
            <li>
              Personal information: such as name, email address, and username.
            </li>
            <li>
              Activity data: including meal tracking and analysis, workout
              history, and preferences.
            </li>
            <li>
              E-commerce data: for processing purchases and managing orders.
            </li>
            <li>
              Blog interactions: comments, likes, and shares on our blog posts.
            </li>
            <li>
              Social media interactions: if you choose to connect your social
              media accounts.
            </li>
            <li>
              Other information you provide: such as feedback, surveys, or
              support requests.
            </li>
          </ul>
          <p className="tos-titles">How do we collect your data?</p>
          <p className="tos-text">
            We collect data in various ways, including:
          </p>
          <ul>
            <li>
              Directly from you when you create an account, use our services, or
              interact with our website.
            </li>
            <li>
              Automatically through cookies and similar technologies when you
              browse our website or use our mobile applications.
            </li>
          </ul>
          <p className="tos-titles">How will we use your data?</p>
          <p className="tos-text">FitHub uses your data to:</p>
          <ul>
            <li>
              Provide and personalize our services to meet your fitness needs.
            </li>
            <li>
              Improve our services and develop new features based on user
              feedback and usage patterns.
            </li>
            <li>
              Process transactions and deliver products purchased through our
              e-commerce platform.
            </li>
            <li>
              Communicate with you about your account, updates, promotions, and
              other relevant information.
            </li>
            <li>
              Monitor and analyze trends, usage, and interactions to enhance the
              user experience and optimize our services.
            </li>
          </ul>
          <p className="tos-titles">How do we store your data?</p>
          <p className="tos-text">
            FitHub securely stores your data using industry-standard security
            measures to protect against unauthorized access, disclosure,
            alteration, or destruction.
          </p>
          <p className="tos-titles">What are your data protection rights?</p>
          <p className="tos-text">
            FitHub respects your data protection rights and provides you with
            the following options:
          </p>
          <ul>
            <li>
              Access: You can request access to your personal data and
              information about how it is processed.
            </li>
            <li>
              Correction: You can request corrections to any inaccuracies in
              your personal data.
            </li>
            <li>
              Deletion: You can request the deletion of your personal data under
              certain circumstances.
            </li>
            <li>
              Restriction: You can request restrictions on the processing of
              your personal data in certain situations.
            </li>
            <li>
              Portability: You can request a copy of your personal data in a
              structured, machine-readable format.
            </li>
          </ul>
          {/* <p className="tos-text">
            For further information or to exercise your rights, please contact
            us using the details provided below.
          </p>
          <p className="tos-text">
            For the full Privacy Policy, including information on cookies,
            advertisements, and how to contact us, please visit [Link to Full
            Privacy Policy].
          </p> */}
          <br />
          <br />
          <p className="tos-text">
            If you have any questions or concerns about our Privacy Policy or
            data practices, please contact us at [Contact Email or Form].
          </p>
        </div>
      </div>
    </>
  );
}

export default PrivacyPage;
