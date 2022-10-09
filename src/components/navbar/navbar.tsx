import React, { useState } from "react";
import * as S from "components/navbar/navbar.styled";
import Login from "components/login";

export interface Props {}

const Nav = ({}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onclick = () => setIsOpen(!isOpen);
  return (
    <>
      <S.NavbarHeader>
        <S.NavbarLink className="nav-link active" to="/">
          HOME
        </S.NavbarLink>
      </S.NavbarHeader>
      <S.NavbarContainer>
        <S.NavbarLinkContainer>
          <S.NavbarLink to="/"></S.NavbarLink>

          <S.NavbarLink className="nav-link" to="/popular">
            popular
          </S.NavbarLink>

          {isOpen === false ? null : (
            <>
              <S.NavbarLink className="nav-link" to="/my">
                my
              </S.NavbarLink>

              <Login />
            </>
          )}
          <div onClick={onclick}>{isOpen === false ? "login" : "logout"}</div>
        </S.NavbarLinkContainer>
      </S.NavbarContainer>
    </>
  );
};

export default Nav;
