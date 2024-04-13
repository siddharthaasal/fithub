import React from "react";
import "./CreateNewGroup.css";

import TextFieldsSharpIcon from "@mui/icons-material/TextFieldsSharp";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DescriptionIcon from "@mui/icons-material/Description";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function CreateNewGroup() {
  return (
    <>
      <div className="cng-main">
        <div className="cng-heading">
          <h1>Create New Group</h1>
          <h2>Use the form below to create new group</h2>
        </div>
        <form action="">
          <div className="cng-form-con">
            <div className="cng-icon">
              <TextFieldsSharpIcon
                style={{
                  marginLeft: "10px",
                  //   borderRadius: "5px 0 0 5px",
                  //   objectFit: "fill",
                  //   backgroundColor: "silver",
                  //   opacity: "50%",
                }}
              />
            </div>

            <input type="text" placeholder="    Title" className="cng-inp" />
          </div>
          <div className="cng-form-con">
            <div className="cng-icon">
              <DescriptionIcon
                style={{
                  marginLeft: "10px",
                  //   borderRadius: "5px 0 0 5px",
                  //   objectFit: "fill",
                  //   backgroundColor: "silver",
                  //   opacity: "50%",
                }}
              />
            </div>
            <input
              type="text"
              placeholder="    Description"
              className="cng-inp"
            />
          </div>
          <div className="cng-form-con">
            <div className="cng-icon">
              <AddPhotoAlternateIcon
                style={{
                  marginLeft: "10px",
                  //   borderRadius: "5px 0 0 5px",
                  //   objectFit: "fill",
                  //   backgroundColor: "silver",
                  //   opacity: "50%",
                }}
              />
            </div>
            <input
              type="file"
              placeholder=" Upload Image "
              className="cng-inp"
            />
          </div>
          <Button variant="contained" endIcon={<AddCircleOutlineIcon />}>
            Create
          </Button>
        </form>
      </div>
    </>
  );
}

export default CreateNewGroup;
