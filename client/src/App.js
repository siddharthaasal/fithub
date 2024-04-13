import "./App.css";
import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import AuthPage from "./pages/AuthPage/AuthPage";
import { TermsPage } from "./pages/AuthPage/TermsPage";
import SecurityPage from "./pages/AuthPage/SecurityPage";
import PrivacyPage from "./pages/AuthPage/PrivacyPage";
import SupportPage from "./pages/AuthPage/SupportPage";
import ContactPage from "./pages/AuthPage/ContactPage";
import BlogHomePage from "./pages/BlogPage/BlogHomePage";
import MainDashboard from "./pages/DashboardPage/MainDashboard";
import ChooseExercise from "./pages/WorkoutPage/ChooseExercise";
import HumanCharacter from "./components/WorkoutComponents/HumanCharacter";
import SM_PublicGroupPage from "./pages/SocialMediaPage/SM_PublicGroupPage";
import AcceptRequest from "./components/SocialMediaComponents/AcceptRequest";
import CreateNewGroup from "./components/SocialMediaComponents/CreateNewGroup";
import LeaderBoard from "./components/SocialMediaComponents/LeaderBoard";
import SingleGroupPage from "./pages/SocialMediaPage/SingleGroupPage";
import LeaderBoardPage from "./pages/SocialMediaPage/LeaderBoardPage";
import OnboardingC1 from "./components/OnboardingComponents/OnboardingC1";

import OC1 from "./components/OnboardingComponents/OC1.jsx";
import OC2 from "./components/OnboardingComponents/OC2.jsx";
import OC3 from "./components/OnboardingComponents/OC3.jsx";
import OC4 from "./components/OnboardingComponents/OC4.jsx";
import OC5 from "./components/OnboardingComponents/OC5.jsx";
import OC6 from "./components/OnboardingComponents/OC6.jsx";
import OC7 from "./components/OnboardingComponents/OC7.jsx";
import OC8 from "./components/OnboardingComponents/OC8.jsx";
import OC_Final from "./components/OnboardingComponents/OC_Final.jsx";


import WeightGain from "./pages/BlogPage/StaticBlogs/WeightGain.jsx";
import WeightLoss from "./pages/BlogPage/StaticBlogs/WeightLoss.jsx";
import PPL from "./pages/BlogPage/StaticBlogs/PPL.jsx";
import Strawberry from "./pages/BlogPage/StaticBlogs/Strawberry.jsx";
import MealDashboard from "./pages/MealPage/MealDashboard.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Check if user is logged in (e.g., if token exists in local storage)
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    console.log("isLoggedIn:", isLoggedIn); // Add this line
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <OC1 /> : <AuthPage setIsLoggedIn={setIsLoggedIn} />
          }
        ></Route>
        <Route path="/terms" element={<TermsPage />}></Route>
        <Route path="/choose-exercise" element={<ChooseExercise />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/security" element={<SecurityPage />}></Route>
        <Route path="/privacy" element={<PrivacyPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
        <Route path="/blog" element={<BlogHomePage />}></Route>
        <Route path="/social/public" element={<SM_PublicGroupPage />}></Route>
        <Route path="/social/single" element={<SingleGroupPage />}></Route>
        <Route path="/social/request" element={<AcceptRequest />}></Route>
        <Route path="/social/create" element={<CreateNewGroup />}></Route>
        <Route path="/social/leaderboard" element={<LeaderBoardPage />}></Route>
        <Route path="/onboarding" element={<OnboardingC1 />}></Route>
        <Route path="/welcome" element={<OC1 />}></Route>
        <Route path="/welcome/name" element={<OC2 />}></Route>
        <Route path="/welcome/weight" element={<OC3 />}></Route>
        <Route path="/welcome/height" element={<OC4 />}></Route>
        <Route path="/welcome/level_of_activity" element={<OC5 />}></Route>
        <Route path="/welcome/goal_weight" element={<OC6 />}></Route>
        <Route path="/welcome/age" element={<OC7 />}></Route>
        <Route path="/welcome/gender" element={<OC8 />}></Route>
        <Route path="/welcome/plan" element={<OC_Final />}></Route>
        <Route path="/blog/weight-gain" element={<WeightGain />}></Route>
        <Route path="/blog/weight-loss" element={<WeightLoss />}></Route>
        <Route path="/blog/weight-ppl" element={<PPL />}></Route>
        <Route path="/meal-dashboard" element={<MealDashboard />}></Route>
        <Route path="/blog/strawberry" element={<Strawberry />}></Route>
        {/* <Route path="/blog" element={<BlogHomePage />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
