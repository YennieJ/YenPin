import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { AuthSignUp } from "service/auth_service";

import * as S from "./signup.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface SignupProps {
  closeUserModal: () => void;
  isLogin: () => void;
}

export interface IForm {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = ({ closeUserModal, isLogin }: SignupProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();

  const onValid = (data: any) => {
    const email = data.email;
    const password = data.password;
    if (data.password !== data.confirmPassword) {
      return setError(
        "confirmPassword",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    } else {
      AuthSignUp({ email, password });
    }
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <S.Container>
        <h1>회원가입</h1>
        <S.CloseLoginModalButton type="button" onClick={closeUserModal}>
          &#10005;
        </S.CloseLoginModalButton>

        <S.Form onSubmit={handleSubmit(onValid)}>
          <S.InputContainers>
            <S.inputContainer>
              <S.InputText>
                <label>Email</label>
                <span>
                  Already have an account?
                  <S.Login onClick={isLogin}>Log In</S.Login>
                </span>
              </S.InputText>
              <S.Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^([A-Za-z0-9]+){3}@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/,
                    message: "Please enter the correct email format",
                  },
                  minLength: { value: 5, message: "Your email is too short." },
                  maxLength: { value: 25, message: "Your email is too long." },
                })}
                placeholder="3자이상 이메일형식"
              />
              <p>{errors?.email?.message}</p>
            </S.inputContainer>
            <S.inputContainer>
              <S.InputText>
                <label>Password</label>
                {showPassword ? (
                  <S.PasswordText
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={faEyeSlash} />
                    Hide
                  </S.PasswordText>
                ) : (
                  <S.PasswordText
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={faEye} />
                    Show
                  </S.PasswordText>
                )}
              </S.InputText>
              <S.Input
                type={showPassword ? "text" : "password"}
                {...register("password", {
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
                })}
                placeholder="7-20 characters"
              />
              <p>{errors?.password?.message}</p>
            </S.inputContainer>
            <S.inputContainer>
              <S.InputText>
                <label>Confirm Password</label>
              </S.InputText>
              <S.Input
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Password is required",
                  minLength: {
                    value: 7,
                    message: "Your password is too short.",
                  },
                  maxLength: {
                    value: 20,
                    message: "Your password is too long.",
                  },
                })}
                placeholder="7-20 characters"
              />
              <p>{errors?.confirmPassword?.message}</p>
            </S.inputContainer>
          </S.InputContainers>
          <S.SignupButton type="submit">Sign up</S.SignupButton>
        </S.Form>
      </S.Container>
    </>
  );
};

export default Signup;
