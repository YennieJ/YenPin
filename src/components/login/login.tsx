import React, { useState, useRef, useContext } from "react";

import { AuthContext } from "service/authContext";
import * as S from "./login.styled";

export interface Props {}

const Login = ({}: Props) => {
  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isCreate, setIsCreate] = useState(false);

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

  // const localVarRef = useRef<HTMLInputElement>(null);
  // const buttonClick = () => {
  //   console.log(localVarRef?.current?.value);
  // };

  return (
    <>
      {/* <input ref={localVarRef} />
      <button onClick={buttonClick}>+1</button>; */}
      <form>
        <input type="email" name="email" onChange={handleEmail} value={email} />
        <input type="password" name="pwd" onChange={handlePwd} value={pwd} />
        <button type="button"> {isCreate ? "만들기" : "로그인"}</button>
        <button type="button" onClick={handleClickCreate}>
          {isCreate ? "취소" : "회원가입"}
        </button>
      </form>
    </>
  );
};

export default Login;
