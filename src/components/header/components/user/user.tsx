import React, { useState } from "react";

import Login from "./login";
import Signup from "./signup";

import * as S from "./user.styled";

import { useLocation } from "react-router";
import DialogBox from "components/dialogBox/dialogBox";

const User = () => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/welcome" ? (
        <DialogBox>
          {isCreate ? (
            <Signup isLogin={() => setIsCreate(false)} />
          ) : (
            <Login isSignup={() => setIsCreate(true)} />
          )}
        </DialogBox>
      ) : (
        <S.LoginButton to="/welcome">Login</S.LoginButton>
      )}
    </div>
  );
};

export default User;
