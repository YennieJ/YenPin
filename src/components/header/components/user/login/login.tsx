import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { AuthLogIn, GoogleProvider } from "service/auth_service";

import * as S from "./login.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface LoginProps {
  isSignup: () => void;
}

const Login = ({ isSignup }: LoginProps) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const { register, handleSubmit, getValues } = useForm();

  const onValid = () => {
    const email = getValues("email");
    const password = getValues("password");

    AuthLogIn({ email, password });
  };

  return (
    <>
      <S.Container>
        <h1>로그인</h1>
        <S.CloseLoginModalButton type="button" onClick={() => navigate("/")}>
          &#10005;
        </S.CloseLoginModalButton>
        <S.Form onSubmit={handleSubmit(onValid)}>
          <S.InputContainers>
            <S.inputContainer>
              <div>
                <label>Email</label>
                <span>
                  Need an account?
                  <S.SignupButton onClick={isSignup}>Sign up</S.SignupButton>
                </span>
              </div>
              <S.Input {...register("email")} />
            </S.inputContainer>
            <S.inputContainer>
              <div>
                <label>Password</label>
                {showPassword ? (
                  <S.ShowPwdButton onClick={handleShowPassword}>
                    <FontAwesomeIcon icon={faEyeSlash} />
                    Hide
                  </S.ShowPwdButton>
                ) : (
                  <S.ShowPwdButton onClick={handleShowPassword}>
                    <FontAwesomeIcon icon={faEye} />
                    Show
                  </S.ShowPwdButton>
                )}
              </div>
              <S.Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
              />
            </S.inputContainer>
          </S.InputContainers>
          <S.Button type="submit">Log in</S.Button>
        </S.Form>
        <S.AnotherLogin>
          Log in with Google
          <S.GoogleLoginButton type="button" onClick={() => GoogleProvider()}>
            <S.GoogleButtonImage />
          </S.GoogleLoginButton>
        </S.AnotherLogin>
      </S.Container>
    </>
  );
};

export default Login;
