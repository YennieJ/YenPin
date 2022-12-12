import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    hoverColor: string;

    contentBgColor: string;
    contentTxtColor: string;
    contentHoverColor: string;

    contentBgc: string;
    inputBgColor: string;
  }
}
