import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "pages/home/home";
import Popular from "pages/popular";
import My from "pages/my";
import ProtectRoute from "router/protectRoute";

import styled from "styled-components";
import Search from "pages/search/search";
import Header from "components/header";
import Login from "components/header/components/user/login";

const Main = styled.div`
  height: calc(100% - 50px);
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Main className="ROUTER">
        <Routes>
          <Route path="/welcome" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route
            path="popular"
            element={
              <ProtectRoute>
                <Popular />
              </ProtectRoute>
            }
          />
          <Route
            path="my"
            element={
              <ProtectRoute>
                <My />
              </ProtectRoute>
            }
          />
          <Route path="search" element={<Search />} />
          {/* <Route path="my/:saved" element={<My />} /> */}
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

export default Router;
