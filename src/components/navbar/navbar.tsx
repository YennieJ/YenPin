import React, { useState, useContext } from "react";

import { AuthContext } from "service/authContext";
import Login from "components/login";
import Sidebar from "components/sidebar";

import * as S from "components/navbar/navbar.styled";

export interface Props {}

const Nav = ({}: Props) => {
  const userInfo = useContext(AuthContext);

  return (
    <>
      <S.Header>
        <S.LinkTag to="/">HOME</S.LinkTag>
      </S.Header>
      <S.Container>
        <S.LinkContainer>
          <S.LinkTag to="/popular">popular</S.LinkTag>
          {userInfo && <S.LinkTag to="/my">my</S.LinkTag>}
        </S.LinkContainer>

        {userInfo ? <Sidebar /> : <Login />}
      </S.Container>
    </>
  );
};

export default Nav;
