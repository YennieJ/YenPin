import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/home/home";
import Popular from "pages/popular";
import My from "pages/my";
import Nav from "components/navbar";
import ProtectRoute from "router/protectRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route
          path="my"
          element={
            <ProtectRoute>
              <My />
            </ProtectRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
