import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "service/auth_service";

import Home from "./pages/home/home";
import Popular from "pages/popular";
import My from "pages/my";
import Nav from "components/navbar";

import GlobalStyle from "grobal.styled";
import ProtectRoute from "components/protectRoute";

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
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
    </AuthProvider>
  );
};

export default App;
