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
      console.log(`구독 실행`, fbUser);
      setUser(fbUser);
    });
    return subscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

interface LoginProps {
  email: string;
  pwd: string;
}
export const AuthSignUp = ({ email, pwd }: LoginProps) => {
  createUserWithEmailAndPassword(auth, email, pwd)
    .then(() => {
      alert("회원가입 성공");
    })
    .catch((e) => {
      alert(e);
    });
};

export const AuthLogIn = ({ email, pwd }: LoginProps) => {
  signInWithEmailAndPassword(auth, email, pwd)
    .then(() => {
      alert("로그인 성공");
    })
    .catch((e) => {
      alert(e);
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
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      const email = error.customData.email;
      console.log(email);
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    });
};

export const AuthSignOut = () => {
  signOut(auth);
};
