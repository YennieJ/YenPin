import React, { useState } from "react";

import Login from "./login";
import Signup from "./signup";

import * as S from "./user.styled";
import DialogBox from "components/dialogBox/dialogBox";

const User = () => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [userModal, setUserModal] = useState<boolean>(false);

  const handleUserModal = () => {
    if (userModal === false) {
      document.body.style.overflow = "hidden";
      setUserModal(true);
      setIsCreate(false);
    } else {
      document.body.style.overflow = "visible";
      setUserModal(false);
    }
  };

  return (
    <div>
      {userModal ? (
        <DialogBox>
          {isCreate ? (
            <Signup
              closeUserModal={handleUserModal}
              isLogin={() => setIsCreate(false)}
            />
          ) : (
            <Login
              closeUserModal={handleUserModal}
              isSignup={() => setIsCreate(true)}
            />
          )}
        </DialogBox>
      ) : (
        <S.LoginButton type="button" onClick={handleUserModal}>
          Login
        </S.LoginButton>
      )}
    </div>
  );
};

export default User;
