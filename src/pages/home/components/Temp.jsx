import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../About";

const Temp = () => {
  return (
    <div>
      여긴Temp임
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Temp;
