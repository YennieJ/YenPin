//authProvider.tsx
import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";

import { auth } from "./firebase";

import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "@firebase/auth";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((fbUser) => {
      // console.log(`구독 실행`, fbUser);
      setUser(fbUser);
    });
    return subscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

interface AuthProps {
  email: string;
  password: string;
}
export const AuthSignUp = ({ email, password }: AuthProps) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("회원가입 성공");
    })
    .catch((e) => {
      const alreadyExists =
        "FirebaseError: Firebase: Error (auth/email-already-in-use).";
      const invaildEmail =
        "FirebaseError: Firebase: Error (auth/invalid-email).";
      if (e.message === alreadyExists) {
        alert("이미 사용중인 아이디 입니다.");
      } else if (e.message === invaildEmail) {
        alert("이메일 형식이 유효하지 않습니다.");
      }
    });
};

export const AuthLogIn = ({ email, password }: AuthProps) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("로그인 성공");
    })
    .catch((e) => {
      const emptyAll = "FirebaseError: Firebase: Error (auth/invalid-email).";
      const emptyPassword =
        "FirebaseError: Firebase: Error (auth/internal-error).";
      const wrongId = "Firebase: Error (auth/user-not-found).";
      const wrongPassword = "Firebase: Error (auth/wrong-password).";

      if (e.message === wrongId) {
        alert("아이디를 찾을 수 없습니다.");
      } else if (e.message === wrongPassword) {
        alert("비밀번호가 틀렸습니다.");
      } else if (e.message === emptyAll || emptyPassword) {
        alert("칸을 비울 수 없습니다.");
      }
    });
};

export const GoogleProvider = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      if (!credential) return null;
      // const token = credential.accessToken;
      // const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const AuthSignOut = () => {
  signOut(auth);
};
