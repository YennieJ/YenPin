import React from "react";
import { AuthProvider } from "service/auth_service";

import GlobalStyle from "grobal.styled";

import Router from "router/router";

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router />
    </AuthProvider>
  );
};

export default App;
