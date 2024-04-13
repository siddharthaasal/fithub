import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./OC_Final.scss"; // Import the SCSS file
import "../../pages/BlogPage/StaticBlogs/WeightGain.css"

const OC_Final = () => {
  let location = useLocation();
  const navigate = useNavigate();

  //fetching data from state
  const name = location.state ? location.state.name : "";
  const cWeight = location.state ? location.state.weight : "";
  const height = location.state ? location.state.height : "";
  const levelOfActivity = location.state ? location.state.levelOfActivity : "";
  const gWeight = location.state ? location.state.goalWeight : "";
  const gender = location.state ? location.state.gender : "";
  const age = location.state ? location.state.age : "";

  const [username, setUsername] = React.useState(name);
  const [currentWeight, setCurrentWeight] = React.useState(cWeight);
  const [goalWeight, setGoalWeight] = React.useState(gWeight);
  const [bmi, setBmi] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [recBlogs, setRecBlogs] = React.useState([]);
  const [whatToDo, setWhatToDO] = React.useState("maintain weight");
  const [bmr, setBmr] = React.useState("");
  const [reqCalories, setReqCalories] = React.useState("");
  const [macros, setMacros] = React.useState({
    proteins: 0,
    carbohydrates: 0,
    fats: 0,
  });

  useEffect(() => {
    calculateBMI(parseFloat(cWeight), parseFloat(height));
    calculateBMR(
      parseFloat(cWeight),
      parseFloat(height),
      parseFloat(age),
      gender
    );
  }, [cWeight, height, age, gender]);

  useEffect(() => {
    if (bmr !== "") {
      calculateCalories(bmr);
      WHATTODO(parseFloat(currentWeight), parseFloat(goalWeight));
    }
  }, [bmr, currentWeight, goalWeight]);
  useEffect(() => {
    calculateMacros(parseFloat(reqCalories));
    assignBlogs(parseFloat(cWeight), parseFloat(gWeight));
  });

  function calculateBMI(weight, height) {
    height /= 100;
    let bmi = weight / (height * height);
    bmi = Math.round((bmi + Number.EPSILON) * 100) / 100;
    setBmi(bmi);
  }

  function calculateBMR(weight, height, age, gender) {
    let bmr;
    console.log(gender);
    if (gender === "1") {
      console.log("male");
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }
    bmr = Math.round((bmr + Number.EPSILON) * 100) / 100;
    setBmr(bmr);
    // return bmr;
  }

  function calculateCalories(bmr) {
    let activityFactor = 1.3;
    let calories = bmr * activityFactor;
    calories = Math.round((calories + Number.EPSILON) * 100) / 100;
    setReqCalories(calories);
  }

  function WHATTODO(cw, gw) {
    if (cw > gw) {
      setWhatToDO("lose weight");
    } else {
      setWhatToDO("gain weight");
    }
  }

  function calculateMacros(calories) {
    // Define macronutrient ratios (as percentages of total calories)
    const proteinRatio = 0.3; // 30% of calories from protein
    const carbRatio = 0.4; // 40% of calories from carbohydrates
    const fatRatio = 0.3; // 30% of calories from fat

    // Calculate calories for each macronutrient
    const proteinCalories = calories * proteinRatio;
    const carbCalories = calories * carbRatio;
    const fatCalories = calories * fatRatio;

    // Convert macronutrient calories to grams (since 1g of protein/carbs = 4 calories, 1g of fat = 9 calories)
    let proteinGrams = proteinCalories / 4;
    let carbGrams = carbCalories / 4;
    let fatGrams = fatCalories / 9;

    proteinGrams = Math.round((proteinGrams + Number.EPSILON) * 100) / 100;
    carbGrams = Math.round((carbGrams + Number.EPSILON) * 100) / 100;
    fatGrams = Math.round((fatGrams + Number.EPSILON) * 100) / 100;

    console.log(carbGrams);
    // Return the calculated macronutrients
    setMacros({
      proteins: proteinGrams,
      carbohydrates: carbGrams,
      fats: fatGrams,
    });
  }

  function assignBlogs(cw, gw) {
    if (cw > gw) {
      // If the current weight is greater than the goal weight
      setRecBlogs([
        { name: "Blog A", link: "https://www.bloga.com" },
        { name: "Blog B", link: "https://www.blogb.com" },
        // Add more blog objects as needed
      ]);
    } else if (cw < gw) {
      // If the current weight is less than the goal weight
      setRecBlogs([
        { name: "Blog X", link: "https://www.blogx.com" },
        { name: "Blog Y", link: "https://www.blogy.com" },
        // Add more blog objects as needed
      ]);
    } else {
      // If the current weight is equal to the goal weight or any other condition
      setRecBlogs([]);
    }
  }
  const handleContinue = async () => {
    await axios.post("http://localhost:5000/api/storeUserInfoFurther", {
      bmi: bmi,
      bmr: bmr,
      caloriesRequired: reqCalories,
      proteinsRequired: macros.proteins,
      carbohydratesRequired: macros.carbohydrates,
      fatsRequired: macros.fats,
      duration: duration,
    });
  };

  const handleNav = () => {
    navigate("/meal-dashboard", {
      state: {
        name: location.state ? location.state.name : "",
        caloriesRequired: reqCalories,
        proteinsRequired: macros.proteins,
        carbohydratesRequired: macros.carbohydrates,
        fatsRequired: macros.fats,
      },
    });
  };

  return (
    <>
      <main>
        <div className="oc-final-container">
          <div className="username">Hello {username}</div>
          <div className="weight-info">
            Your Current Weight is {currentWeight}
          </div>
          <div className="weight-info">Your Goal Weight is {goalWeight}</div>
          <div className="bmi-info">Your BMI is {bmi}</div>
          <div className="bmr-info">Your BMR is {bmr}</div>
          <div className="calories-info">
            You must eat {reqCalories} calories
          </div>
          <div className="macros-info">
            Suggested Macros Split:
            <br />
            Protein: {macros.proteins} grams
            <br />
            Carbohydrates: {macros.carbohydrates} grams
            <br />
            Fats: {macros.fats} grams
          </div>
          {/* <div className="recommended-blogs">
            Recommended Blogs:
            <ul className="recommended-blog-list">
              {recBlogs.map((blog, index) => (
                <li className="recommended-blog-item" key={index}>
                  <a className="recommended-blog-link" href={blog.link}>
                    {blog.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
          <button onClick={handleNav}>Continue</button>
        </div>
      </main>
    </>
  );
};

export default OC_Final;
