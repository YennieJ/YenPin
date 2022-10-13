import React, { useState, useContext } from "react";

import { AuthContext } from "service/authContext";
import Login from "components/login";

import * as S from "components/navbar/navbar.styled";
import Button from "components/button";

export interface Props {}

const Nav = ({}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const userInfo = useContext(AuthContext);

  const handleModal = () => setIsOpen(!isOpen);
  return (
    <>
      <S.Header>
        <S.LinkTag className="nav-link active" to="/">
          HOME
        </S.LinkTag>
      </S.Header>
      <S.Container>
        <S.LinkContainer>
          <S.LinkTag className="nav-link" to="/popular">
            popular
          </S.LinkTag>
          {userInfo ? (
            <S.LinkTag className="nav-link" to="/my">
              my
            </S.LinkTag>
          ) : null}
        </S.LinkContainer>

        {!isOpen ? null : (
          <S.LinkContainer>
            <Login handleModal={handleModal} />
          </S.LinkContainer>
        )}
        {userInfo ? (
          <>
            {isOpen ? null : (
              <Button nav onClick={handleModal}>
                &#8801;
              </Button>
            )}
          </>
        ) : (
          <>
            {!isOpen ? (
              <Button Snav onClick={handleModal}>
                Login
              </Button>
            ) : null}
          </>
        )}
      </S.Container>
    </>
  );
};

export default Nav;
