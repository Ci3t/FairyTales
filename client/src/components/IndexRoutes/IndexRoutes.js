import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

function IndexRoutes() {
  return (
    <Routes>
      <Route path="/homepage" element={<p>homepage</p>} />
      <Route path="/stories" element={<p>stories</p>} />
      <Route path="/new-story" element={<p>new-story</p>} />
      <Route path="/" element={<Navigate replace to="/homepage" />} />
      <Route path="*" element={<Navigate replace to="/homepage" />} />
    </Routes>
  );
}

export default IndexRoutes;
