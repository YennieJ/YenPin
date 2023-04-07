import React, { useContext } from "react";
import { Navigate } from "react-router";

import { AuthContext } from "service/authContext";

type Props = {
  children: JSX.Element;
};

// 로그인,로그아웃 후 url 변화를 위한

const ProtectUser = ({ children }: Props) => {
  const userInfo = useContext(AuthContext);

  if (userInfo) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectUser;
