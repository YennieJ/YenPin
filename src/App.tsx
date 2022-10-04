import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Popular from "pages/home/components/popular";
import My from "pages/home/components/my";
import Nav from "pages/home/components/nav";
import Header from "pages/home/components/header";
export interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
