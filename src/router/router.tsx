import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectRoute from "./protectRoute";

import Header from "components/header";
import Home from "pages/home/home";

import Popular from "pages/popular";
import My from "pages/my";
import CreateCard from "pages/createCard";
import Search from "pages/search/search";

import * as S from "./router.styled";

// protectRoute로 user가 있을때만 보임
const Router = () => {
  return (
    <BrowserRouter>
      <Header />.
      <S.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="welcome" element={<Home />} />
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
        </Routes>
      </S.Main>
    </BrowserRouter>
  );
};

export default Router;
