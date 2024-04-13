import React from "react";
import "./SingleGroupPosts.css";

import { useState, number } from "react";
import { Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

function SingleGroupPosts(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="main-pin-con">
        <Box>
          <Masonry columns={4} spacing={4}>
            {props.imageSources.map((imageUrl, index) => (
              <Box key={index} onMouseEnter={() => setActiveIndex(index)}>
                <img
                  style={{
                    width: "100%",
                    display: "block",
                    // border: "1px solid black",
                    borderRadius: "12px",
                    marginBottom: "8px",
                    cursor: "pointer",
                    filter:
                      activeIndex === index
                        ? "brightness(80%)"
                        : "brightness(100%)",
                    transition: "transform 0.5s ease", // Smooth transition
                    transform:
                      activeIndex === index ? "scale(1.1)" : "scale(1)", // Scale on hover
                  }}
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="pin-imag-par"
                />
              </Box>
            ))}
          </Masonry>
        </Box>
      </div>
    </>
  );
}

export default SingleGroupPosts;
