import React, { ButtonHTMLAttributes, Children } from "react";
import * as S from "./button.styled";

export interface Props {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  nav?: boolean;
  Snav?: boolean;
  User?: boolean;
  X?: boolean;
}

const Button = ({ children, onClick, nav, Snav, User, X }: Props) => {
  return (
    <>
      {nav && <S.NavBtn onClick={onClick}>{children}</S.NavBtn>}
      {Snav && <S.SnavBtn onClick={onClick}>{children}</S.SnavBtn>}
      {User && <S.User onClick={onClick}>{children}</S.User>}
      {X && <S.X onClick={onClick}>{children}</S.X>}
    </>
  );
};

export default Button;
