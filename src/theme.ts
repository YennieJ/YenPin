import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  textColor: "black",
  bgColor: "white",
  hoverColor: "rgba(225, 225, 225, 0.2)",

  contentTxtColor: "white",
  contentBgColor: "black",
  contentHoverColor: "rgba(0, 0, 0, 0.8)",

  contentBgc: "white",
  inputBgColor: "white",
};

export const darkTheme: DefaultTheme = {
  textColor: "white",
  bgColor: "black",
  hoverColor: "rgba(0, 0, 0, 0.2)",

  contentTxtColor: "black",
  contentBgColor: "white",
  contentHoverColor: "rgba(225, 225, 225, 0.8)",

  contentBgc: "#2f3640",
  inputBgColor: "#2f3542",
};
