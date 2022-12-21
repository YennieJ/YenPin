import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/home/home";
import Popular from "pages/popular";
import My from "pages/my";
import Nav from "components/navbar";
import ProtectRoute from "router/protectRoute";

import styled from "styled-components";

const Main = styled.div`
  height: calc(100% - 50px);
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Main>
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
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

export default Router;
