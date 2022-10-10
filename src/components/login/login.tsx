import React, { useState, useContext } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth } from "service/firebase";
import { AuthContext } from "service/authContext";

import * as S from "./login.styled";

export interface Props {}

const Login = ({}: Props) => {
  const userInfo = useContext(AuthContext);

  const [sidebar, setSidebar] = useState(false);
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

  const sidebarToggle = () => setSidebar(!sidebar);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 회원 가입일때
    if (isCreate) {
      createUserWithEmailAndPassword(auth, email, pwd)
        .then(() => {
          alert("회원가입 성공");
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      signInWithEmailAndPassword(auth, email, pwd)
        .then(() => {
          alert("로그인 성공");
        })
        .catch((e) => {
          alert(e);
        });
    }
    setSidebar(true);
  };

  const handleLogout = () => {
    signOut(auth);
    window.location.reload();
  };

  //ref는 매개변수에 할당할수없대, 그래서 파이어 베이스 문법으론 쓸 수 없음
  // const localVarRef = useRef<HTMLInputElement>(null);
  // const buttonClick = () => {
  //   console.log(localVarRef?.current?.value);
  // };
  // <input ref={localVarRef} />
  // <button onClick={buttonClick}>+1</button>;
  return (
    <>
      <div>
        {userInfo ? (
          <>
            {sidebar ? (
              <S.SidebarButton onClick={sidebarToggle}>&#8801;</S.SidebarButton>
            ) : (
              <>
                <S.SidebarButton onClick={sidebarToggle}>
                  &#10005;
                </S.SidebarButton>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            )}
          </>
        ) : (
          <S.Backdrop>
            <S.UserForm onSubmit={handleSubmit}>
              <S.DialogBox>
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
                <button type="submit"> {isCreate ? "만들기" : "로그인"}</button>
                <button type="button" onClick={handleClickCreate}>
                  {isCreate ? "취소" : "회원가입"}
                </button>
              </S.DialogBox>
            </S.UserForm>
          </S.Backdrop>
        )}
      </div>
    </>
  );
};

export default Login;
