//authProvider.tsx
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

import { AuthContext } from "./authContext";

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
// export interface AuthProps {
//   onUserChanged: User;
// }
// export const OnAuthChange = ({ onUserChanged }: any) => {
//   auth.onAuthStateChanged((user) => {
//     onUserChanged(user);
//   });
// };
interface LoginProps {
  email: string;
  pwd: string;
}
export const AuthLogin = ({ email, pwd }: LoginProps) => {
  createUserWithEmailAndPassword(auth, email, pwd)
    .then(() => {
      alert("회원가입 성공");
    })
    .catch((e) => {
      alert(e);
    });
};

export const AuthSingup = ({ email, pwd }: LoginProps) => {
  signInWithEmailAndPassword(auth, email, pwd)
    .then(() => {
      alert("로그인 성공");
    })
    .catch((e) => {
      alert(e);
    });
};

export const AuthSignOut = () => {
  signOut(auth);
};
