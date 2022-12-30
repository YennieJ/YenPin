import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "pages/home/home";
import Popular from "pages/popular";
import My from "pages/my";
import ProtectRoute from "router/protectRoute";

import styled from "styled-components";
import Search from "pages/search/search";
import Header from "components/header";

import NewCreateCrad from "pages/update/newCreateCard";
import NewMy from "pages/update/newMy";

const Main = styled.div`
  height: calc(100% - 50px);
`;

const AddButtom = styled(Link)`
  border: 1px solid red;
  font-size: 30px;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Main className="ROUTER">
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
          <Route path="my/:saved" element={<My />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

export default Router;
