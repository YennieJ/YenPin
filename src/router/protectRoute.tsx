import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "service/authContext";

type Props = {
  children: JSX.Element;
};
const ProtectRoute = ({ children }: Props) => {
  const userInfo = useContext(AuthContext);

  if (!userInfo) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectRoute;
