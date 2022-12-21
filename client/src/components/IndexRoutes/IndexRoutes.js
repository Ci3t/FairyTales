import React from "react";
import { Routes, Route } from "react-router-dom";

import CreateStory from "../../pages/CreateStory";

import { Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";

import TalePage from "../../pages/TalePage";
import LandingPage from "../../pages/LandingPage";
import Randomstory from "../../pages/Randomstory";

function IndexRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/stories" element={<p>Stories</p>} />
      <Route path="/stories/:id" element={<TalePage/>} />
      <Route path="/new-story" element={<CreateStory/>} />
      <Route path="/story" element={<Randomstory/>}/>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default IndexRoutes;
