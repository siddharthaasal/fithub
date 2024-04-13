import React from "react";

import Authentication from "../../components/AuthComponents/Authentication";
import AuthHeader from "../../components/AuthComponents/AuthHeader";
import AuthFooter from "../../components/AuthComponents/AuthFooter";


function AuthPage({ setIsLoggedIn }) {
  return (
    <>
      <AuthHeader />
      <Authentication setIsLoggedIn={setIsLoggedIn} />
      {/* <Authentication setIsLoggedIn={setIsLoggedIn} /> */}
      <AuthFooter />
    </>
  );
}

export default AuthPage;
