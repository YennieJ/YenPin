import React, { useState } from "react";

import { AuthLogIn, GoogleProvider } from "service/auth_service";

import * as S from "./login.styled";

const GOOGLE_IMAGE = "/image/google_logo.png";

interface LoginProps {
  handleClickCreate: any;
  handleUserModal: any;
}

const Login = ({ handleClickCreate, handleUserModal }: LoginProps) => {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

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

  // const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   //submit되지 않기 위해 preventDefault 필요함
  //   e.preventDefault();
  //   setEmail("");
  //   setPwd("");
  //   // setIsCreate((pre) => !pre);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    AuthLogIn({ email, pwd });
  };

  return (
    <>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.LoginFormHead>
          <div>로그인</div>
          <S.CloseLoginModalButton type="button" onClick={handleUserModal}>
            &#10005;
          </S.CloseLoginModalButton>
        </S.LoginFormHead>
        <input
          placeholder="email"
          type="email"
          maxLength={25}
          name="email"
          onChange={handleInputChange}
          value={email}
        />
        <input
          placeholder="password"
          type="password"
          maxLength={15}
          name="pwd"
          onChange={handleInputChange}
          value={pwd}
          autoComplete="on"
        />
        <S.Button type="submit">로그인</S.Button>
        <S.Button type="button" onClick={handleClickCreate}>
          회원가입
        </S.Button>

        <S.GoogleLoginButton type="button" onClick={() => GoogleProvider()}>
          <S.GoogleButtonImage alt="" src={GOOGLE_IMAGE}></S.GoogleButtonImage>
        </S.GoogleLoginButton>
      </S.LoginForm>
    </>
  );
};

export default Login;

// import React, { useState } from "react";

// import { AuthLogIn, AuthSignUp, GoogleProvider } from "service/auth_service";

// import DialogBox from "components/dialogBox/dialogBox";

// import * as S from "./login.styled";

// const GOOGLE_IMAGE = "/image/google_logo.png";

// const Login = () => {
//   const [email, setEmail] = useState<string>("");
//   const [pwd, setPwd] = useState<string>("");

//   const [isCreate, setIsCreate] = useState<boolean>(false);
//   const [loginModal, setLoginModal] = useState<boolean>(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const {
//       target: { name, value },
//     } = e;

//     if (name === "email") {
//       setEmail(value);
//     } else if (name === "pwd") {
//       setPwd(value);
//     }
//   };

//   //아래 코드를 하나로 합친 것 handleInputChange
//   // const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   e.preventDefault();
//   //   setEmail(e.target.value);
//   // };

//   // const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   e.preventDefault();
//   //   setPwd(e.target.value);
//   // };

//   const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
//     //submit되지 않기 위해 preventDefault 필요함
//     e.preventDefault();
//     setEmail("");
//     setPwd("");
//     setIsCreate((pre) => !pre);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isCreate) {
//       AuthSignUp({ email, pwd });
//     } else {
//       AuthLogIn({ email, pwd });
//     }
//   };

//   const handleLoginModal = () => {
//     if (loginModal === false) {
//       document.body.style.overflow = "hidden";
//       setLoginModal(true);
//     } else {
//       document.body.style.overflow = "unset";
//       setEmail("");
//       setPwd("");
//       setIsCreate(false);
//       setLoginModal(false);
//     }
//   };

//   return (
//     <>
//       {loginModal ? (
//         <DialogBox>
//           <S.UserForm onSubmit={handleSubmit}>
//             <S.UserFormHead>
//               <div></div>
//               <div>{isCreate ? "회원가입" : "로그인"}</div>
//               <S.CloseLoginModalButton type="button" onClick={handleLoginModal}>
//                 &#10005;
//               </S.CloseLoginModalButton>
//             </S.UserFormHead>
//             <input
//               placeholder="email"
//               type="email"
//               maxLength={25}
//               name="email"
//               onChange={handleInputChange}
//               value={email}
//             />
//             <input
//               placeholder="password"
//               type="password"
//               maxLength={15}
//               name="pwd"
//               onChange={handleInputChange}
//               value={pwd}
//               autoComplete="on"
//             />
//             <S.SubmitButton>{isCreate ? "만들기" : "로그인"}</S.SubmitButton>
//             <S.SubmitButton onClick={handleClickCreate}>
//               {isCreate ? "취소" : "회원가입"}
//             </S.SubmitButton>
//             {isCreate ? null : (
//               <S.GoogleLoginButton
//                 type="button"
//                 onClick={() => GoogleProvider()}
//               >
//                 <S.GoogleButtonImage
//                   alt=""
//                   src={GOOGLE_IMAGE}
//                 ></S.GoogleButtonImage>
//               </S.GoogleLoginButton>
//             )}
//           </S.UserForm>
//         </DialogBox>
//       ) : (
//         <S.LoginButton type="button" onClick={handleLoginModal}>
//           Login
//         </S.LoginButton>
//       )}
//     </>
//   );
// };

// export default Login;
