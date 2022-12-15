import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;

    contentBgColor: string;
    hoverColor: string;

    buttonTheme: string;
  }
}
