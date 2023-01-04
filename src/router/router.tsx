import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "pages/home/home";
import Popular from "pages/popular";
import My from "pages/my";
import ProtectRoute from "router/protectRoute";

import styled from "styled-components";
import Search from "pages/search/search";
import Header from "components/header";
import ProtectUser from "./protectUser";
import CreateCard from "pages/my/components/createCard";

const Main = styled.div`
  height: calc(100% - 70px);
  flex-grow: 1;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="welcome"
            element={
              <ProtectUser>
                <Home />
              </ProtectUser>
            }
          />
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
          <Route
            path="/my/create"
            element={
              <ProtectRoute>
                <CreateCard />
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
