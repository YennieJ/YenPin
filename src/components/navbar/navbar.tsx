import React, { useContext } from "react";

import { AuthContext } from "service/authContext";

import Login from "./components/login/login";
import Sidebar from "./components/sidebar";

import * as S from "./navbar.styled";

const Nav = () => {
  const userInfo = useContext(AuthContext);

  return (
    <>
      <S.Header>
        <S.LinkTag className="selected" home="true" to="/">
          HOME
        </S.LinkTag>
      </S.Header>
      <S.Container>
        <S.LinkContainer>
          <S.LinkTag className="selected" to="/popular">
            popular
          </S.LinkTag>
          {userInfo && (
            <S.LinkTag className="selected" to="/my">
              my
            </S.LinkTag>
          )}
        </S.LinkContainer>

        {userInfo ? <Sidebar /> : <Login />}
      </S.Container>
    </>
  );
};

export default Nav;
