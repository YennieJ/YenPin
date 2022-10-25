import React, { useState } from "react";

import { AuthLogIn, AuthSignUp } from "service/auth_service";

import DialogBox from "components/dialogBox/dialogBox";
import * as S from "./login.styled";

// export interface Props {
//   handleModal: () => void;
// }
// { handleModal }: Props

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [loginModalcontrol, setLoginModalControl] = useState<boolean>(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsCreate((pre) => !pre);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isCreate) {
      AuthSignUp({ email, pwd });
    } else {
      AuthLogIn({ email, pwd });
    }
  };

  const HandleLoginModal = () => {
    setEmail("");
    setPwd("");
    setIsCreate(false);
    setLoginModalControl(!loginModalcontrol);
  };

  return (
    <>
      {loginModalcontrol ? (
        <DialogBox>
          <S.UserForm onSubmit={handleSubmit}>
            <S.UserFormHead>
              <div></div>
              <div>{isCreate ? "회원가입" : "로그인"}</div>
              <S.CloseLoginModalButton type="button" onClick={HandleLoginModal}>
                &#10005;
              </S.CloseLoginModalButton>
            </S.UserFormHead>
            <input
              placeholder="email"
              type="email"
              name="email"
              onChange={handleEmail}
              value={email}
            />
            <input
              placeholder="password"
              type="password"
              name="pwd"
              onChange={handlePwd}
              value={pwd}
            />
            <S.SubmitButton>{isCreate ? "만들기" : "로그인"}</S.SubmitButton>
            <S.SubmitButton onClick={handleClickCreate}>
              {isCreate ? "취소" : "회원가입"}
            </S.SubmitButton>
          </S.UserForm>
        </DialogBox>
      ) : (
        <S.LoginButton
          type="button"
          onClick={() => setLoginModalControl(!loginModalcontrol)}
        >
          Login
        </S.LoginButton>
      )}
    </>
  );
};

export default Login;
