import React, { useContext } from "react";
import { AuthContext } from "service/authContext";

import Navbar from "components/header/components/navbar";
import SearchBar from "./components/searchBar/searchBar";
import Sidebar from "components/header/components/sidebar";
import User from "./components/user";
import ThemeButton from "./components/themeButton/themeButton";

import * as S from "./header.styled";

const Header = () => {
  const userInfo = useContext(AuthContext);

  return (
    <>
      <S.Container>
        <Navbar />
        <SearchBar />
        {userInfo ? <Sidebar /> : <User />}
      </S.Container>
      <ThemeButton />
    </>
  );
};

export default Header;
