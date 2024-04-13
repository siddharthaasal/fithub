import React from "react";
import "./AcceptRequest.css";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonAddDisabledIcon from "@mui/icons-material/PersonAddDisabled";

function AcceptRequest(props) {
  return (
    <>
      <div className="ar-con">
        <div className="cng-heading">
          <h1>Incoming Requests</h1>
          <h2>Let these users into you group?</h2>
        </div>
        <div className="deal-with-req">
          <h3 className="req-user">Siddharth</h3>
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button variant="contained" endIcon={<PersonAddIcon />}>
              Accept
            </Button>
            <Button variant="contained" endIcon={<PersonAddDisabledIcon />}>
              Decline
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
}

export default AcceptRequest;
