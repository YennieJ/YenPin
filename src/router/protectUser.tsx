import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "service/authContext";

type Props = {
  children: JSX.Element;
};
const ProtectUser = ({ children }: Props) => {
  const userInfo = useContext(AuthContext);
  const { state, pathname } = useLocation();

  if (userInfo) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectUser;
