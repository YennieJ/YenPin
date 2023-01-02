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
  updateProfile,
} from "@firebase/auth";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const userInfo = auth.onAuthStateChanged((fbUser) => {
      setUser(fbUser);
    });
    return userInfo;
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
    .catch((error) => {
      const alreadyEmail = "Firebase: Error (auth/email-already-in-use).";

      if (error.message === alreadyEmail) {
        alert("이미 사용중인 아이디입니다.");
      }
    });
};

export const AuthLogIn = ({ email, password }: AuthProps) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("로그인 성공");
    })
    .catch((e) => {
      const emptyEmail = "Firebase: Error (auth/invalid-email).";
      const wrongId = "Firebase: Error (auth/user-not-found).";
      const wrongPassword = "Firebase: Error (auth/wrong-password).";
      const emptyPassword = "Firebase: Error (auth/internal-error).";

      if (e.message === emptyEmail) {
        alert("이메일을 바르게 입력해주세요.");
      } else if (e.message === emptyPassword || e.message === wrongPassword) {
        alert("비밀번호를 바르게 입력해주세요.");
      } else if (e.message === wrongId) {
        alert("이메일을 찾을 수 없습니다.");
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
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const AuthSignOut = () => {
  signOut(auth);
};

interface ProfileProps {
  newDisplayName: string;
  newUserPhoto: string;
}

export const UpdateProfile = ({
  newDisplayName,
  newUserPhoto,
}: ProfileProps) => {
  updateProfile(auth.currentUser!, {
    displayName: newDisplayName,
    photoURL: newUserPhoto,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};
