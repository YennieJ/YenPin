import React, { useContext } from "react";
import * as S from "./header.styled";

import styled from "styled-components";
import Navbar from "components/header/components/navbar";
import SearchBar from "./components/searchBar/searchBar";

import Sidebar from "components/header/components/sidebar";
import User from "./components/user";

import { AuthContext } from "service/authContext";

export const Container = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;

  border: 1px solid red;
`;

const Header = () => {
  const userInfo = useContext(AuthContext);

  return (
    <Container>
      <Navbar />
      <SearchBar />
      {userInfo ? <Sidebar /> : <User />}
    </Container>
  );
};

export default Header;
