import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeComponent from "./Pages/HomePage";
import NotFoundPage from "./Components/NotFoundPage";

const AppComp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppComp;
