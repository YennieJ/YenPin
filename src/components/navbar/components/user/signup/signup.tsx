import React, { useState } from "react";

import { AuthSignUp } from "service/auth_service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as S from "./signup.styled";

interface SignupProps {
  handleUserModal: any;
  handleClickCreate: any;
}
const Signup = ({ handleUserModal, handleClickCreate }: SignupProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailReg: RegExp =
      /^([A-Za-z0-9]+){3}@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/;
    const passwordReg: RegExp = /^[A-Za-z0-9]{7,20}$/;
    const emailTest = emailReg.test(email);
    const passwordTest = passwordReg.test(password);
    if (email === "" || password === "" || confirmPassword === "") {
      alert("칸을 비워둘수없습니다.");
    } else if (emailTest === false) {
      alert("이메일 형식에 맞게 입력하세요");
    } else if (passwordTest === false) {
      alert("비밀번호는 영문,숫자 7-20자 사이로 입력해주세요");
    } else if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다");
    } else {
      AuthSignUp({ email, password });
    }
  };

  return (
    <>
      <S.Container>
        <h1>회원가입</h1>
        <S.CloseLoginModalButton type="button" onClick={handleUserModal}>
          &#10005;
        </S.CloseLoginModalButton>
        <form>
          <S.InputContainer>
            <S.InputText>
              <label>Email</label>
              <span>
                Already have an account?
                <S.Login onClick={handleClickCreate}>Log In</S.Login>
              </span>
            </S.InputText>

            <S.Input
              type="email"
              name="email"
              placeholder="3자이상 이메일형식"
              onChange={handleInputChange}
              value={email}
              maxLength={25}
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
              placeholder="7-20 characters"
              onChange={handleInputChange}
              value={password}
              autoComplete="on"
              maxLength={20}
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputText>
              <label>Confirm Password</label>
            </S.InputText>
            <S.Input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="7-20 characters"
              onChange={handleInputChange}
              value={confirmPassword}
              autoComplete="on"
              maxLength={20}
            />
          </S.InputContainer>
        </form>
        <S.Button type="submit" onClick={handleSubmit}>
          Sign up
        </S.Button>
      </S.Container>
    </>
  );
};

export default Signup;
