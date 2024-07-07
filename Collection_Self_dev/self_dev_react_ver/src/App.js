import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Dev from "./routes/Dev";
import Eng from "./routes/Eng";
import Employ from "./routes/Employ";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Dev" element={<Dev />}></Route>
          <Route path="/Eng" element={<Eng />}></Route>
          <Route path="/Employ" element={<Employ />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
