import React from "react";
import "./BlogList.css";
import { Link } from "react-router-dom";

function BlogList(props) {
  return (
    <div className="blog-list-component">
      <div className="blog-list-img">
        <img
          src= {props.img}
          alt=""
          className="blog-list-img"
        />
      </div>
      <div className="blog-list-info">
        <Link
          to={props.link}
          // to="/blog/weight-gain" // This should be the path of the blog page within your React application
          className="blog-list-title"
        >
          <h1>{props.title}</h1>
        </Link>
        <p className="blog-list-desc">
          {props.desc}
        </p>
        <div className="blog-list-posted-by">
          <img src="" alt="" className="blog-list-owener-img" />
        </div>
      </div>
      <div className="blog-list-owner-desc">
        <p className="blog-list-owner-name">Siddharth Aasal</p>
        <p className="blog-list-posted-at">January 17, 2024</p>
      </div>
    </div>
  );
}

export default BlogList;
