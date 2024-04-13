import React from "react";
import BlogHeader from "../../components/BlogComponents/BlogHeader";
import BlogList from "../../components/BlogComponents/BlogList";
import "./BlogHomePage.css";
import SingleBlogInList from "../../components/BlogComponents/SingleBlogInList";

const BlogHomePage = () => {
  return (
    <>
      <BlogHeader />
      <div className="blog-home-taglines">
        <h1>Fitness Frontiers: Breaking Ground with Research Reports</h1>
        <p>
          Unraveling Calorie Myths and Redefining Workout Excellence and
          Unveiling the Latest in Fitness Science and Innovation to Elevate Your
          Health and Performance
        </p>
        <hr />
        <div className="bottom-blog-container">
          <div className="blog-filters">
            <b>Filters</b>
            <br />
            <br />
            <p> Calorie Intake</p>
            <br />
            <p>Workout Planning</p>
            <br />
            <p>Calisthenics</p>
            <br />
            <p>Mobility Routines</p>
            <br />
            <p>Rehab Work</p>
          </div>
          <div className="blog-list-main">
            <SingleBlogInList />
            <hr className="bhp_header" />
            <div className="sub-blogs">
              <BlogList
                title="How to gain weight"
                desc="Difficulies in gaining weight, follow this advice"
                img="https://blog.medibuddy.in/content/images/2018/02/weight-gain-centre-main.jpg"
                link="/blog/weight-gain"
              />
              <BlogList
                title="How to lose weight"
                img="https://images.moneycontrol.com/static-mcnews/2023/04/Weight-loss-tips-770x433.jpg?impolicy=website&width=770&height=431"
                desc="Tired of being fat? Follow this advice"
                link="/blog/weight-loss"
              />
            </div>
            <hr className="bhp_header" />
            {/* <div className="sub-blogs">
              <BlogList />
              <BlogList />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHomePage;
