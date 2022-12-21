import React from "react";
import { Routes, Route } from "react-router-dom";
import Stories from "../Stories";
import { Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Story from "../../pages/Randomstory";

function IndexRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/stories" element={<Stories/>} />
      <Route path="/new-story" element={<p>new-story</p>} />
      <Route path="/story" element={<Story/>}/>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default IndexRoutes;
