import React, { useState } from "react";
import { AuthProvider } from "service/auth_service";

import Router from "router/router";

import GlobalStyle from "grobal.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "theme";

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <AuthProvider>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <button onClick={toggleTheme}> Theme</button>
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
