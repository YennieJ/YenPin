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
  const handleSubit = (e: React.FormEvent) => {
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
  };

  const handleLogout = () => {
    signOut(auth);
  };

  //ref는 매개변수에 할당할수없대,
  // const localVarRef = useRef<HTMLInputElement>(null);
  // const buttonClick = () => {
  //   console.log(localVarRef?.current?.value);
  // };

  return (
    <>
      {/* <input ref={localVarRef} />
      <button onClick={buttonClick}>+1</button>; */}
      <div className="App">
        {userInfo ? (
          <div>
            {" "}
            로그인 상태입니다 <button onClick={handleLogout}> 로그아웃 </button>
          </div>
        ) : (
          <form onSubmit={handleSubit}>
            <input
              type="email"
              name="email"
              onChange={handleEmail}
              value={email}
            />
            <input
              type="password"
              name="pwd"
              onChange={handlePwd}
              value={pwd}
            />
            <button type="submit"> {isCreate ? "만들기" : "로그인"}</button>
            <button type="button" onClick={handleClickCreate}>
              {isCreate ? "취소" : "회원가입"}
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
