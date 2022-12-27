import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "pages/home/home";
import Popular from "pages/popular";
import My from "pages/my";
import ProtectRoute from "router/protectRoute";

import styled from "styled-components";
import Search from "pages/search/search";
import Header from "components/header";
import Temp from "pages/my/components/temp";

const Main = styled.div`
  height: calc(100% - 50px);
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Temp />
      {/* <Main className="ROUTER">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cards/:id" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route
            path="my"
            element={
              <ProtectRoute>
                <My />
              </ProtectRoute>
            }
          />
          <Route
            path="search"
            element={
              <ProtectRoute>
                <Search />
              </ProtectRoute>
            }
          />
          <Route path="search/:id" element={<Home />} />
        </Routes>
      </Main> */}
    </BrowserRouter>
  );
};

export default Router;
