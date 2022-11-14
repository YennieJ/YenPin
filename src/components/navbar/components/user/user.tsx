import React, { useState } from "react";

import Login from "./login";
import Signup from "./signup";

import DialogBox from "components/dialogBox/dialogBox";

import * as S from "./user.styled";

const User = () => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [userModal, setUserModal] = useState<boolean>(false);

  const handleUserModal = () => {
    if (userModal === false) {
      document.body.style.overflow = "hidden";
      setUserModal(true);
      setIsCreate(false);
    } else {
      document.body.style.overflow = "unset";
      setUserModal(false);
    }
  };

  const handleClickCreate = () => {
    setIsCreate(!isCreate);
  };

  return (
    <div>
      {userModal ? (
        <DialogBox>
          {isCreate ? (
            <Signup
              handleUserModal={handleUserModal}
              handleClickCreate={handleClickCreate}
            />
          ) : (
            <Login
              handleUserModal={handleUserModal}
              handleClickCreate={handleClickCreate}
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
