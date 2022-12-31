import React, { useState } from "react";

import Login from "./login";
import Signup from "./signup";

import * as S from "./user.styled";
import DialogBox from "components/dialogBox/dialogBox";
import { useLocation, useNavigate } from "react-router";

const User = () => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const navigate = useNavigate();
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
        <S.LoginButton type="button" onClick={() => navigate("/welcome")}>
          Login
        </S.LoginButton>
      )}
    </div>
  );
};

export default User;
