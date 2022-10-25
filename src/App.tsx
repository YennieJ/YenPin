import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProps, OnAuthChange } from "service/auth_service";
import { AuthProvider } from "service/auth_service";
import { auth } from "service/firebase";
import { User } from "@firebase/auth";

import Home from "./pages/home/home";
import Popular from "pages/popular";
import My from "pages/my";
import Nav from "components/navbar";

export interface Props {}

const App = ({}: Props) => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="my" element={<My />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
