import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { CircularProgress, Typography, Box } from "@mui/material";
import "./MealDashboard.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const MealDashboard = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const [carbsConsumed, setCarbsConsumed] = useState(0);
  const [proteinsConsumed, setProteinsConsumed] = useState(0);
  const [fatsConsumed, setFatsConsumed] = useState(0);
  const [fiberConsumed, setFiberConsumed] = useState(0);
  const [meals, setMeals] = useState([]);
  const username = location.state ? location.state.name : ""; // Replace with actual username
  const caloriesGoal = location.state ? location.state.caloriesRequired : ""; // Replace with user's calorie goal
  const carbsGoal = location.state ? location.state.carbohydratesRequired : "";
  const proteinsGoal = location.state ? location.state.proteinsRequired : "";
  const fatsGoal = location.state ? location.state.fatsRequired : "";
  const fiberGoal = 120;
  const [userPrompt, setUserPrompt] = useState("");

  const handleAddCalories = (caloriesToAdd) => {
    setCaloriesConsumed(caloriesConsumed + caloriesToAdd);
  };

  const handleMessageChange = (event) => {
    setUserPrompt(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/nutritionix", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ foodName: userPrompt }),
      });
      if (response.ok) {
        console.log("Data sent successfully to the backend");
        const responseData = await response.json(); // Parse the response body as JSON
        console.log(responseData); // Log the parsed response data
        console.log("Calories are" + responseData.message[0].calories);
        setCaloriesConsumed(
          caloriesConsumed + responseData.message[0].calories
        );
        setCarbsConsumed(carbsConsumed + responseData.message[0].carbs);
        setFatsConsumed(fatsConsumed + responseData.message[0].fat);
        setProteinsConsumed(proteinsConsumed + responseData.message[0].protein);
        setFiberConsumed(fiberConsumed + responseData.message[0].fiber);
      } else {
        console.error("Failed to send data to the backend");
      }
    } catch (error) {
      console.log("Error in catch block: " + error);
    }
  };

  return (
    <>
      <div className="md_main">
        <div className="md_h">Hello {username}</div>
        <hr className="md_hr" />

        <div className="md_con">
          <div className="md_nav">
            Meals <br />
            Workouts <br />
            <Link to="/blog">Blog</Link>
            <br />
            <a href="https://demo.evershop.io/" target="_blank">
              {" "}
              E-commerce{" "}
            </a>
          </div>
          <div className="md_idk">
            <div className="md_data">
              <div className="md_cal">
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <Typography variant="h5" gutterBottom>
                    Calories
                  </Typography>
                  <Box
                    position="relative"
                    display="inline-flex"
                    alignItems="center"
                  >
                    <CircularProgress
                      variant="determinate"
                      value={(caloriesConsumed / caloriesGoal) * 100}
                      size={150}
                      thickness={5}
                    />
                    <Box
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="absolute"
                    >
                      <Typography
                        variant="h5"
                        component="div"
                        color="textPrimary"
                      >
                        {`${Math.round(
                          (caloriesConsumed / caloriesGoal) * 100
                        )}%`}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" style={{ marginTop: "20px" }}>
                    {`${caloriesConsumed}/${caloriesGoal}`} kcal
                  </Typography>
                </div>
              </div>
              <div className="md_cal">
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <Typography variant="h5" gutterBottom>
                    Carbs
                  </Typography>
                  <Box
                    position="relative"
                    display="inline-flex"
                    alignItems="center"
                  >
                    <CircularProgress
                      variant="determinate"
                      value={(carbsConsumed / carbsGoal) * 100}
                      size={150}
                      thickness={5}
                    />
                    <Box
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="absolute"
                    >
                      <Typography
                        variant="h5"
                        component="div"
                        color="textPrimary"
                      >
                        {`${Math.round((carbsConsumed / carbsGoal) * 100)}%`}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" style={{ marginTop: "20px" }}>
                    {`${carbsConsumed}/${carbsGoal}`} g
                  </Typography>
                </div>
              </div>
              <div className="md_cal">
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <Typography variant="h5" gutterBottom>
                    Proteins
                  </Typography>
                  <Box
                    position="relative"
                    display="inline-flex"
                    alignItems="center"
                  >
                    <CircularProgress
                      variant="determinate"
                      value={(proteinsConsumed / proteinsGoal) * 100}
                      size={150}
                      thickness={5}
                    />
                    <Box
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="absolute"
                    >
                      <Typography
                        variant="h5"
                        component="div"
                        color="textPrimary"
                      >
                        {`${Math.round(
                          (proteinsConsumed / proteinsGoal) * 100
                        )}%`}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" style={{ marginTop: "20px" }}>
                    {`${proteinsConsumed}/${proteinsGoal}`} g
                  </Typography>
                </div>
              </div>
              <div className="md_cal">
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <Typography variant="h5" gutterBottom>
                    Fats
                  </Typography>
                  <Box
                    position="relative"
                    display="inline-flex"
                    alignItems="center"
                  >
                    <CircularProgress
                      variant="determinate"
                      value={(fatsConsumed / fatsGoal) * 100}
                      size={150}
                      thickness={5}
                    />
                    <Box
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="absolute"
                    >
                      <Typography
                        variant="h5"
                        component="div"
                        color="textPrimary"
                      >
                        {`${Math.round((fatsConsumed / fatsGoal) * 100)}%`}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" style={{ marginTop: "20px" }}>
                    {`${fatsConsumed}/${fatsGoal}`} g
                  </Typography>
                </div>
              </div>
              {/* <div className="md_cal">
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <Typography variant="h5" gutterBottom>
                    Fibers
                  </Typography>
                  <Box
                    position="relative"
                    display="inline-flex"
                    alignItems="center"
                  >
                    <CircularProgress
                      variant="determinate"
                      value={(fiberConsumed / fiberGoal) * 100}
                      size={150}
                      thickness={5}
                    />
                    <Box
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="absolute"
                    >
                      <Typography
                        variant="h5"
                        component="div"
                        color="textPrimary"
                      >
                        {`${Math.round((fiberConsumed / fiberGoal) * 100)}%`}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" style={{ marginTop: "20px" }}>
                    {`${fiberConsumed}/${fiberGoal}`} g
                  </Typography>
                </div>
              </div> */}
            </div>
            <div className="md_logFood">
              <div>
                <label htmlFor="userPrompt">What did you eat?</label>
                <br />
                <textarea
                  id="userPrompt"
                  name="userPrompt"
                  value={userPrompt}
                  onChange={handleMessageChange}
                />

                {/* <hr /> */}

                <button disabled={!userPrompt} onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealDashboard;
