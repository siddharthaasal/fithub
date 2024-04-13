import React from "react";
import "./SingleBlogInList.css";
import { Link } from "react-router-dom";
const SingleBlogInList = () => {
  return (
    <>
      <div className="sbil_main_con">
        <img
          src="https://images.pexels.com/photos/4096838/pexels-photo-4096838.jpeg"
          alt=""
          className="sbil_main_img"
        />
        <div>
          <Link to="/blog/strawberry">
            <h3 id="sbil_h1">
              Red, Ripe, and Ready: How Strawberries Can Elevate Your Health and
              Fitness Journey
            </h3>
          </Link>
          <p id="sbil_main_blog_desc">
            Discover the vibrant world of health and fitness with strawberries
            as your nutritional powerhouse. Dive into the wealth of benefits
            these ruby-red gems offer, from their antioxidant-rich profile to
            their fiber content, supporting digestive health and weight
            management. Explore how strawberries can enhance your workout
            routine, providing a natural energy boost and aiding in muscle
            recovery.
          </p>
          <div className="sbil_writer_details">
            <div className="sbil_writer_details_in">
              <p>
                <b>Siddharth Aasal</b>
              </p>
              <p>26 Feb, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogInList;
