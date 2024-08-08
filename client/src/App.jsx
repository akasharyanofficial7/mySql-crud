import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Home"; // Adjust the path based on your project structure
import FetchedData from "./FetchedData";

import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetchdata" element={<FetchedData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
