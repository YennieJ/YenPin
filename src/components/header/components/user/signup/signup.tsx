import React, { useState } from "react";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";

import { AuthSignUp } from "service/auth_service";

import * as S from "./signup.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface ISignup {
  isLogin: () => void;
}

export interface IForm {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = ({ isLogin }: ISignup) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const goHome = () => {
    isLogin();
    navigate("/");
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm<IForm>();

  const emailRegister = register("email", {
    required: "Email is required",
    pattern: {
      value: /^([A-Za-z0-9]+){3}@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/,
      message: "Please enter the correct email format",
    },
    minLength: { value: 5, message: "Your email is too short." },
    maxLength: { value: 25, message: "Your email is too long." },
  });

  const passwordRegister = register("password", {
    required: "Password is required",
    pattern: {
      value: /^[A-Za-z0-9]{7,20}$/,
      message: "7-20 English characters and numbers.",
    },
    minLength: {
      value: 7,
      message: "Your password is too short.",
    },
    maxLength: {
      value: 20,
      message: "Your password is too long.",
    },
  });

  const confirmPwdRegister = register("confirmPassword", {
    required: "Password is required",
    pattern: {
      value: /^[A-Za-z0-9]{7,20}$/,
      message: "7-20 English characters and numbers.",
    },
    minLength: {
      value: 7,
      message: "Your password is too short.",
    },
    maxLength: {
      value: 20,
      message: "Your password is too long.",
    },
  });

  const onValid = () => {
    const email = getValues("email");
    const password = getValues("password");
    const confirmPassword = getValues("confirmPassword");

    if (password !== confirmPassword) {
      return setError(
        "confirmPassword",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    } else {
      AuthSignUp({ email, password });
    }
  };

  return (
    <S.Container>
      <h1>회원가입</h1>
      <S.CloseLoginModalButton type="button" onClick={goHome}>
        &#10005;
      </S.CloseLoginModalButton>

      <S.Form onSubmit={handleSubmit(onValid)}>
        <S.InputContainers>
          <S.inputContainer>
            <div>
              <label>Email</label>
              <span>
                Already have an account?
                <S.LoginButton onClick={isLogin}>Log In</S.LoginButton>
              </span>
            </div>
            <S.Input {...emailRegister} placeholder="3자이상 이메일형식" />
            <p>{errors?.email?.message}</p>
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
              {...passwordRegister}
              type={showPassword ? "text" : "password"}
              placeholder="7-20 characters"
            />
            <p>{errors?.password?.message}</p>
          </S.inputContainer>
          <S.inputContainer>
            <div>
              <label>Confirm Password</label>
            </div>
            <S.Input
              {...confirmPwdRegister}
              type={showPassword ? "text" : "password"}
              placeholder="7-20 characters"
            />
            <p>{errors?.confirmPassword?.message}</p>
          </S.inputContainer>
        </S.InputContainers>
        <S.SignupButton type="submit">Sign up</S.SignupButton>
      </S.Form>
    </S.Container>
  );
};

export default Signup;
