import React, { useState } from "react";

import { AuthLogIn, GoogleProvider } from "service/auth_service";

import * as S from "./login.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const GOOGLE_IMAGE = "/image/google_logo.png";

interface LoginProps {
  closeUserModal: () => void;
  isSignup: () => void;
}

const Login = ({ closeUserModal, isSignup }: LoginProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  //아래 코드를 하나로 합친 것 handleInputChange
  // const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setEmail(e.target.value);
  // };

  // const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setPassword(e.target.value);
  // };

  // const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   //submit되지 않기 위해 preventDefault 필요함
  //   e.preventDefault();
  //   setEmail("");
  //   setPassword("");
  //   // setIsCreate((pre) => !pre);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    AuthLogIn({ email, password });
  };

  return (
    <>
      <S.Container>
        <h1>로그인</h1>
        <S.CloseLoginModalButton type="button" onClick={closeUserModal}>
          &#10005;
        </S.CloseLoginModalButton>
        <form>
          <S.InputContainer>
            <S.InputText>
              <label>Email</label>
              <span>
                Need an account?
                <S.SignUp onClick={isSignup}>Sign up</S.SignUp>
              </span>
            </S.InputText>
            <S.Input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={email}
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.InputText>
              <label>Password</label>
              {showPassword ? (
                <S.PasswordText onClick={() => setShowPassword(!showPassword)}>
                  <FontAwesomeIcon icon={faEyeSlash} />
                  Hide
                </S.PasswordText>
              ) : (
                <S.PasswordText onClick={() => setShowPassword(!showPassword)}>
                  <FontAwesomeIcon icon={faEye} />
                  Show
                </S.PasswordText>
              )}
            </S.InputText>
            <S.Input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleInputChange}
              value={password}
              autoComplete="on"
            />
          </S.InputContainer>
        </form>
        <S.Button type="submit" onClick={handleSubmit}>
          Log in
        </S.Button>
        <S.AnotherLogin>
          Log in with Google
          <S.GoogleLoginButton type="button" onClick={() => GoogleProvider()}>
            <S.GoogleButtonImage
              alt=""
              src={GOOGLE_IMAGE}
            ></S.GoogleButtonImage>
          </S.GoogleLoginButton>
        </S.AnotherLogin>
      </S.Container>
    </>
  );
};

export default Login;
