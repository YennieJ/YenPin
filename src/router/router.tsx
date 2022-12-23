import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/home/home";
import Popular from "pages/popular";
import My from "pages/my";
import Nav from "components/navbar";
import ProtectRoute from "router/protectRoute";

import styled from "styled-components";
import Search from "pages/search";
import { FbGetSearch } from "service/card_repository";
import Footer from "components/footer/footer";

const Main = styled.div`
  height: calc(100% - 50px);
`;

const Router = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (value.length > 0) {
      FbGetSearch(value).then((reponse) => console.log(reponse));
    }
  });
  return (
    <BrowserRouter>
      <Nav />
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cards/:id" element={<Home />} />
          <Route path="/search" element={<Search />} />
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
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
