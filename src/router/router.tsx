import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/home/home";
import Popular from "pages/popular";
import My from "pages/my";
import ProtectRoute from "router/protectRoute";
import Search from "pages/search/search";
import Header from "components/header";
import ProtectUser from "./protectUser";
import CreateCard from "pages/my/components/createCard";

import * as S from "./router.styled";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <S.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 로그인 (path= welcome) 모달창으로 열림 */}
          <Route
            path="welcome"
            element={
              <ProtectUser>
                <Home />
              </ProtectUser>
            }
          />
          {/* protectRoute로 user가 있을때만 보암 */}
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
