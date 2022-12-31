import React, { useContext } from "react";

import { AuthContext } from "service/authContext";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import * as S from "./navbar.styled";

const Nav = () => {
  const userInfo = useContext(AuthContext);

  const { pathname } = useLocation();

  return (
    <>
      <S.Container>
        <S.LinkBox isActive={pathname === "/"} home="true">
          <Link to="/">HOME</Link>
        </S.LinkBox>

        {userInfo && (
          <>
            <S.LinkBox isActive={pathname === "/popular"}>
              <Link to="/popular">popular</Link>
            </S.LinkBox>
            <S.LinkBox isActive={pathname === "/my"}>
              <Link to="/my">my</Link>
            </S.LinkBox>
          </>
        )}
      </S.Container>
    </>
  );
};

export default Nav;
