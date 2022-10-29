import React, { useState } from "react";

import { AuthLogIn, AuthSignUp } from "service/auth_service";

import DialogBox from "components/dialogBox/dialogBox";

import * as S from "./login.styled";

//회원가입 페이지를 따로 만들어야 함////////////////////////////////////////////
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [loginModalcontrol, setLoginModalControl] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "pwd") {
      setPwd(value);
    }
  };

  //아래 코드를 하나로 합친 것 handleInputChange
  // const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setEmail(e.target.value);
  // };

  // const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setPwd(e.target.value);
  // };

  const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    //submit되지 않기 위해 preventDefault 필요함
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
              onChange={handleInputChange}
              value={email}
            />
            <input
              placeholder="password"
              type="password"
              name="pwd"
              onChange={handleInputChange}
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
