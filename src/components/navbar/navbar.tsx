import React, { useContext } from "react";

import { AuthContext } from "service/authContext";

import User from "./components/user/";
import Sidebar from "./components/sidebar";

import * as S from "./navbar.styled";

const Nav = () => {
  const userInfo = useContext(AuthContext);

  return (
    <>
      <S.Container>
        <S.LinkContainer>
          <S.LinkTag home="true" to="/">
            HOME
          </S.LinkTag>
          <S.LinkTag to="/popular">popular</S.LinkTag>
          {userInfo && (
            <>
              <S.LinkTag to="/my">my</S.LinkTag>
            </>
          )}
        </S.LinkContainer>

        {userInfo ? <Sidebar /> : <User />}
      </S.Container>
    </>
  );
};

export default Nav;
