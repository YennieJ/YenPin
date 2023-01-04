import React from "react";
import { AuthProvider } from "service/auth_service";

import Router from "router/router";

import GlobalStyle from "style/grobal.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "style/theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "style/atoms";

import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <AuthProvider>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </AuthProvider>
  );
};

export default App;
