import React, { useState, useContext } from "react";

import { AuthContext } from "service/authContext";
import Login from "components/login";

import * as S from "components/navbar/navbar.styled";

export interface Props {}

const Nav = ({}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const userInfo = useContext(AuthContext);

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
          <S.NavbarLink className="nav-link" to="/popular">
            popular
          </S.NavbarLink>
          {userInfo ? (
            <S.NavbarLink className="nav-link" to="/my">
              my
            </S.NavbarLink>
          ) : null}

          {isOpen === false ? null : (
            <>
              <Login />
            </>
          )}

          <div onClick={onclick}>
            {" "}
            {userInfo ? (
              <>
                {isOpen ? null : (
                  <S.DetailButton onClick={onclick}>&#8801;</S.DetailButton>
                )}
              </>
            ) : (
              <>{!isOpen ? "login" : null}</>
            )}
          </div>

          {/* <div onClick={onclick}>{!isOpen ? "login" : null}</div> */}
        </S.NavbarLinkContainer>
      </S.NavbarContainer>
    </>
  );
};

export default Nav;
