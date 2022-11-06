import React, { useState } from "react";

import { AuthLogIn, AuthSignUp, GoogleProvider } from "service/auth_service";

import DialogBox from "components/dialogBox/dialogBox";

import * as S from "./login.styled";

const GOOGLE_IMAGE = "/image/google_logo.png";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [loginModalcontrol, setLoginModalControl] = useState<boolean>(false);

  loginModalcontrol
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

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
            <S.GoogleLoginButton type="button" onClick={() => GoogleProvider()}>
              <S.GoogleButtonImage
                alt=""
                src={GOOGLE_IMAGE}
              ></S.GoogleButtonImage>
            </S.GoogleLoginButton>
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

//회원가입 페이지를 따로 만들어야 함////////////////////////////////////////////
// const Login = () => {
//   const [email, setEmail] = useState<string>("");
//   const [pwd, setPwd] = useState<string>("");

//   const [isCreate, setIsCreate] = useState<boolean>(false);
//   const [loginModalcontrol, setLoginModalControl] = useState<boolean>(false);

//   loginModalcontrol
//     ? (document.body.style.overflow = "hidden")
//     : (document.body.style.overflow = "unset");

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

//   const temp=(e:any)=>{
//     const {target:{name,value}}=e
//     if(name === "a"){
//       console.log(value)
//     }
//   }
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

//   const HandleLoginModal = () => {
//     setEmail("");
//     setPwd("");
//     setIsCreate(false);
//     setLoginModalControl(!loginModalcontrol);
//   };

//   const google = () => {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         console.log(credential);
//         if (!credential) return null;
//         const token = credential.accessToken;
//         // // The signed-in user info.
//         const user = result.user;
//         // ...
//       })
//       .catch((error) => {
//         // // Handle Errors here.
//         const errorCode = error.code;
//         console.log(errorCode);
//         const errorMessage = error.message;
//         console.log(errorMessage);
//         // // The email of the user's account used.
//         const email = error.customData.email;
//         console.log(email);
//         // // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         console.log(credential);
//         // ...
//       });
//   };
//   return (
//     <>
//       {loginModalcontrol ? (
//         <DialogBox>
//           <S.UserForm name="a" onChange={temp} onSubmit={handleSubmit}>
//             <S.UserFormHead>
//               <div></div>
//               <div>{isCreate ? "회원가입" : "로그인"}</div>
//               <S.CloseLoginModalButton type="button" onClick={HandleLoginModal}>
//                 &#10005;
//               </S.CloseLoginModalButton>
//             </S.UserFormHead>
//             <input
//               placeholder="email"
//               type="email"
//               name="email"
//               onChange={handleInputChange}
//               value={email}
//             />
//             <input
//               placeholder="password"
//               type="password"
//               name="pwd"
//               onChange={handleInputChange}
//               value={pwd}
//             />
//             <S.SubmitButton>{isCreate ? "만들기" : "로그인"}</S.SubmitButton>
//             <S.SubmitButton onClick={handleClickCreate}>
//               {isCreate ? "취소" : "회원가입"}
//             </S.SubmitButton>
//             <button name="b" onChange={temp} onClick={google}>구글</button>
//           </S.UserForm>
//         </DialogBox>
//       ) : (
//         <S.LoginButton
//           type="button"
//           onClick={() => setLoginModalControl(!loginModalcontrol)}
//         >
//           Login
//         </S.LoginButton>
//       )}
//     </>
//   );
// };

// export default Login;
