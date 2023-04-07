import React from "react";
import { useRecoilValue } from "recoil";

import { AuthProvider } from "service/auth_service";

import Router from "router/router";

import GlobalStyle from "style/grobal.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "style/theme";
import { isDarkAtom } from "style/atoms";

const App = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <AuthProvider>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
