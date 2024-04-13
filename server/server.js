const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const cors = require("cors");
const request = require("request");
const axios = require("axios");
// var request = require("request");

// import postRoutes from "./routes/post";
// import { addPost, getPost, getPosts } from "./controllers/handlingPosts.cjs";

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Register endpoint
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id",
      [username, email, hashedPassword]
    );
    res.status(201).json({
      message: "User registered successfully",
      userId: result.rows[0].id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const user = result.rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json({ userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//store user name
app.post("/api/storeName", async (req, res) => {
  try {
    const { name } = req.body;

    // Insert the user's name into the database
    await pool.query("INSERT INTO user_info (user_name) VALUES ($1)", [name]);

    res.status(201).json({ message: "Name inserted successfully" });
  } catch (error) {
    console.error("Error while inserting name:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//store user weight
app.post("/api/storeUserInfo", async (req, res) => {
  try {
    const {
      userId,
      name,
      weight,
      height,
      levelOfActivity,
      goalWeight,
      age,
      gender,
    } = req.body;
    await pool.query(
      "INSERT INTO user_info (user_id,user_name, current_weight, current_height, level_of_activity, goal_weight, user_age, gender) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [userId, name, weight, height, levelOfActivity, goalWeight, age, gender]
    );
    // Insert the user's name into the database
    // await pool.query("INSERT INTO user_info (current_weight) VALUES ($1)", [
    //   weight,
    // ]);

    res.status(201).json({ message: "Weight inserted successfully" });
  } catch (error) {
    console.error("Error while inserting weight:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//health data\
//store user weight
app.post("/api/storeUserInfoFurther", async (req, res) => {
  try {
    const {
      bmi,
      bmr,
      caloriesRequired,
      proteinsRequired,
      carbohydratesRequired,
      fatsRequired,
      duration,
    } = req.body;
    await pool.query(
      "INSERT INTO user_info (bmi, bmr, calreq, proteinsreq,carbsreq,fatsreq,duration) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [
        bmi,
        bmr,
        caloriesRequired,
        proteinsRequired,
        carbohydratesRequired,
        fatsRequired,
        duration,
      ]
    );
    // Insert the user's name into the database
    // await pool.query("INSERT INTO user_info (current_weight) VALUES ($1)", [
    //   weight,
    // ]);

    res.status(201).json({ message: "Weight inserted successfully" });
  } catch (error) {
    console.error("Error while inserting weight:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/nutritionix/", (req, res) => {
  try {
    console.log("backend");
    const { foodName } = req.body;
    console.log("Received prompt on backend: " + foodName);
    var options = {
      method: "POST",
      url: "https://trackapi.nutritionix.com/v2/natural/nutrients",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": "06f9cc49",
        "x-app-key": "94b905c2132dbbda0cecadd42d36e10d",
      },
      body: JSON.stringify({
        query: foodName,
      }),
    };
    request(options, function (error, response) {
      let foodInformationArray = [];

      if (error) throw new Error(error);
      calData = response.body;
      const foodData = JSON.parse(response.body);
      //   console.log(foodData);

      function getValueByAttrId(nutrients, attrId) {
        for (const nutrient of nutrients) {
          if (nutrient.attr_id === attrId) {
            return nutrient.value;
          }
        }
        // Return null if attr_id is not found
        return null;
      }

      for (var i = 0; i < foodData.foods.length; i++) {
        const fullNutrientsArray = foodData.foods[i].full_nutrients;
        // Extract and store macronutrients
        const foodInformation = {
          name: foodData.foods[i].food_name,
          quantity:
            foodData.foods[i].serving_qty + foodData.foods[i].serving_unit,
          imgSrc: foodData.foods[i].photo.thumb,
          calories: getValueByAttrId(fullNutrientsArray, 208),
          carbs: getValueByAttrId(fullNutrientsArray, 205),
          protein: getValueByAttrId(fullNutrientsArray, 203),
          fat: getValueByAttrId(fullNutrientsArray, 204),
          fiber: getValueByAttrId(fullNutrientsArray, 2091),
          calcium: getValueByAttrId(fullNutrientsArray, 301),
          cholesterol: getValueByAttrId(fullNutrientsArray, 601),
          iron: getValueByAttrId(fullNutrientsArray, 303),
          potassium: getValueByAttrId(fullNutrientsArray, 306),
          sodium: getValueByAttrId(fullNutrientsArray, 307),
          zinc: getValueByAttrId(fullNutrientsArray, 309),
          vitamin_A: getValueByAttrId(fullNutrientsArray, 320),
          vitamin_C: getValueByAttrId(fullNutrientsArray, 401),
          vitamin_D: getValueByAttrId(fullNutrientsArray, 328),
          vitamin_E: getValueByAttrId(fullNutrientsArray, 323),
          vitamin_K: getValueByAttrId(fullNutrientsArray, 430),
        };
        console.log(foodInformation);
        foodInformationArray.push(foodInformation);
      }
      res.status(200).json({ message: foodInformationArray });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error!!!" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
